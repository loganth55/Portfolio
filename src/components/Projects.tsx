import React, { useState } from 'react';
import { ArrowRight, Github, ExternalLink, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { Project, PROJECTS } from '../data/portfolioData';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
  onViewAllProjects: () => void;
}

// Reusable High-Performance Card with pure CSS specular glow (0% JS re-render overhead)
interface ShowcaseCardProps {
  children: React.ReactNode;
  className?: string;
}

const ShowcaseCard: React.FC<ShowcaseCardProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`relative rounded-[28px] bg-[#101722] border border-[rgba(148,163,184,0.14)] hover:border-[rgba(148,163,184,0.26)] transition-all duration-300 overflow-hidden group shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)] ${className}`}
    >
      {children}
    </div>
  );
};

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject, onViewAllProjects }) => {
  const ornaflow = PROJECTS.find((p) => p.id === 'ornaflow') || PROJECTS[0];
  const owezy = PROJECTS.find((p) => p.id === 'owezy') || PROJECTS[1];

  return (
    <section id="projects" className="py-24 sm:py-32 relative">
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/4 -left-40 w-[650px] h-[650px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(40, 107, 255, 0.10) 0%, rgba(105, 59, 255, 0.05) 45%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* ========================================================= */}
        {/* Section Header                                            */}
        {/* ========================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-semibold tracking-wider text-[#168BFF]">
                02
              </span>
              <span className="text-xs text-[#697487]">•</span>
              <span className="text-xs font-semibold tracking-wider text-[#A7B0C0] uppercase">
                PROJECTS
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Selected<br />Projects
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-6 lg:max-w-md">
            <p className="text-sm text-[#A7B0C0] leading-relaxed">
              A small collection of full-stack applications I've built, focused on real-world use cases and clean architecture.
            </p>
            <button
              onClick={onViewAllProjects}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-[#168BFF] group whitespace-nowrap cursor-pointer transition-colors"
            >
              <span>View all projects</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* ========================================================= */}
        {/* Project 1: OrnaFlow (Featured • In Progress)              */}
        {/* ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 sm:mb-24"
        >
          <ShowcaseCard className="p-8 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
              
              {/* Left Column: Project Info */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <div className="flex items-center gap-2.5 mb-3 flex-wrap">
                  <span className="text-xs font-bold text-[#168BFF]">
                    {ornaflow.number}
                  </span>
                  
                  {/* Accurate Status Pill: In Progress / Under Development */}
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-[#168BFF]/10 text-[#168BFF] border border-[#168BFF]/30 shadow-[0_0_10px_rgba(22,139,255,0.2)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#168BFF] animate-pulse" />
                    <span>Featured • In Progress</span>
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-1.5 tracking-tight group-hover:text-slate-100 transition-colors">
                  {ornaflow.title}
                </h3>

                <h4 className="text-sm font-semibold text-[#A7B0C0] mb-4 tracking-normal">
                  {ornaflow.category}
                </h4>

                <p className="text-sm text-[#A7B0C0] leading-relaxed mb-6">
                  {ornaflow.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {ornaflow.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium text-[#F5F7FC] bg-[#162030]/80 border border-[rgba(148,163,184,0.16)] rounded-full backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center gap-6">
                  <button
                    onClick={() => onSelectProject(ornaflow)}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#168BFF] hover:text-white transition-colors group/link cursor-pointer"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1.5 transition-transform duration-200" />
                  </button>

                  {ornaflow.githubUrl && (
                    <a
                      href={ornaflow.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#A7B0C0] hover:text-white transition-colors group/code"
                    >
                      <span>Source Code</span>
                      <Github className="w-4 h-4 group-hover/code:scale-110 transition-transform" />
                    </a>
                  )}
                </div>
              </div>

              {/* Right Column: 3D Perspective Dashboard Mockup */}
              <div className="lg:col-span-7 perspective-mockup flex justify-center items-center py-4">
                <div className="w-full max-w-xl tilted-dashboard rounded-2xl bg-[#0d1424] border border-[rgba(148,163,184,0.22)] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] p-4 sm:p-5 relative backdrop-blur-md overflow-hidden group">
                  {/* Dashboard Header Bar */}
                  <div className="flex items-center justify-between pb-3 border-b border-[rgba(148,163,184,0.12)] mb-4 text-xs text-[#697487]">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80 shadow-[0_0_6px_rgba(244,63,94,0.4)]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80 shadow-[0_0_6px_rgba(245,158,11,0.4)]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 shadow-[0_0_6px_rgba(16,185,129,0.4)]" />
                    </div>
                    <div className="bg-[#141b2d] px-3 py-1 rounded-md text-[11px] text-[#A7B0C0] flex items-center gap-2 border border-[rgba(148,163,184,0.08)]">
                      <span>ornaflow.internal/dashboard</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] text-[#64D98A] font-semibold bg-[#64D98A]/10 px-2 py-0.5 rounded-md border border-[#64D98A]/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#64D98A] animate-ping" />
                      <span>LIVE 24K: ₹7,140/g</span>
                    </div>
                  </div>

                  {/* Inner Layout: Mini Sidebar + Main Content */}
                  <div className="grid grid-cols-12 gap-3 text-slate-300">
                    
                    {/* Mini Sidebar */}
                    <div className="col-span-3 bg-[#0a0f1c] rounded-xl p-3 flex flex-col justify-between border border-[rgba(148,163,184,0.1)] text-xs">
                      <div className="space-y-3">
                        <div className="font-bold text-white text-[11px] flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-[#168BFF] shadow-[0_0_6px_#168BFF]" /> OrnaFlow
                        </div>
                        <div className="space-y-1.5 pt-2">
                          <div className="bg-[#168BFF]/20 text-[#168BFF] px-2.5 py-1.5 rounded-md text-[11px] font-semibold border border-[#168BFF]/30">
                            Overview
                          </div>
                          <div className="text-[#697487] px-2.5 py-1 text-[11px] hover:text-[#A7B0C0] transition-colors">
                            Bullion POS
                          </div>
                          <div className="text-[#697487] px-2.5 py-1 text-[11px] hover:text-[#A7B0C0] transition-colors">
                            Inventory (22K)
                          </div>
                          <div className="text-[#697487] px-2.5 py-1 text-[11px] hover:text-[#A7B0C0] transition-colors">
                            GST Invoices
                          </div>
                        </div>
                      </div>
                      <div className="text-[9px] text-[#697487] pt-2 border-t border-[rgba(148,163,184,0.08)]">
                        Showroom #01
                      </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="col-span-9 space-y-3">
                      
                      {/* Metric Cards Row */}
                      <div className="grid grid-cols-3 gap-2">
                        <div className="bg-[#141c2c] p-2.5 rounded-xl border border-[rgba(148,163,184,0.1)] shadow-inner">
                          <span className="text-[10px] text-[#697487] block font-medium">Today's Sales</span>
                          <span className="text-sm font-bold text-white">₹4,82,600</span>
                          <span className="text-[9px] text-[#64D98A] font-semibold block">+14.2%</span>
                        </div>
                        <div className="bg-[#141c2c] p-2.5 rounded-xl border border-[rgba(148,163,184,0.1)] shadow-inner">
                          <span className="text-[10px] text-[#697487] block font-medium">Vault 916</span>
                          <span className="text-sm font-bold text-white">14.850 kg</span>
                          <span className="text-[9px] text-[#168BFF] font-semibold block">Audited</span>
                        </div>
                        <div className="bg-[#141c2c] p-2.5 rounded-xl border border-[rgba(148,163,184,0.1)] shadow-inner">
                          <span className="text-[10px] text-[#697487] block font-medium">Gold Karat</span>
                          <span className="text-sm font-bold text-white">22K / 916</span>
                          <span className="text-[9px] text-[#A7B0C0] font-semibold block">Hallmarked</span>
                        </div>
                      </div>

                      {/* Bar Chart Preview */}
                      <div className="bg-[#141c2c] p-3 rounded-xl border border-[rgba(148,163,184,0.1)]">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-[11px] font-semibold text-[#F5F7FC]">
                            Revenue & Weight Flow Trends
                          </span>
                          <span className="text-[10px] text-[#697487] font-medium">Monthly View</span>
                        </div>
                        <div className="h-16 flex items-end gap-1.5 pt-1 px-1">
                          {[35, 55, 45, 80, 65, 90, 50, 75, 95, 70, 85, 92].map((h, i) => (
                            <div key={i} className="flex-1 h-full flex flex-col justify-end items-center group/bar">
                              <div
                                style={{ height: `${h}%` }}
                                className="w-full bg-gradient-to-t from-[#286BFF] via-[#4D57FF] to-[#8B4DFF] rounded-t-sm group-hover/bar:brightness-125 transition-all shadow-[0_0_8px_rgba(40,107,255,0.4)]"
                              />
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Compact SKU Ledger */}
                      <div className="bg-[#141c2c] p-2.5 rounded-xl border border-[rgba(148,163,184,0.1)] text-[10px]">
                        <div className="flex justify-between text-[#697487] pb-1 border-b border-[rgba(148,163,184,0.08)] font-semibold">
                          <span>SKU / Product</span>
                          <span>Purity</span>
                          <span>Weight</span>
                          <span>Status</span>
                        </div>
                        <div className="flex justify-between text-[#F5F7FC] pt-1.5 font-medium">
                          <span>Antique Choker #402</span>
                          <span className="text-amber-400 font-semibold">22K 916</span>
                          <span>48.25g</span>
                          <span className="text-[#64D98A] font-semibold">Billed</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ShowcaseCard>
        </motion.div>

        {/* ========================================================= */}
        {/* Project 2: Owezy (Dual Phone 3D Perspective Preview)       */}
        {/* ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <ShowcaseCard className="p-8 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
              
              {/* Left Column: Project Info */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <span className="text-xs font-bold text-[#168BFF] mb-2">
                  {owezy.number}
                </span>

                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-1.5 tracking-tight group-hover:text-slate-100 transition-colors">
                  {owezy.title}
                </h3>

                <h4 className="text-sm font-semibold text-[#A7B0C0] mb-4 tracking-normal">
                  {owezy.category}
                </h4>

                <p className="text-sm text-[#A7B0C0] leading-relaxed mb-6">
                  {owezy.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {owezy.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium text-[#F5F7FC] bg-[#162030]/80 border border-[rgba(148,163,184,0.16)] rounded-full backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center gap-6">
                  <button
                    onClick={() => onSelectProject(owezy)}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#168BFF] hover:text-white transition-colors group/link cursor-pointer"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1.5 transition-transform duration-200" />
                  </button>

                  {owezy.githubUrl && (
                    <a
                      href={owezy.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#A7B0C0] hover:text-white transition-colors group/code"
                    >
                      <span>Source Code</span>
                      <Github className="w-4 h-4 group-hover/code:scale-110 transition-transform" />
                    </a>
                  )}
                </div>
              </div>

              {/* Right Column: Dual Responsive Web Screen 3D Perspective Mockups */}
              <div className="lg:col-span-7 perspective-mockup flex justify-center items-center py-4">
                <div className="relative flex items-center justify-center gap-4 sm:gap-6 w-full max-w-lg group cursor-pointer">
                  
                  {/* Screen 1: Main Balance & Activity */}
                  <div className="w-[185px] sm:w-[220px] tilted-phone-1 rounded-[28px] border-2 border-[rgba(148,163,184,0.22)] bg-black shadow-2xl overflow-hidden relative group">
                    {/* Web App Mini Browser Navigation Bar */}
                    <div className="bg-[#0c1220] px-3 pt-2.5 pb-2 flex justify-between items-center text-[9px] text-[#A7B0C0] border-b border-white/10 relative z-10">
                      <div className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500/80" />
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500/80" />
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <div className="bg-[#141d2d] px-2 py-0.5 rounded text-[8px] font-mono text-slate-300">
                        owezy.web.app
                      </div>
                      <span className="text-[8px] text-[#168BFF] font-semibold">React.js</span>
                    </div>

                    {/* App Screen Content */}
                    <div className="p-3.5 bg-white text-slate-900">
                      <div className="flex justify-between items-center mb-2">
                        <div>
                          <h5 className="font-extrabold text-sm tracking-tight text-slate-950">
                            Owezy
                          </h5>
                          <p className="text-[8px] text-slate-500 font-medium">
                            Split expenses, settle balances.
                          </p>
                        </div>
                        <div className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-[9px] font-bold">
                          LP
                        </div>
                      </div>

                      <button className="w-full bg-black text-white text-[9px] font-semibold py-1.5 rounded-full mb-2.5 shadow">
                        + Create Group
                      </button>

                      {/* Total Balance Card */}
                      <div className="bg-slate-100 p-2.5 rounded-xl mb-2.5">
                        <span className="text-[8px] text-slate-500 block font-medium">Total Balance</span>
                        <span className="text-base font-extrabold text-[#16a34a]">+₹1,450.00</span>
                        <span className="text-[7px] text-slate-400 block font-medium">You are owed across 3 groups</span>
                      </div>

                      {/* Recent Activity List */}
                      <div className="space-y-1.5">
                        <span className="text-[9px] font-bold text-slate-800 uppercase tracking-wider block">
                          Recent Activity
                        </span>

                        <div className="flex items-center justify-between py-1 border-b border-slate-100">
                          <div className="flex items-center gap-1.5">
                            <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 text-[8px] font-bold flex items-center justify-center">
                              RK
                            </div>
                            <div>
                              <div className="text-[8px] font-semibold text-slate-800">Trip to Goa</div>
                              <div className="text-[7px] text-slate-400">Dinner at Thalassa</div>
                            </div>
                          </div>
                          <span className="text-[8px] font-bold text-[#16a34a]">+₹650</span>
                        </div>

                        <div className="flex items-center justify-between py-1">
                          <div className="flex items-center gap-1.5">
                            <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-700 text-[8px] font-bold flex items-center justify-center">
                              SJ
                            </div>
                            <div>
                              <div className="text-[8px] font-semibold text-slate-800">Apartment Rent</div>
                              <div className="text-[7px] text-slate-400">Wifi & Utilities</div>
                            </div>
                          </div>
                          <span className="text-[8px] font-bold text-slate-700">-₹320</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Screen 2: Group Settlement & Graph */}
                  <div className="w-[170px] sm:w-[200px] tilted-phone-2 rounded-[28px] border-2 border-[rgba(148,163,184,0.22)] bg-black shadow-2xl overflow-hidden relative group">
                    <div className="bg-[#0c1220] px-3 pt-2.5 pb-2 flex justify-between items-center text-[9px] text-[#A7B0C0] border-b border-white/10 relative z-10">
                      <div className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500/80" />
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500/80" />
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <div className="bg-[#141d2d] px-2 py-0.5 rounded text-[8px] font-mono text-slate-300">
                        /settlement
                      </div>
                      <span className="text-[8px] text-[#64D98A] font-semibold">Web</span>
                    </div>

                    <div className="p-3 bg-white text-slate-900">
                      <div className="mb-2">
                        <span className="text-[8px] text-slate-400 uppercase tracking-widest block font-bold">Group Settlement</span>
                        <h6 className="font-bold text-xs text-slate-900">Goa Trip 2026</h6>
                      </div>

                      {/* Avatars */}
                      <div className="flex -space-x-1.5 mb-2.5">
                        {['LP', 'RK', 'AM', 'SJ', 'VD'].map((u, i) => (
                          <div
                            key={u}
                            style={{ zIndex: 10 - i }}
                            className="w-5 h-5 rounded-full border border-white bg-slate-800 text-[7px] font-bold text-white flex items-center justify-center"
                          >
                            {u}
                          </div>
                        ))}
                      </div>

                      {/* Resolution Box */}
                      <div className="bg-slate-50 border border-slate-200/80 rounded-lg p-2 mb-2 text-[8px]">
                        <div className="text-slate-600 font-medium mb-1">Optimal Settlement</div>
                        <div className="flex items-center justify-between text-slate-900">
                          <span>Rohan ➔ Loganth</span>
                          <span className="font-bold text-[#16a34a]">₹650</span>
                        </div>
                        <div className="flex items-center justify-between text-slate-900 mt-0.5">
                          <span>Ananya ➔ Loganth</span>
                          <span className="font-bold text-[#16a34a]">₹800</span>
                        </div>
                      </div>

                      <button className="w-full bg-[#286BFF] hover:bg-[#168BFF] text-white text-[8px] font-semibold py-1.5 rounded-lg shadow-sm">
                        Settle via UPI
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ShowcaseCard>
        </motion.div>
      </div>
    </section>
  );
};
