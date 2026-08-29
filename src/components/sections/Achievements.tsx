import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { GlowCard } from '../ui/GlowCard';
import { ACHIEVEMENTS_DATA } from '../../data/portfolioData';
import { Trophy, FileText, Calendar, Building, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Achievements: React.FC = () => {
  const triggerConfetti = () => {
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#5b21b6', '#6d28d9', '#f59e0b']
    });
  };

  return (
    <section id="achievements" className="relative py-24 bg-[#f4f0ff] dark:bg-[#0f091f] z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Honors & Recognition"
          title="Achievements & Research"
          subtitle="Competitive coding global ranks and IEEE international conference research presentations."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {ACHIEVEMENTS_DATA.map((ach, idx) => {
            const isRank = ach.type === 'rank';

            return (
              <motion.div
                key={ach.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                onClick={triggerConfetti}
                className="cursor-pointer"
              >
                <GlowCard className="h-full p-8 flex flex-col justify-between border border-[rgba(91,33,182,0.15)] bg-white dark:bg-[#1b1230] shadow-md">
                  <div className="space-y-4">
                    {/* Header Badge */}
                    <div className="flex items-center justify-between">
                      <span
                        className={`px-3.5 py-1 rounded-full text-xs font-mono font-bold ${
                          isRank
                            ? 'bg-amber-100 text-amber-900 border border-amber-300 dark:bg-amber-950 dark:text-amber-300'
                            : 'bg-[#ede5ff] text-[#5b21b6] border border-[rgba(91,33,182,0.25)] dark:bg-[#2c1a4d] dark:text-[#c4b5fd]'
                        }`}
                      >
                        {ach.badge}
                      </span>
                      <div className="p-2.5 rounded-xl bg-[#f4f0ff] dark:bg-[#24163d] border border-[rgba(91,33,182,0.15)] shadow-sm">
                        {isRank ? (
                          <Trophy className="w-5 h-5 text-amber-600" />
                        ) : (
                          <FileText className="w-5 h-5 text-[#5b21b6]" />
                        )}
                      </div>
                    </div>

                    {/* Title */}
                    <div>
                      <h3 className="text-2xl font-black text-[#171329] dark:text-white font-heading">
                        {ach.title}
                      </h3>
                      <p
                        className={`text-lg font-extrabold font-mono mt-1 ${
                          isRank ? 'text-amber-700 dark:text-amber-400' : 'text-[#5b21b6] dark:text-[#c4b5fd]'
                        }`}
                      >
                        {ach.subtitle}
                      </p>
                    </div>

                    {/* Details */}
                    <p className="text-[#3f3850] dark:text-slate-200 text-sm leading-relaxed font-medium">
                      {ach.detail}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="pt-6 mt-6 border-t border-[rgba(91,33,182,0.12)] flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#3f3850] dark:text-slate-300 font-bold">
                    {ach.institution && (
                      <span className="flex items-center gap-1.5 text-[#171329] dark:text-white">
                        <Building className="w-3.5 h-3.5 text-[#5b21b6]" />
                        {ach.institution}
                      </span>
                    )}
                    {ach.date && (
                      <span className="flex items-center gap-1.5 text-[#3f3850]">
                        <Calendar className="w-3.5 h-3.5 text-[#5b21b6]" />
                        {ach.date}
                      </span>
                    )}
                    {!ach.institution && (
                      <span className="flex items-center gap-1 text-amber-700 dark:text-amber-400 font-bold">
                        <Sparkles className="w-3.5 h-3.5" />
                        Global Competitive Programming Contest
                      </span>
                    )}
                  </div>
                </GlowCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
