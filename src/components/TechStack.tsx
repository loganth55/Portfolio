import React, { useState } from 'react';
import { motion } from 'motion/react';

export const TechStack: React.FC = () => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const technologies = [
    {
      name: 'React.js',
      color: '#00D5FF',
      glow: 'rgba(0, 213, 255, 0.25)',
      svg: (
        <svg className="w-8 h-8 text-[#00D5FF]" viewBox="-11.5 -10.23174 23 20.46348" fill="none">
          <circle cx="0" cy="0" r="2.05" fill="#00D5FF" />
          <g stroke="#00D5FF" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      )
    },
    {
      name: 'Node.js',
      color: '#22c55e',
      glow: 'rgba(34, 197, 94, 0.25)',
      svg: (
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
          <path
            d="M16 3L4 9.9v14.2L16 31l12-6.9V9.9L16 3z"
            stroke="#22c55e"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M16 9v14M10 13l6 3.5 6-3.5"
            stroke="#22c55e"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      )
    },
    {
      name: 'Express.js',
      color: '#ffffff',
      glow: 'rgba(255, 255, 255, 0.2)',
      svg: (
        <div className="w-8 h-8 rounded-full bg-[#182030] border border-[rgba(148,163,184,0.25)] flex items-center justify-center font-bold text-white text-xs tracking-tighter shadow-sm">
          ex
        </div>
      )
    },
    {
      name: 'MySQL',
      color: '#00D5FF',
      glow: 'rgba(0, 213, 255, 0.25)',
      svg: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#00D5FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
        </svg>
      )
    },
    {
      name: 'Git',
      color: '#f97316',
      glow: 'rgba(249, 115, 22, 0.25)',
      svg: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="18" r="3" />
          <circle cx="6" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <path d="M18 15V9a3 3 0 0 0-3-3H9" />
          <path d="M6 9v6" />
        </svg>
      )
    },
    {
      name: 'Tailwind CSS',
      color: '#06b6d4',
      glow: 'rgba(6, 182, 212, 0.25)',
      svg: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path
            d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z"
            fill="#06b6d4"
          />
        </svg>
      )
    }
  ];

  return (
    <section id="tech-stack" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left: Heading */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-semibold tracking-wider text-[#168BFF]">
                04
              </span>
              <span className="text-xs text-[#697487]">•</span>
              <span className="text-xs font-semibold tracking-wider text-[#A7B0C0] uppercase">
                TECH STACK
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Technologies<br />I work with
            </h2>
          </div>

          {/* Right: 6 Outlined Tiles in a Row with Brand Glow */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
              {technologies.map((tech, index) => {
                const isHovered = hoveredTech === tech.name;

                return (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                    onMouseEnter={() => setHoveredTech(tech.name)}
                    onMouseLeave={() => setHoveredTech(null)}
                    style={{
                      boxShadow: isHovered
                        ? `0 10px 25px -5px ${tech.glow}, inset 0 1px 0 0 rgba(255,255,255,0.15)`
                        : 'inset 0 1px 0 0 rgba(255,255,255,0.05)',
                      borderColor: isHovered ? tech.color : 'rgba(148,163,184,0.14)',
                    }}
                    className="relative bg-[#101722] rounded-2xl p-5 flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-1.5 group cursor-default h-[118px] border overflow-hidden"
                  >
                    {/* Subtle internal gradient highlight */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at center, ${tech.glow} 0%, transparent 70%)`,
                      }}
                    />

                    <div className="relative z-10 h-9 flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-115">
                      {tech.svg}
                    </div>
                    
                    <span className="relative z-10 text-xs font-semibold text-[#A7B0C0] group-hover:text-white transition-colors">
                      {tech.name}
                    </span>
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
