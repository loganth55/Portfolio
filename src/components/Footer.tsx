import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-[rgba(148,163,184,0.1)] bg-[#080D16] py-8 relative z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Brand & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
          <div className="text-xl font-bold tracking-tight text-white">
            LP<span className="text-[#168BFF]">.</span>
          </div>
          <p className="text-xs text-[#697487]">
            © 2026 {PERSONAL_INFO.name}. All rights reserved.
          </p>
        </div>

        {/* Center / Right: Nav Links and Scroll to Top */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-6 sm:gap-8 text-xs font-medium text-[#A7B0C0]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Circular Back-to-Top Button */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top of page"
            className="w-9 h-9 rounded-full border border-[rgba(148,163,184,0.2)] hover:border-[#168BFF] bg-[#101722] hover:bg-[#162030] flex items-center justify-center text-[#A7B0C0] hover:text-[#168BFF] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(22,139,255,0.35)] active:scale-95 cursor-pointer shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#168BFF]"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
