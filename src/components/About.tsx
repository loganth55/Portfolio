import React from 'react';
import { ArrowRight, GraduationCap, Award } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AboutProps {
  onOpenKnowMore: () => void;
  onOpenCertificate: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenKnowMore, onOpenCertificate }) => {
  return (
    <section id="about" className="py-24 sm:py-32 relative">
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/2 left-1/4 w-[550px] h-[550px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(40, 107, 255, 0.10) 0%, rgba(105, 59, 255, 0.05) 45%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* ========================================================= */}
          {/* Column 1 (Left): Label, Heading, Line, and Know More btn */}
          {/* ========================================================= */}
          <div className="lg:col-span-4 flex flex-col justify-start">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-semibold tracking-wider text-[#168BFF]">
                05
              </span>
              <span className="text-xs text-[#697487]">•</span>
              <span className="text-xs font-semibold tracking-wider text-[#A7B0C0] uppercase">
                ABOUT
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
              More than<br />just code
            </h2>

            <div className="w-12 h-[2px] bg-gradient-to-r from-[#168BFF] to-transparent mb-8" />

            <div>
              <button
                onClick={onOpenKnowMore}
                className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold text-[#F5F7FC] bg-[#101722]/80 hover:bg-[#162030] border border-[rgba(148,163,184,0.2)] hover:border-white/40 transition-all duration-300 active:scale-95 cursor-pointer backdrop-blur-sm shadow-sm"
              >
                <span>Know More</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-200" />
              </button>
            </div>
          </div>

          {/* ========================================================= */}
          {/* Column 2 (Center): Two-Paragraph Personal Introduction    */}
          {/* ========================================================= */}
          <div className="lg:col-span-4 space-y-5 text-sm text-[#A7B0C0] leading-relaxed pt-2">
            <p className="font-normal">
              {PERSONAL_INFO.aboutP1}
            </p>
            <p className="font-normal">
              {PERSONAL_INFO.aboutP2}
            </p>
          </div>

          {/* ========================================================= */}
          {/* Column 3 (Right): Stacked Education & Certification Cards */}
          {/* ========================================================= */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Card 1: Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative bg-[#101722] border border-[rgba(148,163,184,0.14)] hover:border-[rgba(148,163,184,0.3)] rounded-2xl p-5 sm:p-6 flex items-start gap-4 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.6)] group overflow-hidden"
            >
              {/* Top specular line */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.12] to-transparent pointer-events-none" />

              <div className="w-10 h-10 rounded-xl bg-[#168BFF]/15 border border-[#168BFF]/30 flex items-center justify-center shrink-0 text-[#168BFF] group-hover:scale-110 transition-transform shadow-[0_0_12px_rgba(22,139,255,0.2)]">
                <GraduationCap className="w-5 h-5" />
              </div>

              <div>
                <h3 className="text-sm sm:text-base font-bold text-white mb-0.5">
                  Education
                </h3>
                <p className="text-xs text-[#A7B0C0] mb-0.5 leading-snug font-medium">
                  {PERSONAL_INFO.education.degree}
                </p>
                <p className="text-xs text-[#697487] mb-1">
                  {PERSONAL_INFO.education.institution}
                </p>
                <span className="text-[11px] text-[#168BFF] font-semibold">
                  {PERSONAL_INFO.education.period}
                </span>
              </div>
            </motion.div>

            {/* Card 2: Certification */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative bg-[#101722] border border-[rgba(148,163,184,0.14)] hover:border-[rgba(148,163,184,0.3)] rounded-2xl p-5 sm:p-6 flex items-start gap-4 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.6)] group overflow-hidden"
            >
              {/* Top specular line */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.12] to-transparent pointer-events-none" />

              <div className="w-10 h-10 rounded-xl bg-[#693BFF]/15 border border-[#693BFF]/30 flex items-center justify-center shrink-0 text-[#8B4DFF] group-hover:scale-110 transition-transform shadow-[0_0_12px_rgba(105,59,255,0.2)]">
                <Award className="w-5 h-5" />
              </div>

              <div>
                <h3 className="text-sm sm:text-base font-bold text-white mb-0.5">
                  Certification
                </h3>
                <p className="text-xs text-[#A7B0C0] mb-0.5 font-medium">
                  {PERSONAL_INFO.certification.title}
                </p>
                <p className="text-xs text-[#697487] mb-2">
                  {PERSONAL_INFO.certification.issuer}
                </p>
                <button
                  onClick={onOpenCertificate}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#168BFF] hover:text-white transition-colors group/link cursor-pointer"
                >
                  <span>View Certificate</span>
                  <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
