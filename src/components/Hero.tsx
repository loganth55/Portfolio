import React, { useRef } from 'react';
import { ArrowRight, Code2, CheckCircle2 } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onExploreProjects: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProjects, onContactClick }) => {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Subtle Pointer Parallax for Desktop
  const heroRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 100 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const orbX = useTransform(smoothMouseX, [-400, 400], [-10, 10]);
  const orbY = useTransform(smoothMouseY, [-400, 400], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="home"
      className="relative min-h-[95vh] lg:min-h-screen flex flex-col justify-between pt-28 pb-10 overflow-hidden"
    >
      {/* Background Soft Blue/Purple Radial Flare (Hardware-Accelerated) */}
      <div
        className="absolute top-1/4 right-1/4 w-[700px] h-[700px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(40, 107, 255, 0.16) 0%, rgba(105, 59, 255, 0.10) 45%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ========================================================= */}
          {/* Left Column: Typography, Subtitle, Buttons, Availability  */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Role Label */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-4"
            >
              <span className="text-xs font-semibold tracking-[0.25em] text-[#697487] uppercase inline-block">
                {PERSONAL_INFO.badge}
              </span>
            </motion.div>

            {/* Large Name on Two Lines */}
            <h1 className="text-6xl sm:text-7xl lg:text-[5.5rem] font-bold tracking-tight leading-[1.04] mb-6">
              <span className="block text-white">
                {PERSONAL_INFO.firstName}
              </span>
              <span className="block gradient-name">
                {PERSONAL_INFO.lastName}
              </span>
            </h1>

            {/* Short Introduction */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="max-w-lg text-[#A7B0C0] text-sm sm:text-base leading-relaxed mb-8 font-normal"
            >
              {PERSONAL_INFO.statement}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mb-8"
            >
              <button
                onClick={onExploreProjects}
                className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-black bg-white hover:bg-slate-100 transition-all duration-300 active:scale-95 shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:shadow-[0_0_35px_rgba(255,255,255,0.35)] cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1.5 transition-transform duration-200" />
              </button>

              <button
                onClick={onContactClick}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-medium text-[#F5F7FC] bg-[#101722]/60 hover:bg-[#162030] border border-[rgba(148,163,184,0.2)] hover:border-white/40 transition-all duration-300 active:scale-95 cursor-pointer backdrop-blur-sm shadow-sm"
              >
                <span>Let's Connect</span>
              </button>
            </motion.div>

            {/* Availability Indicator with Soft Glowing Pulse */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-2.5 text-xs text-[#A7B0C0]"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#64D98A] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#64D98A] shadow-[0_0_10px_#64D98A]" />
              </span>
              <span>{PERSONAL_INFO.availability}</span>
            </motion.div>
          </motion.div>

          {/* ========================================================= */}
          {/* Right Column: Developer Code Screen                      */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            ref={heroRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="lg:col-span-5 relative flex items-center justify-center lg:justify-end py-4"
          >
            <div className="relative w-full max-w-[430px]">
              {/* Glassmorphic Code IDE Screen */}
              <motion.div
                style={{ x: orbX, y: orbY }}
                className="relative rounded-2xl bg-[#0B111E]/95 border border-[rgba(148,163,184,0.22)] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] backdrop-blur-xl overflow-hidden group"
              >
                {/* macOS IDE Header Bar */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-[rgba(148,163,184,0.12)] bg-[#0e1626]/85 text-xs relative z-10">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80 shadow-[0_0_6px_rgba(244,63,94,0.4)]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80 shadow-[0_0_6px_rgba(245,158,11,0.4)]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 shadow-[0_0_6px_rgba(16,185,129,0.4)]" />
                    <span className="text-[11px] text-[#A7B0C0] font-mono ml-2 flex items-center gap-1.5">
                      <Code2 className="w-3.5 h-3.5 text-[#168BFF]" />
                      <span>LoganthPranav.jsx</span>
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[#168BFF]/10 text-[10px] text-[#168BFF] font-mono border border-[#168BFF]/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#168BFF] animate-pulse" />
                    <span>git:main</span>
                  </div>
                </div>

                {/* Code Body */}
                <div className="p-5 font-mono text-[11px] sm:text-xs leading-relaxed space-y-1 text-slate-300 relative z-10">
                  <div className="text-[#697487] italic">// High-performance full stack engineer</div>
                  <div className="text-[#697487] italic mb-2">// Clean architecture & resilient systems</div>
                  
                  <div>
                    <span className="text-[#693BFF] font-semibold">const</span>{' '}
                    <span className="text-white font-semibold">developer</span> = &#123;
                  </div>

                  <div className="pl-4">
                    <span className="text-[#38bdf8]">name</span>:{' '}
                    <span className="text-[#64D98A]">"{PERSONAL_INFO.name}"</span>,
                  </div>

                  <div className="pl-4">
                    <span className="text-[#38bdf8]">role</span>:{' '}
                    <span className="text-[#64D98A]">"Full Stack Developer"</span>,
                  </div>

                  <div className="pl-4">
                    <span className="text-[#38bdf8]">stack</span>: [
                    <span className="text-[#e2e8f0]">"React.js"</span>,{' '}
                    <span className="text-[#e2e8f0]">"Node.js"</span>,{' '}
                    <span className="text-[#e2e8f0]">"Express"</span>,{' '}
                    <span className="text-[#e2e8f0]">"MySQL"</span>
                    ],
                  </div>

                  <div className="pl-4">
                    <span className="text-[#38bdf8]">featuredProject</span>:{' '}
                    <span className="text-amber-300">"OrnaFlow Jewellery ERP"</span>,
                  </div>

                  <div className="pl-4">
                    <span className="text-[#38bdf8]">principles</span>: [
                    <span className="text-slate-300">"Zero Bloat"</span>,{' '}
                    <span className="text-slate-300">"Clean REST APIs"</span>,{' '}
                    <span className="text-slate-300">"Relational Integrity"</span>
                    ],
                  </div>

                  <div className="pl-4">
                    <span className="text-[#38bdf8]">status</span>:{' '}
                    <span className="text-[#64D98A]">"Available for hire"</span>
                  </div>

                  <div>&#125;;</div>

                  <div className="pt-3 mt-2 border-t border-[rgba(148,163,184,0.1)] flex items-center justify-between text-[10px] text-[#A7B0C0]">
                    <div className="flex items-center gap-1.5 text-[#64D98A]">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Architecture: Verified & Live</span>
                    </div>
                    <span className="text-[#697487]">JavaScript</span>
                  </div>
                </div>
              </motion.div>

              {/* Floating Callout Box: 01 — Turning ideas into useful and scalable products */}
              <div className="absolute -bottom-8 -left-3 sm:-left-6 z-30 max-w-[215px] p-3 rounded-xl bg-[#0e1626]/95 backdrop-blur-md border border-[rgba(148,163,184,0.22)] shadow-xl shadow-black/60">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-[#168BFF]">01</span>
                  <span className="w-5 h-[1px] bg-[#168BFF]" />
                </div>
                <p className="text-[11px] text-[#F5F7FC] leading-snug font-normal">
                  {PERSONAL_INFO.editorialQuote}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* Scroll Down Indicator at Bottom Right                      */}
      {/* ========================================================= */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full flex justify-end">
        <button
          onClick={() => handleScrollTo('projects')}
          className="flex items-center gap-2.5 text-[#697487] hover:text-[#A7B0C0] transition-colors cursor-pointer group"
          aria-label="Scroll down to projects"
        >
          {/* Pill mouse icon with line inside */}
          <div className="w-4 h-7 border border-[rgba(148,163,184,0.3)] group-hover:border-[#168BFF] rounded-full flex justify-center pt-1 transition-colors">
            <span className="w-0.5 h-1.5 bg-[#168BFF] rounded-full animate-bounce" />
          </div>
          {/* Stacked SCROLL / DOWN text */}
          <div className="flex flex-col text-[9px] font-bold tracking-[0.2em] uppercase leading-tight text-left">
            <span>SCROLL</span>
            <span>DOWN</span>
          </div>
        </button>
      </div>
    </section>
  );
};
