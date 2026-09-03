import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen } from 'lucide-react';
import { EDUCATION_DATA } from '../../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="relative py-24 z-10 overflow-hidden">
      {/* Background Atmosphere - Light Violet */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[var(--bg-page)] via-[var(--bg-secondary)]/50 to-[var(--bg-page)] opacity-80" />
      <div className="absolute top-1/2 left-[5%] w-[400px] h-[400px] bg-[var(--purple-soft)]/10 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-[90vw] mx-auto relative z-10">
        
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-[#E9D5FF] mb-4 shadow-sm"
          >
            <span className="text-[#5B21B6] font-mono text-xs uppercase tracking-widest font-bold">
              Academic Journey
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold font-heading text-[var(--text-deep)] mb-6"
          >
            Academic Journey.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[var(--text-secondary)] font-medium max-w-2xl mx-auto"
          >
            Continuous learning is the cornerstone of my development, shaping my perspective on technology and innovation.
          </motion.p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="absolute left-[27px] top-0 bottom-0 w-px bg-gradient-to-b from-[#7C3AED] to-[#E9D5FF]" />

          {EDUCATION_DATA.map((edu, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1 }}
              className="relative flex items-start mb-16 last:mb-0 pl-16"
            >
              {/* Timeline Dot & Icon */}
              <div className="absolute left-[12px] w-8 h-8 rounded-full border-[3px] border-white bg-[#7C3AED] shadow-[0_0_0_4px_rgba(233,213,255,1)] z-10 flex items-center justify-center mt-1">
                <GraduationCap className="w-4 h-4 text-white" />
              </div>

              {/* Card */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-10 p-8 glass-card rounded-3xl border border-[var(--glass-border)] w-full hover:border-[#A78BFA] transition-all duration-300 relative overflow-hidden group">
                
                {/* Hover Background Shift */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-[#F5F1FF]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="flex-shrink-0 relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-[var(--purple-soft)]/10 flex items-center justify-center text-[var(--purple-primary)] mb-4 group-hover:bg-[var(--purple-primary)] group-hover:text-white transition-colors duration-300">
                    <GraduationCap className="w-8 h-8" />
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--purple-soft)]/10 border border-[var(--glass-border)] text-[var(--purple-primary)] text-sm font-bold font-mono shadow-sm">
                    {edu.period}
                  </div>
                </div>

                <div className="flex-1 pt-2 relative z-10">
                  <h3 className="text-xl font-bold font-heading text-[var(--text-deep)] mb-2">
                    {edu.degree}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-[var(--text-secondary)] font-bold mb-6">
                    <BookOpen className="w-4 h-4 text-[var(--purple-primary)]" />
                    <span>{edu.institution}</span>
                  </div>
                  
                  {edu.details && (
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                      {edu.details}
                    </p>
                  )}
                  
                  <div className="mt-6">
                    <span className="inline-block px-4 py-2 bg-[var(--purple-soft)]/10 text-[var(--purple-primary)] rounded-lg font-bold text-sm">
                      {edu.score}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
