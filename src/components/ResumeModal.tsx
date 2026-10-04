import React, { useEffect } from 'react';
import { X, Printer, Mail, MapPin } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, PROJECTS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] bg-[#0B111D] border border-[rgba(148,163,184,0.18)] rounded-2xl overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Controls Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[rgba(148,163,184,0.1)] bg-[#101722] print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#168BFF]" />
            <h2 className="text-xs sm:text-sm font-semibold text-white uppercase tracking-wider">
              Curriculum Vitae — {PERSONAL_INFO.name}
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-[#F5F7FC] bg-[#162030] hover:bg-[#1e2a40] border border-[rgba(148,163,184,0.15)] rounded-lg transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-[#168BFF]" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-[#A7B0C0] hover:text-white rounded-lg bg-[#162030] border border-[rgba(148,163,184,0.15)] cursor-pointer"
              aria-label="Close CV"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Sheet */}
        <div className="overflow-y-auto p-6 sm:p-10 bg-[#080D16] text-[#F5F7FC] font-sans print:bg-white print:text-black print:p-0">
          {/* Header */}
          <div className="border-b border-[rgba(148,163,184,0.12)] pb-6 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
              <h1 className="text-3xl font-extrabold text-white tracking-tight">
                {PERSONAL_INFO.name}
              </h1>
              <span className="text-sm font-semibold text-[#168BFF]">
                {PERSONAL_INFO.role}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs text-[#A7B0C0]">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-[#168BFF]" />
                <span>{PERSONAL_INFO.email}</span>
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#168BFF]" />
                <span>{PERSONAL_INFO.location}</span>
              </span>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#168BFF] transition-colors"
              >
                linkedin.com/in/loganth-pranav-39a671269
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#168BFF] transition-colors"
              >
                github.com/loganth55
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-6">
            <h2 className="text-xs font-bold text-white uppercase tracking-wider mb-2 text-[#168BFF]">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-[#A7B0C0] leading-relaxed">
              Full Stack Developer with practical engineering experience in React.js, Node.js, Express, and MySQL. Proven track record developing responsive user interfaces, designing scalable RESTful APIs, and implementing transactional database architectures. Passionate about solving real-world business bottlenecks with clean code, structured design patterns, and high-performance frontend interfaces.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="mb-6">
            <h2 className="text-xs font-bold text-white uppercase tracking-wider mb-3 text-[#168BFF]">
              Technical Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="bg-[#101722] p-3 rounded-lg border border-[rgba(148,163,184,0.1)]">
                <span className="font-semibold text-white block mb-1">Frontend Engineering</span>
                <p className="text-[#A7B0C0]">React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Responsive Design, State Management</p>
              </div>
              <div className="bg-[#101722] p-3 rounded-lg border border-[rgba(148,163,184,0.1)]">
                <span className="font-semibold text-white block mb-1">Backend & APIs</span>
                <p className="text-[#A7B0C0]">Node.js, Express.js, RESTful Architecture, JSON Web Tokens (JWT), Middleware, API Routing</p>
              </div>
              <div className="bg-[#101722] p-3 rounded-lg border border-[rgba(148,163,184,0.1)]">
                <span className="font-semibold text-white block mb-1">Database Systems</span>
                <p className="text-[#A7B0C0]">MySQL, Relational Schema Normalization, Indexes, InnoDB Transactions, Query Optimization</p>
              </div>
              <div className="bg-[#101722] p-3 rounded-lg border border-[rgba(148,163,184,0.1)]">
                <span className="font-semibold text-white block mb-1">Tools & Technologies</span>
                <p className="text-[#A7B0C0]">Git & GitHub, Postman, Vite, npm, VS Code, Linux Shell, Chrome Developer Tools</p>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="mb-6">
            <h2 className="text-xs font-bold text-white uppercase tracking-wider mb-3 text-[#168BFF]">
              Work Experience
            </h2>
            <div className="space-y-4">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="border-l-2 border-[rgba(148,163,184,0.18)] pl-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs mb-1">
                    <span className="font-bold text-white text-sm">{exp.role}</span>
                    <span className="text-[#697487]">{exp.period}</span>
                  </div>
                  <div className="text-xs font-semibold text-[#168BFF] mb-2">
                    {exp.company} — <span className="text-[#A7B0C0] font-normal">{exp.location}</span>
                  </div>
                  <ul className="space-y-1 text-xs text-[#A7B0C0]">
                    {exp.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#168BFF] mt-1">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div className="mb-6">
            <h2 className="text-xs font-bold text-white uppercase tracking-wider mb-3 text-[#168BFF]">
              Key Projects
            </h2>
            <div className="space-y-3">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="bg-[#101722] p-3.5 rounded-lg border border-[rgba(148,163,184,0.1)]">
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="font-bold text-white text-xs">{proj.title}</span>
                    <span className="text-[10px] text-[#168BFF]">{proj.tags.join(' • ')}</span>
                  </div>
                  <p className="text-xs text-[#A7B0C0] mb-1.5">{proj.longDescription}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h2 className="text-xs font-bold text-white uppercase tracking-wider mb-2 text-[#168BFF]">
                Education
              </h2>
              <div className="bg-[#101722] p-3 rounded-lg border border-[rgba(148,163,184,0.1)] text-xs">
                <span className="font-bold text-white block">{PERSONAL_INFO.education.degree}</span>
                <span className="text-[#A7B0C0] block">{PERSONAL_INFO.education.institution}</span>
                <span className="text-[#697487] block mt-1">{PERSONAL_INFO.education.period} • Completed</span>
              </div>
            </div>

            <div>
              <h2 className="text-xs font-bold text-white uppercase tracking-wider mb-2 text-[#168BFF]">
                Certifications
              </h2>
              <div className="bg-[#101722] p-3 rounded-lg border border-[rgba(148,163,184,0.1)] text-xs">
                <span className="font-bold text-white block">{PERSONAL_INFO.certification.title}</span>
                <span className="text-[#A7B0C0] block">{PERSONAL_INFO.certification.issuer}</span>
                <span className="text-[#697487] block mt-1">Issued {PERSONAL_INFO.certification.year} • ID: {PERSONAL_INFO.certification.credentialId}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
