import React, { useState } from 'react';
import { motion } from 'motion/react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const [activeExpId, setActiveExpId] = useState<string | null>(null);

  return (
    <section id="experience" className="py-24 sm:py-32 relative">
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/2 -right-40 w-[550px] h-[550px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(105, 59, 255, 0.12) 0%, rgba(40, 107, 255, 0.06) 45%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ========================================================= */}
          {/* Left Column: Heading and Context Statement                */}
          {/* ========================================================= */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-semibold tracking-wider text-[#168BFF]">
                03
              </span>
              <span className="text-xs text-[#697487]">•</span>
              <span className="text-xs font-semibold tracking-wider text-[#A7B0C0] uppercase">
                EXPERIENCE
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
              My professional<br />journey
            </h2>

            <p className="text-sm text-[#A7B0C0] leading-relaxed max-w-sm mb-6">
              Hands-on experience building real-world applications, collaborating with teams and improving through continuous learning.
            </p>

            <div className="w-12 h-[2px] bg-gradient-to-r from-[#168BFF] to-transparent" />
          </div>

          {/* ========================================================= */}
          {/* Right Column: Clean Interactive Timeline                   */}
          {/* ========================================================= */}
          <div className="lg:col-span-8">
            <div className="space-y-12 sm:space-y-14 relative">
              {EXPERIENCES.map((exp, index) => {
                const periodParts = exp.period.split('—');
                const startPeriod = periodParts[0]?.trim();
                const endPeriod = periodParts[1]?.trim() ? `— ${periodParts[1].trim()}` : '';
                const isHovered = activeExpId === exp.id;

                return (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    onMouseEnter={() => setActiveExpId(exp.id)}
                    onMouseLeave={() => setActiveExpId(null)}
                    className="grid grid-cols-12 gap-4 sm:gap-6 items-start group/exp cursor-default"
                  >
                    {/* Left: Dates */}
                    <div className="col-span-4 sm:col-span-3 text-right pr-2 pt-0.5">
                      <div className={`text-xs sm:text-sm font-semibold transition-colors duration-200 ${
                        isHovered ? 'text-white' : 'text-[#F5F7FC]'
                      }`}>
                        {startPeriod}
                      </div>
                      <div className="text-xs text-[#697487] font-medium">
                        {endPeriod}
                      </div>
                    </div>

                    {/* Center: Timeline Node and Vertical Line */}
                    <div className="col-span-1 relative flex justify-center self-stretch">
                      {/* Vertical line connecting nodes */}
                      <div className="absolute top-2 bottom-0 w-[1px] bg-gradient-to-b from-[rgba(148,163,184,0.22)] via-[rgba(148,163,184,0.15)] to-transparent -mb-12 sm:-mb-14" />
                      
                      {/* Interactive Glowing Blue Node */}
                      <div
                        className={`relative z-10 w-3.5 h-3.5 rounded-full mt-1 transition-all duration-300 ${
                          isHovered
                            ? 'bg-white ring-4 ring-[#168BFF] shadow-[0_0_15px_#168BFF]'
                            : 'bg-[#168BFF] ring-4 ring-[#168BFF]/20 shadow-[0_0_8px_rgba(22,139,255,0.4)]'
                        }`}
                      />
                    </div>

                    {/* Right: Role, Company, and Responsibilities */}
                    <div className={`col-span-7 sm:col-span-8 pl-1 sm:pl-3 p-4 rounded-2xl transition-all duration-300 ${
                      isHovered
                        ? 'bg-[#101722]/80 border border-[rgba(148,163,184,0.18)] shadow-lg shadow-black/40'
                        : 'border border-transparent'
                    }`}>
                      <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug group-hover/exp:text-[#F5F7FC]">
                        {exp.role}
                      </h3>
                      
                      <div className="text-xs sm:text-sm font-semibold text-[#168BFF] mb-3">
                        {exp.company}
                      </div>

                      <ul className="space-y-2 text-xs sm:text-sm text-[#A7B0C0] leading-relaxed">
                        {exp.bullets.map((bullet, bIndex) => (
                          <li key={bIndex} className="flex items-start gap-2">
                            <span className={`mt-0.5 shrink-0 transition-colors ${
                              isHovered ? 'text-[#168BFF]' : 'text-[#697487]'
                            }`}>•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
