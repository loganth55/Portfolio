import React, { useEffect } from 'react';
import { X, Compass, Layers } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
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

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[85vh] bg-[#0B111D] border border-[rgba(148,163,184,0.18)] rounded-3xl overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-[rgba(148,163,184,0.1)] bg-[#101722]">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#168BFF]" />
            <h2 className="text-base font-bold text-white uppercase tracking-wider">
              About Loganth Pranav
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#A7B0C0] hover:text-white rounded-lg bg-[#162030] border border-[rgba(148,163,184,0.15)] cursor-pointer"
            aria-label="Close Modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6 text-sm text-[#A7B0C0] leading-relaxed">
          <div>
            <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#168BFF]" />
              <span>Engineering Approach</span>
            </h3>
            <p className="leading-relaxed">
              I believe practical software is engineered by combining clean, modern interfaces with reliable backend architecture. I focus on fundamentals: reliable data flow, structured API contracts, and performant state management.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="bg-[#101722] p-4 rounded-xl border border-[rgba(148,163,184,0.12)]">
              <span className="font-semibold text-white block mb-1 text-xs uppercase text-[#168BFF]">
                1. Practical Problem Solving
              </span>
              <p className="text-xs text-[#A7B0C0]">
                Building web and mobile solutions for concrete real-world needs, such as gold retail ERP (OrnaFlow) and expense tracking (Owezy).
              </p>
            </div>
            <div className="bg-[#101722] p-4 rounded-xl border border-[rgba(148,163,184,0.12)]">
              <span className="font-semibold text-white block mb-1 text-xs uppercase text-[#286BFF]">
                2. Full-Stack Cohesion
              </span>
              <p className="text-xs text-[#A7B0C0]">
                Connecting responsive React interfaces with Express APIs and normalized MySQL databases.
              </p>
            </div>
            <div className="bg-[#101722] p-4 rounded-xl border border-[rgba(148,163,184,0.12)]">
              <span className="font-semibold text-white block mb-1 text-xs uppercase text-[#693BFF]">
                3. Clean & Maintainable Code
              </span>
              <p className="text-xs text-[#A7B0C0]">
                Writing modular, self-documenting code with reusable React components and standard REST API patterns.
              </p>
            </div>
            <div className="bg-[#101722] p-4 rounded-xl border border-[rgba(148,163,184,0.12)]">
              <span className="font-semibold text-white block mb-1 text-xs uppercase text-[#64D98A]">
                4. Continuous Iteration
              </span>
              <p className="text-xs text-[#A7B0C0]">
                Iterating based on feedback, debugging UI issues, and learning modern best practices in software engineering.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#168BFF]" />
              <span>Background & Journey</span>
            </h3>
            <p className="leading-relaxed mb-3">
              Currently pursuing a Bachelor of Engineering in Electronics and Communication Engineering at Karpagam Institute of Technology (2022–2026), with a CGPA of 8.4/10.
            </p>
            <p className="leading-relaxed">
              Through my internships at Qugates and StormFiber, I have had the opportunity to build responsive React components, integrate REST APIs, and debug frontend workflows in agile team environments.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-[rgba(148,163,184,0.1)] bg-[#101722] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-black bg-white hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
