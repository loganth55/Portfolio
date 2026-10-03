import React, { useState } from 'react';
import { Github, Linkedin, Mail, ArrowRight, CheckCircle2, Send } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Project Collaboration',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Real-world mailto fallback
      const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
        `[${formData.subject}] from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Sender: ${formData.name} (${formData.email})\n\n${formData.message}`
      )}`;
      
      const link = document.createElement('a');
      link.href = mailtoUrl;
      link.click();
    }, 600);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative">
      {/* Background ambient lighting */}
      <div
        className="absolute bottom-0 right-1/4 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(40, 107, 255, 0.12) 0%, rgba(105, 59, 255, 0.08) 45%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ========================================================= */}
          {/* Left Column: Heading, Subtext, Social Links               */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-semibold tracking-wider text-[#168BFF]">
                06
              </span>
              <span className="text-xs text-[#697487]">•</span>
              <span className="text-xs font-semibold tracking-wider text-[#A7B0C0] uppercase">
                CONTACT
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
              Let's build<br />something great
            </h2>

            <p className="text-sm text-[#A7B0C0] leading-relaxed mb-8 max-w-md">
              I'm open to internship opportunities, full-time roles or interesting projects. Feel free to reach out.
            </p>

            {/* Social Icons Row with Refined Glow Feedback */}
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-[#101722] border border-[rgba(148,163,184,0.18)] hover:border-[#168BFF] flex items-center justify-center text-[#F5F7FC] hover:text-[#168BFF] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(22,139,255,0.35)] active:scale-95 shadow-sm"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-[#101722] border border-[rgba(148,163,184,0.18)] hover:border-[#168BFF] flex items-center justify-center text-[#F5F7FC] hover:text-[#168BFF] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(22,139,255,0.35)] active:scale-95 shadow-sm"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-11 h-11 rounded-full bg-[#101722] border border-[rgba(148,163,184,0.18)] hover:border-[#168BFF] flex items-center justify-center text-[#F5F7FC] hover:text-[#168BFF] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(22,139,255,0.35)] active:scale-95 shadow-sm"
                aria-label="Email Me"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* ========================================================= */}
          {/* Right Column: Contact Form with Blue/Violet Gradient Btn */}
          {/* ========================================================= */}
          <div className="lg:col-span-7">
            <div className="relative bg-[#101722] border border-[rgba(148,163,184,0.16)] rounded-[24px] p-6 sm:p-8 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8)] overflow-hidden">
              {/* Top specular highlight */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.14] to-transparent pointer-events-none" />

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 flex flex-col items-center justify-center text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-[#64D98A]/15 border border-[#64D98A]/30 flex items-center justify-center text-[#64D98A] mb-4 shadow-[0_0_15px_rgba(100,217,138,0.2)]">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Email Client Opened</h3>
                  <p className="text-sm text-[#A7B0C0] max-w-sm mb-6 leading-relaxed">
                    A drafted email to <span className="text-white font-medium">{PERSONAL_INFO.email}</span> has been prepared with your message.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-5 py-2 text-xs font-semibold text-[#F5F7FC] bg-[#162030] hover:bg-[#1e2a40] border border-[rgba(148,163,184,0.2)] rounded-full transition-colors cursor-pointer"
                  >
                    Draft another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name and Email Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your Name"
                        className="w-full px-4 py-3 text-xs sm:text-sm text-[#F5F7FC] bg-[#080D16] border border-[rgba(148,163,184,0.16)] rounded-xl focus:outline-none focus:border-[#168BFF] focus:ring-1 focus:ring-[#168BFF]/40 transition-all placeholder:text-[#697487]"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Your Email"
                        className="w-full px-4 py-3 text-xs sm:text-sm text-[#F5F7FC] bg-[#080D16] border border-[rgba(148,163,184,0.16)] rounded-xl focus:outline-none focus:border-[#168BFF] focus:ring-1 focus:ring-[#168BFF]/40 transition-all placeholder:text-[#697487]"
                      />
                    </div>
                  </div>

                  {/* Subject Dropdown */}
                  <div>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 text-xs sm:text-sm text-[#F5F7FC] bg-[#080D16] border border-[rgba(148,163,184,0.16)] rounded-xl focus:outline-none focus:border-[#168BFF] focus:ring-1 focus:ring-[#168BFF]/40 transition-all cursor-pointer"
                    >
                      <option value="Project Collaboration">Project Collaboration</option>
                      <option value="Internship / Full-time Role">Internship / Full-time Role</option>
                      <option value="Freelance Consultation">Freelance Consultation</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>

                  {/* Message Field */}
                  <div>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Message"
                      className="w-full px-4 py-3 text-xs sm:text-sm text-[#F5F7FC] bg-[#080D16] border border-[rgba(148,163,184,0.16)] rounded-xl focus:outline-none focus:border-[#168BFF] focus:ring-1 focus:ring-[#168BFF]/40 transition-all placeholder:text-[#697487] resize-none"
                    />
                  </div>

                  {/* Submit Button with Animated Gradient Sheen */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 text-xs sm:text-sm font-semibold text-white gradient-btn active:scale-[0.99] rounded-xl transition-all duration-300 shadow-md shadow-[#286BFF]/25 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 group"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Opening mail client...</span>
                      </span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
