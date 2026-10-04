import React from 'react';
import { GraduationCap, Award, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface EducationProps {
  onOpenCertificate: () => void;
}

export const Education: React.FC<EducationProps> = ({ onOpenCertificate }) => {
  return (
    <section id="education" className="py-20 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#00D5FF]" />
            <span className="text-xs font-mono-num font-semibold tracking-wider text-[#9296A3] uppercase">
              06 / EDUCATION & CERTIFICATIONS
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
            Academic Background
          </h2>
        </div>

        {/* Compact, Clean Grid (Not oversized) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Degree Card */}
          <div className="bg-[#101218]/80 border border-white/[0.07] hover:border-white/[0.14] rounded-2xl p-6 sm:p-7 flex items-start gap-5 transition-all duration-300">
            <div className="w-11 h-11 rounded-xl bg-[#00D5FF]/10 border border-[#00D5FF]/20 flex items-center justify-center shrink-0">
              <GraduationCap className="w-5 h-5 text-[#00D5FF]" />
            </div>

            <div className="flex-1">
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="text-[10px] font-semibold text-[#00D5FF] uppercase font-mono-num tracking-wider">
                  Degree
                </span>
                <span className="text-xs font-mono-num text-[#626775]">
                  {PERSONAL_INFO.education.period}
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-white mb-1 leading-snug">
                {PERSONAL_INFO.education.degree}
              </h3>
              
              <p className="text-xs sm:text-sm text-[#9296A3] mb-2 font-medium">
                {PERSONAL_INFO.education.institution}
              </p>
              
              <div className="inline-block px-2.5 py-0.5 rounded bg-[#00D5FF]/10 border border-[#00D5FF]/20 text-[11px] font-mono-num text-[#00D5FF] mb-2">
                Completed • B.E. Degree
              </div>

              <p className="text-xs text-[#626775] leading-relaxed">
                Foundations in algorithm design, digital signals, and software architecture.
              </p>
            </div>
          </div>

          {/* Certification Card */}
          <div className="bg-[#101218]/80 border border-white/[0.07] hover:border-white/[0.14] rounded-2xl p-6 sm:p-7 flex items-start gap-5 transition-all duration-300">
            <div className="w-11 h-11 rounded-xl bg-[#35A7FF]/10 border border-[#35A7FF]/20 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5 text-[#35A7FF]" />
            </div>

            <div className="flex-1">
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="text-[10px] font-semibold text-[#35A7FF] uppercase font-mono-num tracking-wider">
                  Professional Credential
                </span>
                <span className="text-xs font-mono-num text-[#626775]">
                  {PERSONAL_INFO.certification.year}
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-white mb-1 leading-snug">
                {PERSONAL_INFO.certification.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#9296A3] mb-2 font-medium">
                {PERSONAL_INFO.certification.issuer}
              </p>

              <div className="text-[11px] font-mono-num text-[#626775] mb-3">
                ID: <span className="text-slate-300">{PERSONAL_INFO.certification.credentialId}</span>
              </div>

              <button
                onClick={onOpenCertificate}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00D5FF] hover:text-white transition-colors group cursor-pointer"
              >
                <span>View verified certificate</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
