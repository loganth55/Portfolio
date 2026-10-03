import React, { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onExploreProjects: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProjects, onContactClick }) => {
  const sections = [
    { num: '01', label: 'Home', id: 'home', active: true },
    { num: '02', label: 'Projects', id: 'projects', active: false },
    { num: '03', label: 'Experience', id: 'experience', active: false },
    { num: '04', label: 'About', id: 'about', active: false },
    { num: '05', label: 'Contact', id: 'contact', active: false },
  ];

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Subtle Pointer Parallax for Desktop
  const heroRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 100 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const orbX = useTransform(smoothMouseX, [-400, 400], [-14, 14]);
  const orbY = useTransform(smoothMouseY, [-400, 400], [-14, 14]);
  const crescentX = useTransform(smoothMouseX, [-400, 400], [10, -10]);
  const crescentY = useTransform(smoothMouseY, [-400, 400], [10, -10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
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
          {/* Right Column: Glowing Celestial Orb & Section Navigation  */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            ref={heroRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="lg:col-span-5 relative flex items-center justify-center lg:justify-end min-h-[380px] sm:min-h-[440px]"
          >
            {/* The Main Celestial Orb with Interactive Parallax */}
            <motion.div
              style={{ x: orbX, y: orbY }}
              className="relative w-[320px] h-[320px] sm:w-[390px] sm:h-[390px] lg:w-[440px] lg:h-[440px] lg:translate-x-8"
            >
              {/* Diffuse glowing aura behind orb */}
              <div
                className="absolute -inset-8 rounded-full pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at center, rgba(22, 139, 255, 0.28) 0%, rgba(105, 59, 255, 0.20) 45%, rgba(139, 77, 255, 0.12) 65%, transparent 75%)',
                }}
              />

              {/* The 3D Sphere Body */}
              <div className="absolute inset-0 rounded-full bg-[#0A101C] border border-[rgba(148,163,184,0.22)] overflow-hidden shadow-[inset_0_0_70px_rgba(40,107,255,0.25)] animate-breathing-orb">
                
                {/* Upper-right intense gradient crescent with parallax shift */}
                <motion.div
                  style={{ x: crescentX, y: crescentY }}
                  className="absolute -top-16 -right-16 w-80 h-80 sm:w-96 sm:h-96 rounded-full pointer-events-none"
                >
                  <div
                    className="w-full h-full rounded-full"
                    style={{
                      background: 'radial-gradient(circle at 75% 25%, #8B4DFF 0%, #286BFF 35%, #168BFF 55%, transparent 75%)',
                      filter: 'blur(30px)',
                      opacity: 0.9,
                    }}
                  />
                </motion.div>

                {/* Subtle internal fine orbit ring arcs */}
                <svg
                  className="w-full h-full opacity-35 animate-spin-ring pointer-events-none"
                  viewBox="0 0 400 400"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="200" cy="200" r="170" stroke="#168BFF" strokeWidth="0.8" strokeDasharray="3 5" opacity="0.4" />
                  <ellipse cx="200" cy="200" rx="195" ry="85" stroke="#693BFF" strokeWidth="1" opacity="0.4" transform="rotate(-28 200 200)" />
                  <ellipse cx="200" cy="200" rx="180" ry="50" stroke="#286BFF" strokeWidth="0.8" opacity="0.3" transform="rotate(32 200 200)" />
                </svg>

                {/* Subtle soft center illumination */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 bg-[#168BFF]/12 rounded-full blur-2xl pointer-events-none" />
              </div>

              {/* Fine outer orbital ring crossing outside sphere */}
              <div className="absolute -inset-10 rounded-full border border-[rgba(148,163,184,0.14)] pointer-events-none transform -rotate-12" />

              {/* Floating Callout Box: 01 — Turning ideas into useful and scalable products */}
              <div className="absolute bottom-6 -left-8 sm:-left-12 z-20 max-w-[210px] sm:max-w-[220px] p-3 rounded-xl bg-[#0e1626]/80 backdrop-blur-md border border-[rgba(148,163,184,0.16)] shadow-lg shadow-black/40">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xs font-bold text-[#168BFF]">01</span>
                  <span className="w-5 h-[1px] bg-[#168BFF]" />
                </div>
                <p className="text-xs text-[#F5F7FC] leading-relaxed font-normal">
                  {PERSONAL_INFO.editorialQuote}
                </p>
              </div>

              {/* Vertical Section Navigation List on the right of the sphere */}
              <div className="absolute top-1/2 -translate-y-1/2 -right-4 sm:-right-8 z-20 flex flex-col gap-3">
                {sections.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => handleScrollTo(sec.id)}
                    className="flex items-center gap-3 text-xs text-left group focus:outline-none cursor-pointer transition-all duration-200 hover:translate-x-1"
                  >
                    <span
                      className={`font-semibold transition-colors ${
                        sec.active
                          ? 'text-[#168BFF]'
                          : 'text-[#697487] group-hover:text-[#A7B0C0]'
                      }`}
                    >
                      {sec.num}
                    </span>
                    <span
                      className={`transition-colors ${
                        sec.active
                          ? 'text-white font-medium drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]'
                          : 'text-[#697487] group-hover:text-[#A7B0C0]'
                      }`}
                    >
                      {sec.label}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
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
