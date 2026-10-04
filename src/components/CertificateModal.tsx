import React, { useEffect } from 'react';
import { X, Award, CheckCircle2, ShieldCheck, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ isOpen, onClose }) => {
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#0B111D] border border-[rgba(148,163,184,0.18)] rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#168BFF]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#A7B0C0]">
              Verified Credential
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#A7B0C0] hover:text-white rounded-lg bg-[#162030] border border-[rgba(148,163,184,0.15)] cursor-pointer"
            aria-label="Close Certificate"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="border border-[rgba(148,163,184,0.14)] bg-gradient-to-b from-[#141b2b] to-[#0e1422] rounded-2xl p-6 text-center mb-6 shadow-inner">
          <div className="w-16 h-16 rounded-full bg-[#168BFF]/15 border border-[#168BFF]/30 flex items-center justify-center mx-auto mb-4 text-[#168BFF]">
            <Award className="w-8 h-8" />
          </div>

          <h3 className="text-xl font-bold text-white mb-1">
            {PERSONAL_INFO.certification.title}
          </h3>

          <p className="text-sm text-[#A7B0C0] font-medium mb-3">
            {PERSONAL_INFO.certification.issuer}
          </p>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#64D98A]/10 border border-[#64D98A]/30 text-[11px] text-[#64D98A] font-semibold mb-4">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Authenticated & Certified — {PERSONAL_INFO.certification.year}</span>
          </div>

          <div className="text-xs text-[#697487] pt-3 border-t border-[rgba(148,163,184,0.1)]">
            Credential ID: <span className="text-[#F5F7FC] font-semibold">{PERSONAL_INFO.certification.credentialId}</span>
          </div>
        </div>

        <div className="space-y-2 mb-6 text-xs text-[#A7B0C0]">
          <div className="font-semibold text-white uppercase text-[11px]">
            Demonstrated Competencies:
          </div>
          <p className="leading-relaxed bg-[#101722] p-3 rounded-xl border border-[rgba(148,163,184,0.1)]">
            {PERSONAL_INFO.certification.skills}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={PERSONAL_INFO.certification.certificateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 px-4 text-xs font-semibold text-white bg-gradient-to-r from-[#168BFF] to-[#286BFF] hover:brightness-110 rounded-xl transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(22,139,255,0.35)] cursor-pointer"
          >
            <span>Open PDF Certificate</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={onClose}
            className="py-3 px-6 text-xs font-semibold text-[#A7B0C0] bg-[#162030] hover:text-white hover:bg-[#1c293e] rounded-xl transition-colors cursor-pointer border border-[rgba(148,163,184,0.15)]"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
