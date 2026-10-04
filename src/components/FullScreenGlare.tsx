import React, { useEffect, useRef, useState } from 'react';

/**
 * FullScreenGlare:
 * A modern, minimal specular light glare effect covering the FULL screen.
 * Triggers once on first scroll, sweeps across the entire viewport for exactly 2 seconds,
 * disappears, and NEVER appears a 2nd time.
 */
export const FullScreenGlare: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isFinished, setIsFinished] = useState<boolean>(() => {
    try {
      return sessionStorage.getItem('portfolio_glare_triggered') === 'true';
    } catch {
      return false;
    }
  });

  const hasTriggeredRef = useRef<boolean>(false);

  useEffect(() => {
    if (hasTriggeredRef.current || isFinished) return;

    const handleFirstScroll = () => {
      if (hasTriggeredRef.current) return;
      hasTriggeredRef.current = true;

      try {
        sessionStorage.setItem('portfolio_glare_triggered', 'true');
      } catch {
        // ignore storage errors
      }

      // Activate the full-screen glare
      setIsActive(true);

      // Remove all listeners immediately so it never triggers again
      window.removeEventListener('scroll', handleFirstScroll);
      window.removeEventListener('wheel', handleFirstScroll);
      window.removeEventListener('touchmove', handleFirstScroll);

      // Exactly 2 seconds (2000ms) appearance, then disappear and never show again
      setTimeout(() => {
        setIsActive(false);
        setTimeout(() => {
          setIsFinished(true);
        }, 500); // allow smooth fade-out to finish before unmounting
      }, 2000);
    };

    window.addEventListener('scroll', handleFirstScroll, { passive: true });
    window.addEventListener('wheel', handleFirstScroll, { passive: true });
    window.addEventListener('touchmove', handleFirstScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleFirstScroll);
      window.removeEventListener('wheel', handleFirstScroll);
      window.removeEventListener('touchmove', handleFirstScroll);
    };
  }, [isFinished]);

  if (isFinished) return null;

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-[9999] overflow-hidden w-screen h-screen transition-opacity duration-500 ease-out ${
        isActive ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden="true"
    >
      {isActive && (
        <div
          className="absolute pointer-events-none"
          style={{
            top: '-50%',
            left: '-50%',
            width: '200%',
            height: '200%',
            background: `linear-gradient(
              125deg,
              transparent 30%,
              rgba(255, 255, 255, 0.01) 38%,
              rgba(255, 255, 255, 0.08) 44%,
              rgba(56, 189, 248, 0.25) 48%,
              rgba(255, 255, 255, 0.45) 50%,
              rgba(56, 189, 248, 0.25) 52%,
              rgba(255, 255, 255, 0.08) 56%,
              rgba(255, 255, 255, 0.01) 62%,
              transparent 70%
            )`,
            animation: 'full-screen-glare-sweep 2000ms cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
            willChange: 'transform, opacity',
          }}
        />
      )}

      <style>{`
        @keyframes full-screen-glare-sweep {
          0% {
            transform: translate3d(-60%, -60%, 0) rotate(-25deg);
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          85% {
            opacity: 0.85;
          }
          100% {
            transform: translate3d(60%, 60%, 0) rotate(-25deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};
