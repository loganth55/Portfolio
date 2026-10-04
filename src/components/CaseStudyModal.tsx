import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Cpu, ShieldCheck, Flame } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0B111D] border border-[rgba(148,163,184,0.18)] rounded-3xl overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-[rgba(148,163,184,0.1)] bg-[#101722]">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-[#168BFF] bg-[#168BFF]/10 px-2.5 py-1 rounded-md border border-[#168BFF]/30">
              Project {project.number}
            </span>
            <h2 className="text-xl font-bold text-white tracking-tight">{project.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#A7B0C0] hover:text-white rounded-full bg-[#162030] border border-[rgba(148,163,184,0.15)] hover:border-white/30 transition-colors cursor-pointer"
            aria-label="Close Case Study"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto px-6 sm:px-8 py-8 space-y-8">
          {/* Header Summary */}
          <div>
            <span className="text-xs font-semibold text-[#168BFF] uppercase tracking-wider mb-1.5 block">
              {project.category}
            </span>
            <p className="text-base text-[#F5F7FC] leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Key Tech Badges */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span
                key={t}
                className="px-3 py-1 text-xs font-medium text-[#F5F7FC] bg-[#162030] border border-[rgba(148,163,184,0.14)] rounded-lg"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Architecture & Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#101722] border border-[rgba(148,163,184,0.12)] rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-2 text-white font-semibold text-sm">
                <Cpu className="w-4 h-4 text-[#168BFF]" />
                <span>Architecture</span>
              </div>
              <p className="text-xs text-[#A7B0C0] leading-relaxed">
                {project.architecture}
              </p>
            </div>

            <div className="bg-[#101722] border border-[rgba(148,163,184,0.12)] rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-2 text-white font-semibold text-sm">
                <ShieldCheck className="w-4 h-4 text-[#64D98A]" />
                <span>Impact & Metrics</span>
              </div>
              <p className="text-xs text-[#A7B0C0] leading-relaxed">
                {project.metrics}
              </p>
            </div>
          </div>

          {/* Key Features List */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Core Capabilities Implemented
            </h4>
            <div className="space-y-2.5">
              {project.features.map((feature, idx) => {
                const parts = feature.split(' – ');
                return (
                  <div key={idx} className="flex items-start gap-3 bg-[#101722]/80 border border-[rgba(148,163,184,0.1)] p-3.5 rounded-xl">
                    <CheckCircle2 className="w-4 h-4 text-[#168BFF] mt-0.5 shrink-0" />
                    {parts.length === 2 ? (
                      <span className="text-xs sm:text-sm leading-relaxed">
                        <strong className="text-white font-semibold">{parts[0]}</strong>
                        <span className="text-slate-400 font-normal"> – </span>
                        <span className="text-[#A7B0C0] font-normal">{parts[1]}</span>
                      </span>
                    ) : (
                      <span className="text-xs sm:text-sm text-[#F5F7FC] leading-relaxed">{feature}</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Technical Challenge */}
          <div className="bg-[#101722] border border-[#286BFF]/25 rounded-2xl p-6">
            <h4 className="text-xs font-semibold text-[#168BFF] uppercase tracking-wider mb-2 flex items-center gap-2">
              <Flame className="w-4 h-4 text-amber-400" />
              <span>Engineering Challenge</span>
            </h4>
            <p className="text-xs sm:text-sm text-[#F5F7FC] leading-relaxed">
              {project.challenges}
            </p>
          </div>
        </div>

        {/* Modal Bottom Actions */}
        <div className="px-6 sm:px-8 py-4 border-t border-[rgba(148,163,184,0.1)] bg-[#101722] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium text-white bg-[#162030] border border-[rgba(148,163,184,0.18)] hover:border-white/40 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Source Repository</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium text-white gradient-btn hover:brightness-110 transition-all"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Demonstration</span>
              </a>
            )}
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-[#A7B0C0] hover:text-white transition-colors cursor-pointer"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
};
