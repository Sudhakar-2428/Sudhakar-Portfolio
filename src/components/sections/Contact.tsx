import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { ArrowUpRight, Mail, Phone, MapPin, Loader2, Code2, AlertCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) return;

    setFormStatus('sending');
    setErrorMessage('');

    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Failed to send message');
      }

      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 6000);
    } catch (error: any) {
      console.error('Email error:', error);
      setFormStatus('error');
      
      const errMsg = error?.message || '';
      if (errMsg.includes('Failed to fetch') || errMsg.includes('NetworkError') || errMsg.includes('Unexpected token')) {
        setErrorMessage('Unable to connect to the backend. Please try again later.');
      } else {
        setErrorMessage(errMsg || 'Unable to send the message right now. Please try again later.');
      }
      
      setTimeout(() => setFormStatus('idle'), 6000);
    }
  };

  return (
    <section id="contact" className="relative py-32 z-10 overflow-hidden">
      
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-[var(--bg-page)] via-[var(--bg-secondary)]/50 to-[var(--bg-page)] opacity-80" />
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.08, 0.15, 0.08],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-tr from-[#E9D5FF] to-[#A78BFA] rounded-full blur-[120px] -z-10 pointer-events-none"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.08, 0.12, 0.08],
          rotate: [0, -90, 0]
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#DDD6FE] to-white rounded-full blur-[100px] -z-10 pointer-events-none"
      />

      <div className="max-w-[90vw] mx-auto relative z-10">
        
        <div className="text-center mb-20 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-[#E9D5FF] mb-4 shadow-sm"
          >
            <span className="text-[#5B21B6] font-mono text-xs uppercase tracking-widest font-bold">
              GET IN TOUCH
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black font-heading text-[#181522] tracking-tight"
          >
            Let's build something<br/>together.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Direct Info */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 flex flex-col"
          >
            <div>
              <h3 className="text-2xl font-bold text-[#181522] mb-6 font-heading">LET'S CONNECT</h3>
              <p className="text-lg text-[#3F3850] leading-relaxed mb-12 font-medium">
                "I'm always interested in building meaningful software, working on innovative ideas, and collaborating on interesting projects."
              </p>

              <div className="flex flex-col gap-8">
                <div className="group">
                  <span className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#7C3AED] mb-2 font-bold">
                    <Mail className="w-4 h-4" /> Email
                  </span>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-xl md:text-2xl font-medium text-[#181522] group-hover:text-[#5B21B6] transition-colors break-all">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
                
                <div className="group">
                  <span className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#7C3AED] mb-2 font-bold">
                    <Phone className="w-4 h-4" /> Phone
                  </span>
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="text-xl md:text-2xl font-medium text-[#181522] group-hover:text-[#5B21B6] transition-colors">
                    +91 {PERSONAL_INFO.phone}
                  </a>
                </div>

                <div className="group">
                  <span className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#7C3AED] mb-2 font-bold">
                    <MapPin className="w-4 h-4" /> Location
                  </span>
                  <span className="text-xl md:text-2xl font-medium text-[#181522]">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-16 pt-10 border-t border-[#E9D5FF]/50">
              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white border border-[#E9D5FF] text-[#181522] font-semibold hover:bg-[#5B21B6] hover:text-white hover:border-[#5B21B6] transition-all shadow-sm group">
                GitHub <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white border border-[#E9D5FF] text-[#181522] font-semibold hover:bg-[#5B21B6] hover:text-white hover:border-[#5B21B6] transition-all shadow-sm group">
                LinkedIn <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
              <a href={PERSONAL_INFO.leetcode} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white border border-[#E9D5FF] text-[#181522] font-semibold hover:bg-[#5B21B6] hover:text-white hover:border-[#5B21B6] transition-all shadow-sm group">
                LeetCode <Code2 className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="glass-card backdrop-blur-xl p-8 md:p-12 rounded-[2rem] border border-[var(--glass-border)] shadow-[0_8px_40px_rgba(91,33,182,0.06)] relative hover:border-[#A78BFA] transition-all duration-300 overflow-hidden group">
              {/* Hover Background Shift */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-[#F5F1FF]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-[var(--text-deep)] mb-8 font-heading">CONTACT FORM</h3>
              
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Floating Label Input for Name */}
                  <div className="relative z-0">
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="block py-4 px-5 w-full text-base text-[#181522] bg-[#F5F1FF]/50 border-2 border-[#E9D5FF] rounded-xl appearance-none focus:outline-none focus:ring-0 focus:border-[#7C3AED] focus:bg-white peer transition-all shadow-sm"
                      placeholder=" "
                    />
                    <label htmlFor="name" className="absolute text-[#625B70] font-medium text-base duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 left-3 peer-focus:text-[#7C3AED] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2.5 peer-placeholder-shown:bg-transparent peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:bg-white rounded-sm">
                      Your Name
                    </label>
                  </div>

                  {/* Floating Label Input for Email */}
                  <div className="relative z-0">
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="block py-4 px-5 w-full text-base text-[#181522] bg-[#F5F1FF]/50 border-2 border-[#E9D5FF] rounded-xl appearance-none focus:outline-none focus:ring-0 focus:border-[#7C3AED] focus:bg-white peer transition-all shadow-sm"
                      placeholder=" "
                    />
                    <label htmlFor="email" className="absolute text-[#625B70] font-medium text-base duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 left-3 peer-focus:text-[#7C3AED] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2.5 peer-placeholder-shown:bg-transparent peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:bg-white rounded-sm">
                      Your Email
                    </label>
                  </div>
                </div>

                {/* Floating Label Input for Subject */}
                <div className="relative z-0">
                  <input
                    type="text"
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="block py-4 px-5 w-full text-base text-[#181522] bg-[#F5F1FF]/50 border-2 border-[#E9D5FF] rounded-xl appearance-none focus:outline-none focus:ring-0 focus:border-[#7C3AED] focus:bg-white peer transition-all shadow-sm"
                    placeholder=" "
                  />
                  <label htmlFor="subject" className="absolute text-[#625B70] font-medium text-base duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 left-3 peer-focus:text-[#7C3AED] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2.5 peer-placeholder-shown:bg-transparent peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:bg-white rounded-sm">
                    Subject
                  </label>
                </div>

                {/* Floating Label Textarea for Message */}
                <div className="relative z-0">
                  <textarea
                    id="message"
                    required
                    minLength={10}
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="block py-4 px-5 w-full text-base text-[#181522] bg-[#F5F1FF]/50 border-2 border-[#E9D5FF] rounded-xl appearance-none focus:outline-none focus:ring-0 focus:border-[#7C3AED] focus:bg-white peer transition-all shadow-sm resize-none"
                    placeholder=" "
                  />
                  <label htmlFor="message" className="absolute text-[#625B70] font-medium text-base duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 left-3 peer-focus:text-[#7C3AED] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2.5 peer-placeholder-shown:bg-transparent peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:bg-white rounded-sm">
                    Message
                  </label>
                </div>

                <div className="mt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={formStatus === 'sending'}
                    className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-[#5B21B6] text-white rounded-xl font-bold text-base hover:bg-[#7C3AED] transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-purple-900/20 group relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      {formStatus === 'sending' ? (
                         <>Sending... <Loader2 className="w-5 h-5 animate-spin" /></>
                      ) : (
                         <>Send Message <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                      )}
                    </span>
                  </button>

                  <AnimatePresence mode="wait">
                    {formStatus === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-sm font-bold text-emerald-700 bg-emerald-50 px-4 py-3 rounded-xl border border-emerald-200 flex-1 text-center sm:text-left flex items-center gap-2"
                      >
                        ✓ Message sent successfully! I'll get back to you soon.
                      </motion.div>
                    )}
                    {formStatus === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-sm font-bold text-rose-700 bg-rose-50 px-4 py-3 rounded-xl border border-rose-200 flex-1 text-center sm:text-left flex items-center gap-2"
                      >
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        {errorMessage}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

              </form>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
