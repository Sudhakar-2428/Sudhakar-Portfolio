import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { GlowCard } from '../ui/GlowCard';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { Mail, Phone, MapPin, Code, Copy, Check, Send, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';

export const Contact: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-[#eee8ff] via-[#f4f0ff] to-[#e6deff] dark:from-[#0c0717] dark:via-[#120b22] dark:to-[#0c0717] z-10">
      {/* Visual Atmosphere */}
      <div className="absolute inset-0 bg-dots-lavender opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Initiate Collaboration"
          title="Let's build something meaningful."
          subtitle="Whether you have a job opportunity, full-stack project idea, or software engineering query, I'd love to connect."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info Cards (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <GlowCard className="p-6 sm:p-8 space-y-6 border border-[rgba(91,33,182,0.15)] bg-white dark:bg-[#1b1230] shadow-md">
              <h3 className="text-xl font-extrabold text-[#171329] dark:text-white font-heading">
                Direct Contact Points
              </h3>

              {/* Email item */}
              <div className="p-4 rounded-xl bg-[#f8f6ff] dark:bg-[#24163d] border border-[rgba(91,33,182,0.12)] shadow-sm flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-xl bg-[#ede5ff] dark:bg-[#2c1a4d] text-[#5b21b6] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-xs font-mono text-[#5b21b6] dark:text-[#a78bfa] font-bold block">Email Address</span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-sm font-extrabold text-[#171329] dark:text-white hover:text-[#5b21b6] transition-colors truncate block"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                  className="p-2 rounded-lg bg-white dark:bg-[#1b1230] hover:bg-[#ede5ff] border border-[rgba(91,33,182,0.15)] text-[#171329] dark:text-white transition-all shrink-0 shadow-sm"
                  title="Copy Email"
                >
                  {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-600 font-bold" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone item */}
              <div className="p-4 rounded-xl bg-[#f8f6ff] dark:bg-[#24163d] border border-[rgba(91,33,182,0.12)] shadow-sm flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#ecfdf5] text-[#065f46] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#5b21b6] dark:text-[#a78bfa] font-bold block">Phone Number</span>
                    <a
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className="text-sm font-extrabold text-[#171329] dark:text-white hover:text-[#065f46] transition-colors block font-mono"
                    >
                      +91 {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                  className="p-2 rounded-lg bg-white dark:bg-[#1b1230] hover:bg-[#ede5ff] border border-[rgba(91,33,182,0.15)] text-[#171329] dark:text-white transition-all shrink-0 shadow-sm"
                  title="Copy Phone"
                >
                  {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-600 font-bold" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location item */}
              <div className="p-4 rounded-xl bg-[#f8f6ff] dark:bg-[#24163d] border border-[rgba(91,33,182,0.12)] shadow-sm flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#ede5ff] text-[#5b21b6] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#5b21b6] dark:text-[#a78bfa] font-bold block">Location</span>
                  <span className="text-sm font-extrabold text-[#171329] dark:text-white block">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>

              {/* Social Link Cards */}
              <div className="pt-4 border-t border-[rgba(91,33,182,0.12)] space-y-3">
                <span className="text-xs font-mono text-[#5b21b6] dark:text-[#a78bfa] uppercase tracking-widest block font-extrabold">
                  Profiles:
                </span>
                <div className="grid grid-cols-3 gap-3">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white dark:bg-[#24163d] border border-[rgba(91,33,182,0.15)] hover:border-[#5b21b6]/40 text-center flex flex-col items-center gap-1.5 hover:-translate-y-1 shadow-sm transition-all"
                  >
                    <GithubIcon className="w-5 h-5 text-[#171329] dark:text-white" />
                    <span className="text-[11px] font-mono font-bold text-[#171329] dark:text-white">GitHub</span>
                  </a>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white dark:bg-[#24163d] border border-[rgba(91,33,182,0.15)] hover:border-[#5b21b6]/40 text-center flex flex-col items-center gap-1.5 hover:-translate-y-1 shadow-sm transition-all"
                  >
                    <LinkedinIcon className="w-5 h-5 text-[#5b21b6]" />
                    <span className="text-[11px] font-mono font-bold text-[#171329] dark:text-white">LinkedIn</span>
                  </a>
                  <a
                    href={PERSONAL_INFO.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white dark:bg-[#24163d] border border-[rgba(91,33,182,0.15)] hover:border-amber-500/40 text-center flex flex-col items-center gap-1.5 hover:-translate-y-1 shadow-sm transition-all"
                  >
                    <Code className="w-5 h-5 text-amber-600" />
                    <span className="text-[11px] font-mono font-bold text-[#171329] dark:text-white">LeetCode</span>
                  </a>
                </div>
              </div>
            </GlowCard>
          </motion.div>

          {/* Right Column: Contact Form UI (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <GlowCard className="p-6 sm:p-8 border border-[rgba(91,33,182,0.15)] bg-white dark:bg-[#1b1230] shadow-md">
              <h3 className="text-xl font-extrabold text-[#171329] dark:text-white font-heading mb-6">
                Send a Direct Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-[#171329] dark:text-white font-bold">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Rivera"
                      className="w-full px-4 py-3 rounded-xl bg-[#f8f6ff] dark:bg-[#24163d] border border-[rgba(91,33,182,0.2)] text-[#171329] dark:text-white placeholder-slate-400 text-sm font-semibold focus:outline-none focus:border-[#5b21b6] focus:ring-1 focus:ring-[#5b21b6] transition-all font-sans shadow-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono text-[#171329] dark:text-white font-bold">Your Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#f8f6ff] dark:bg-[#24163d] border border-[rgba(91,33,182,0.2)] text-[#171329] dark:text-white placeholder-slate-400 text-sm font-semibold focus:outline-none focus:border-[#5b21b6] focus:ring-1 focus:ring-[#5b21b6] transition-all font-sans shadow-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-[#171329] dark:text-white font-bold">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Software Developer Opportunity / Project Collaboration"
                    className="w-full px-4 py-3 rounded-xl bg-[#f8f6ff] dark:bg-[#24163d] border border-[rgba(91,33,182,0.2)] text-[#171329] dark:text-white placeholder-slate-400 text-sm font-semibold focus:outline-none focus:border-[#5b21b6] focus:ring-1 focus:ring-[#5b21b6] transition-all font-sans shadow-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-[#171329] dark:text-white font-bold">Message *</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hello Sudhakar, I would like to discuss..."
                    className="w-full px-4 py-3 rounded-xl bg-[#f8f6ff] dark:bg-[#24163d] border border-[rgba(91,33,182,0.2)] text-[#171329] dark:text-white placeholder-slate-400 text-sm font-semibold focus:outline-none focus:border-[#5b21b6] focus:ring-1 focus:ring-[#5b21b6] transition-all font-sans resize-none shadow-sm"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={formStatus === 'sending'}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#5b21b6] via-[#6d28d9] to-[#7c3aed] hover:from-[#4c1d95] hover:to-[#5b21b6] text-white font-semibold text-xs font-mono shadow-md shadow-[#5b21b6]/20 transition-all disabled:opacity-50"
                  >
                    {formStatus === 'sending' ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  <span className="text-[11px] font-mono text-[#5b21b6] dark:text-[#a78bfa] font-bold hidden sm:inline">
                    Direct delivery to Sudhakar's inbox
                  </span>
                </div>

                {/* Feedback Toast */}
                <AnimatePresence>
                  {formStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 rounded-xl bg-[#ecfdf5] border border-emerald-300 text-[#065f46] text-xs font-mono font-bold flex items-center gap-2"
                    >
                      <Sparkles className="w-4 h-4 text-emerald-600" />
                      <span>Thank you! Your message was submitted successfully. Sudhakar will get back to you shortly.</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </GlowCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
