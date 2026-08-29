import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');

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
    <section id="contact" className="py-32 bg-[#F7F7F5] text-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-sm font-mono uppercase tracking-widest text-[#0A0A0A]/50 mb-16 border-b border-[#0A0A0A]/10 pb-4">
          Initiate Collaboration
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Left Column: Direct Info */}
          <div className="flex flex-col">
            <h3 className="text-4xl md:text-6xl font-medium tracking-tight mb-8">
              Let's build something meaningful.
            </h3>
            <p className="text-xl text-[#0A0A0A]/70 mb-16 leading-relaxed max-w-lg">
              Whether you have a job opportunity, full-stack project idea, or software engineering query, I'd love to connect.
            </p>

            <div className="flex flex-col gap-8">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#0A0A0A]/50 block mb-2">Email</span>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-2xl font-medium hover:text-[#E53E3E] transition-colors hover-target">
                  {PERSONAL_INFO.email}
                </a>
              </div>
              
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#0A0A0A]/50 block mb-2">Phone</span>
                <a href={`tel:${PERSONAL_INFO.phone}`} className="text-2xl font-medium hover:text-[#E53E3E] transition-colors hover-target">
                  +91 {PERSONAL_INFO.phone}
                </a>
              </div>

              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#0A0A0A]/50 block mb-2">Location</span>
                <span className="text-2xl font-medium">
                  {PERSONAL_INFO.location}
                </span>
              </div>
            </div>

            <div className="flex gap-8 mt-16 pt-8 border-t border-[#0A0A0A]/10">
              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm font-mono uppercase tracking-widest hover:text-[#E53E3E] transition-colors hover-target group">
                GitHub <ArrowUpRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm font-mono uppercase tracking-widest hover:text-[#E53E3E] transition-colors hover-target group">
                LinkedIn <ArrowUpRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="flex flex-col">
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex flex-col">
                  <label className="text-xs font-mono uppercase tracking-widest text-[#0A0A0A]/70 mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-transparent border-b border-[#0A0A0A]/20 py-3 text-lg focus:outline-none focus:border-[#E53E3E] transition-colors hover-target"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-xs font-mono uppercase tracking-widest text-[#0A0A0A]/70 mb-2">Your Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-transparent border-b border-[#0A0A0A]/20 py-3 text-lg focus:outline-none focus:border-[#E53E3E] transition-colors hover-target"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="text-xs font-mono uppercase tracking-widest text-[#0A0A0A]/70 mb-2">Subject</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="bg-transparent border-b border-[#0A0A0A]/20 py-3 text-lg focus:outline-none focus:border-[#E53E3E] transition-colors hover-target"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-xs font-mono uppercase tracking-widest text-[#0A0A0A]/70 mb-2">Message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-transparent border-b border-[#0A0A0A]/20 py-3 text-lg focus:outline-none focus:border-[#E53E3E] transition-colors resize-none hover-target"
                />
              </div>

              <button
                type="submit"
                disabled={formStatus === 'sending'}
                className="self-start mt-4 flex items-center gap-4 text-lg font-medium hover:text-[#E53E3E] transition-colors hover-target group disabled:opacity-50"
              >
                {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                {formStatus !== 'sending' && <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />}
              </button>

              <AnimatePresence>
                {formStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-sm font-mono text-[#0A0A0A]/70 mt-4"
                  >
                    Message sent successfully. I will get back to you soon.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
