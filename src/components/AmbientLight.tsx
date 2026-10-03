import React from 'react';

export const AmbientLight: React.FC = () => {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      style={{ transform: 'translateZ(0)', willChange: 'transform' }}
      aria-hidden="true"
    >
      {/* 1. Top Hero Ambient Glow (Rich Blue-Violet) */}
      <div
        className="absolute -top-32 right-1/4 w-[750px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(40, 107, 255, 0.16) 0%, rgba(105, 59, 255, 0.10) 45%, transparent 70%)',
        }}
      />
      
      {/* 2. Hero Left Deep Navy Glow */}
      <div
        className="absolute top-20 -left-40 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(22, 139, 255, 0.08) 0%, transparent 65%)',
        }}
      />

      {/* 3. Projects Section Ambient Glow */}
      <div
        className="absolute top-[28%] right-5 w-[700px] h-[650px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(105, 59, 255, 0.10) 0%, rgba(40, 107, 255, 0.06) 45%, transparent 70%)',
        }}
      />

      {/* 4. Experience & Tech Stack Ambient Glow */}
      <div
        className="absolute top-[55%] -left-20 w-[650px] h-[650px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(40, 107, 255, 0.08) 0%, rgba(139, 77, 255, 0.06) 45%, transparent 70%)',
        }}
      />

      {/* 5. Contact Section Ambient Glow */}
      <div
        className="absolute -bottom-32 right-1/4 w-[700px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(40, 107, 255, 0.14) 0%, rgba(139, 77, 255, 0.08) 45%, transparent 70%)',
        }}
      />

      {/* 6. Geometric grid overlay for subtle depth */}
      <div 
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.35) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />
    </div>
  );
};
