import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Building2 } from 'lucide-react';
import { EXPERIENCE_DATA } from '../../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative py-24 z-10 overflow-hidden">
      {/* Background Atmosphere - Soft Violet */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[var(--bg-page)] via-[var(--bg-secondary)]/50 to-[var(--bg-page)] opacity-80" />
      <div className="absolute top-[10%] right-[5%] w-[400px] h-[400px] bg-[var(--purple-soft)]/15 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-[90vw] mx-auto relative z-10">
        
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-[#E9D5FF] mb-4 shadow-sm"
          >
            <span className="text-[#5B21B6] font-mono text-xs uppercase tracking-widest font-bold">
              Career Journey
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-heading text-[var(--text-deep)] mb-6"
          >
            Work Experience.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[var(--text-secondary)] font-medium max-w-2xl mx-auto"
          >
            A timeline of my professional growth and technical contributions.
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="absolute left-[27px] top-0 bottom-0 w-px bg-gradient-to-b from-[#7C3AED] via-[#A78BFA] to-transparent" />

          {EXPERIENCE_DATA.map((exp) => (
            <div key={exp.id} className="relative flex flex-col md:flex-row items-start md:justify-between mb-24 last:mb-0">
              
              {/* Timeline Dot */}
              <div className="absolute left-[16px] w-6 h-6 rounded-full border-4 border-white bg-[#7C3AED] shadow-[0_0_0_4px_rgba(233,213,255,1)] z-10 mt-1.5" />

              {/* Content */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="w-full pl-16 md:pl-20 flex flex-col md:flex-row"
              >
                <div className="md:w-1/4 mb-4 md:mb-0 flex-shrink-0 pt-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--purple-soft)]/10 border border-[var(--purple-soft)]/20 text-[var(--purple-primary)] text-sm font-bold font-mono">
                    <Calendar className="w-4 h-4" />
                    {exp.duration}
                  </div>
                </div>
                
                <div className="md:w-3/4">
                  <h3 className="text-2xl font-bold font-heading text-[var(--text-deep)] mb-2">
                    {exp.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-[var(--text-secondary)] font-bold mb-4 text-sm">
                    <div className="flex items-center gap-1.5">
                      <Building2 className="w-4 h-4 text-[var(--purple-primary)]" />
                      {exp.company}
                    </div>
                  </div>

                  <div className="bg-[var(--glass-bg)] backdrop-blur rounded-2xl p-5 border border-[var(--glass-border)] mb-6 hover:border-[#A78BFA] transition-all duration-300 relative overflow-hidden group">
                    {/* Hover Background Shift */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-[#F5F1FF]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-3">
                        <Briefcase className="w-4 h-4 text-[var(--purple-bright)]" />
                        <span className="font-bold text-[var(--text-deep)]">Key Project: {exp.project}</span>
                      </div>
                      <p className="text-[var(--text-secondary)] font-medium leading-relaxed text-sm">
                        {exp.contribution}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies?.map((tech: string) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1.5 bg-[var(--purple-soft)]/10 border border-[var(--glass-border)] rounded-lg text-sm font-bold text-[var(--text-secondary)] shadow-sm hover:border-[var(--purple-soft)] hover:bg-[var(--purple-soft)]/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
