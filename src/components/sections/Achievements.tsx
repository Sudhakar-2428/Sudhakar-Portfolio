import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, FileText, Calendar, Building, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { ACHIEVEMENTS_DATA } from '../../data/portfolioData';

export const Achievements: React.FC = () => {
  const triggerConfetti = () => {
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#7C3AED', '#5B21B6', '#A78BFA']
    });
  };

  return (
    <section id="achievements" className="relative py-24 z-10 overflow-hidden">
      {/* Background Atmosphere - Soft Blue/Violet */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[var(--bg-page)] via-[#D4CDEC]/50 to-[var(--bg-page)] opacity-80" />
      <div className="absolute top-[20%] right-[10%] w-[450px] h-[450px] bg-[#93C5FD]/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-[90vw] mx-auto relative z-10">
        
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-[#E9D5FF] mb-4 shadow-sm"
          >
            <span className="text-[#5B21B6] font-mono text-xs uppercase tracking-widest font-bold">
              Honors & Recognition
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-heading text-[var(--text-deep)] mb-6"
          >
            Key Achievements.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[var(--text-secondary)] font-medium max-w-2xl mx-auto"
          >
            Achievements & Research
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {ACHIEVEMENTS_DATA.map((ach, idx) => {
            const isRank = ach.type === 'rank';

            return (
              <motion.div
                key={ach.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.15 }}
                onClick={triggerConfetti}
                className="cursor-pointer group"
              >
                <div className="glass-card p-6 md:p-8 rounded-3xl h-full flex flex-col border border-[var(--glass-border)] hover:border-[#A78BFA] transition-all duration-300 relative overflow-hidden">
                  
                  {/* Hover Background Shift */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-[#F5F1FF]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  <div className="relative z-10 space-y-6">
                    {/* Header Badge */}
                    <div className="flex items-center justify-between">
                      <span
                        className={`px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase shadow-sm ${
                          isRank
                            ? 'bg-amber-50 text-amber-600 border border-amber-200'
                            : 'bg-[#EEE8FF] text-[#5B21B6] border border-[#E9D5FF]'
                        }`}
                      >
                        {ach.badge}
                      </span>
                      <div className={`p-3 rounded-2xl shadow-sm border ${
                          isRank 
                            ? 'bg-amber-50 border-amber-200 text-amber-600 group-hover:bg-amber-100' 
                            : 'bg-white border-[#E9D5FF] text-[#7C3AED] group-hover:bg-[#EEE8FF]'
                        } transition-colors`}
                      >
                        {isRank ? (
                          <Trophy className="w-6 h-6" />
                        ) : (
                          <FileText className="w-6 h-6" />
                        )}
                      </div>
                    </div>

                    {/* Title */}
                    <div>
                      <h3 className="text-2xl md:text-3xl font-black text-[#181522] font-heading mb-2">
                        {ach.title}
                      </h3>
                      <p
                        className={`text-lg font-bold font-mono tracking-wide ${
                          isRank ? 'text-amber-600' : 'text-[#7C3AED]'
                        }`}
                      >
                        {ach.subtitle}
                      </p>
                    </div>

                    {/* Details */}
                    <p className="text-[#464052] leading-relaxed text-base">
                      {ach.detail}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="relative z-10 pt-6 mt-8 border-t border-[#E9D5FF] flex flex-wrap items-center justify-between gap-4 text-sm font-mono text-[#6F687A] font-semibold">
                    {ach.institution && (
                      <span className="flex items-center gap-2 text-[#181522]">
                        <Building className="w-4 h-4 text-[#7C3AED]" />
                        {ach.institution}
                      </span>
                    )}
                    {ach.date && (
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[#7C3AED]" />
                        {ach.date}
                      </span>
                    )}
                    {!ach.institution && (
                      <span className="flex items-center gap-1 text-amber-600">
                        <Sparkles className="w-4 h-4" />
                        Global Programming Contest
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
