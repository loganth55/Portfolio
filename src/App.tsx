/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { AmbientLight } from './components/AmbientLight';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { TechStack } from './components/TechStack';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ResumeModal } from './components/ResumeModal';
import { CertificateModal } from './components/CertificateModal';
import { AboutModal } from './components/AboutModal';
import { AllProjectsModal } from './components/AllProjectsModal';
import { FullScreenGlare } from './components/FullScreenGlare';
import { Project } from './data/portfolioData';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [resumeOpen, setResumeOpen] = useState<boolean>(false);
  const [certificateOpen, setCertificateOpen] = useState<boolean>(false);
  const [aboutOpen, setAboutOpen] = useState<boolean>(false);
  const [allProjectsOpen, setAllProjectsOpen] = useState<boolean>(false);

  // High-performance IntersectionObserver for active section (zero scroll lag)
  useEffect(() => {
    const sectionIds = ['home', 'projects', 'experience', 'tech-stack', 'about', 'contact'];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveSection(id === 'tech-stack' ? 'experience' : id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -55% 0px',
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#080D16] text-[#F5F7FC] relative selection:bg-[#286BFF]/30 selection:text-white">
      {/* Full-Screen Glare Effect (appears once for 2s on first scroll, never again) */}
      <FullScreenGlare />

      {/* Immersive Ambient Background Lighting */}
      <AmbientLight />

      {/* Top Header Navbar */}
      <Navbar
        onOpenResume={() => setResumeOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Sections matching the Reference Screenshot sequence */}
      <main className="relative z-10">
        {/* 01: Hero Section */}
        <Hero
          onExploreProjects={() => scrollToSection('projects')}
          onContactClick={() => scrollToSection('contact')}
        />

        {/* 02: Selected Projects Section */}
        <Projects
          onSelectProject={(proj) => setSelectedProject(proj)}
          onViewAllProjects={() => setAllProjectsOpen(true)}
        />

        {/* 03: Professional Experience Section */}
        <Experience />

        {/* 04: Technologies I Work With */}
        <TechStack />

        {/* 05: About Section with Education & Certification cards */}
        <About
          onOpenKnowMore={() => setAboutOpen(true)}
          onOpenCertificate={() => setCertificateOpen(true)}
        />

        {/* 06: Contact Section */}
        <Contact />
      </main>

      {/* Minimal Footer */}
      <Footer />

      {/* Interactive Modals */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      <CertificateModal
        isOpen={certificateOpen}
        onClose={() => setCertificateOpen(false)}
      />

      <AboutModal
        isOpen={aboutOpen}
        onClose={() => setAboutOpen(false)}
      />

      <AllProjectsModal
        isOpen={allProjectsOpen}
        onClose={() => setAllProjectsOpen(false)}
        onSelectProject={(proj) => setSelectedProject(proj)}
      />
    </div>
  );
}
