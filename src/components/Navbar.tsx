import React, { useState, useEffect } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onOpenResume: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 30;
          setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-3.5 bg-[#080D16]/85 backdrop-blur-xl border-b border-[rgba(148,163,184,0.12)] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)]'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        
        {/* Left: Personal Monogram LP. */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="group flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#168BFF] rounded-lg p-1 -ml-1 cursor-pointer transition-transform duration-200 active:scale-95"
          aria-label="Loganth Pranav - Back to Top"
        >
          <span className="text-xl font-bold tracking-tight text-white transition-colors group-hover:text-slate-100">
            LP<span className="text-[#168BFF] inline-block group-hover:scale-125 transition-transform">.</span>
          </span>
        </a>

        {/* Center: Desktop Navigation Links with Animated Pill Indicator */}
        <nav className="hidden md:flex items-center gap-1.5 p-1 rounded-full bg-[#0e1524]/60 border border-[rgba(148,163,184,0.12)] backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#168BFF] ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-[#A7B0C0] hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <span className="relative z-10">{link.label}</span>
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[#168BFF]/25 to-[#693BFF]/25 border border-[#168BFF]/40 shadow-[0_0_12px_rgba(22,139,255,0.35)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right: Download Resume Button */}
        <div className="hidden md:flex items-center">
          <button
            onClick={onOpenResume}
            className="group flex items-center gap-2 px-5 py-2 text-xs font-medium text-[#F5F7FC] bg-[#101722]/90 hover:bg-[#162030] border border-[rgba(148,163,184,0.18)] hover:border-[#168BFF]/50 rounded-full transition-all duration-200 active:scale-95 cursor-pointer backdrop-blur-sm shadow-sm hover:shadow-[0_0_20px_rgba(40,107,255,0.25)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#168BFF]"
          >
            <span>Download Resume</span>
            <Download className="w-3.5 h-3.5 text-[#A7B0C0] group-hover:text-[#168BFF] group-hover:translate-y-0.5 transition-all" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#F5F7FC] bg-[#101722] border border-[rgba(148,163,184,0.18)] rounded-full active:scale-95"
          >
            <span>CV</span>
            <Download className="w-3 h-3 text-[#168BFF]" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-2 text-[#A7B0C0] hover:text-white bg-[#101722] border border-[rgba(148,163,184,0.18)] rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#168BFF] cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#080D16]/98 backdrop-blur-xl border-b border-[rgba(148,163,184,0.14)] px-6 py-6 shadow-2xl"
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`flex items-center justify-between py-2.5 px-4 rounded-xl text-sm transition-all ${
                      isActive
                        ? 'text-white bg-[#101722] border border-[#168BFF]/30 font-semibold shadow-inner'
                        : 'text-[#A7B0C0] hover:text-white hover:bg-white/[0.03]'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#168BFF]" />}
                  </a>
                );
              })}
              <div className="pt-3 border-t border-[rgba(148,163,184,0.1)] mt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 text-xs font-semibold text-black bg-white rounded-full hover:bg-slate-100 transition-colors cursor-pointer shadow-md"
                >
                  <span>Download Resume</span>
                  <Download className="w-3.5 h-3.5" />
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
