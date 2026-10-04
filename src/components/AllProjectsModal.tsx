import React, { useState, useEffect } from 'react';
import { X, ArrowRight, Github, ExternalLink } from 'lucide-react';
import { Project, PROJECTS } from '../data/portfolioData';

interface AllProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (project: Project) => void;
}

export const AllProjectsModal: React.FC<AllProjectsModalProps> = ({
  isOpen,
  onClose,
  onSelectProject,
}) => {
  const [filter, setFilter] = useState<'all' | 'web' | 'mobile'>('all');

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

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === 'all') return true;
    return p.type === filter;
  });

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[88vh] bg-[#0B111D] border border-[rgba(148,163,184,0.18)] rounded-3xl overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-[rgba(148,163,184,0.1)] bg-[#101722]">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-[#168BFF]" />
              <span className="text-xs text-[#A7B0C0] uppercase tracking-wider font-semibold">
                Project Catalog
              </span>
            </div>
            <h2 className="text-xl font-bold text-white tracking-tight">Verified Engineering Projects</h2>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#A7B0C0] hover:text-white rounded-lg bg-[#162030] border border-[rgba(148,163,184,0.15)] cursor-pointer"
            aria-label="Close Catalog"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Filters */}
        <div className="px-6 sm:px-8 py-3 bg-[#101722]/60 border-b border-[rgba(148,163,184,0.1)] flex items-center gap-2 text-xs">
          <span className="text-[#697487] mr-2">Filter:</span>
          {(['all', ...Array.from(new Set(PROJECTS.map((p) => p.type)))]).map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t as any)}
              className={`px-3 py-1 rounded-full uppercase tracking-wider text-[11px] cursor-pointer transition-colors ${
                filter === t
                  ? 'bg-[#168BFF] text-white font-semibold'
                  : 'bg-[#162030] text-[#A7B0C0] hover:text-white'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="overflow-y-auto p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#101722] border border-[rgba(148,163,184,0.14)] hover:border-[rgba(148,163,184,0.25)] rounded-2xl p-6 flex flex-col justify-between transition-all group"
            >
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-bold text-[#168BFF]">
                    {project.number}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/[0.06] text-[#A7B0C0]">
                    {project.type}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-[#168BFF] transition-colors">
                  {project.title}
                </h3>
                <h4 className="text-xs font-medium text-[#A7B0C0] mb-3">{project.category}</h4>
                <p className="text-xs text-[#A7B0C0] leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 text-[11px] text-[#F5F7FC] bg-[#162030] border border-[rgba(148,163,184,0.1)] rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[rgba(148,163,184,0.1)]">
                <button
                  onClick={() => {
                    onClose();
                    onSelectProject(project);
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#168BFF] hover:text-white cursor-pointer transition-colors"
                >
                  <span>View Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#A7B0C0] hover:text-white transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#A7B0C0] hover:text-white transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
