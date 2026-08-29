import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { GlowCard } from '../ui/GlowCard';
import { EDUCATION_DATA } from '../../data/portfolioData';
import { GraduationCap, School } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="relative py-24 bg-[#f8f6ff] dark:bg-[#0c0717] z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Academic Foundations"
          title="Education"
          subtitle="My academic background in Computer Science, Systems, and Communication Engineering."
        />

        <div className="max-w-4xl mx-auto relative pl-6 sm:pl-8 border-l-2 border-[#5b21b6]/30 space-y-10">
          {EDUCATION_DATA.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Timeline node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-6 w-4 h-4 rounded-full bg-white dark:bg-[#0c0717] border-2 border-[#5b21b6] group-hover:scale-125 group-hover:bg-[#5b21b6] transition-all shadow-md shadow-[#5b21b6]/50" />

              <GlowCard className="p-6 sm:p-8 border border-[rgba(91,33,182,0.15)] bg-white dark:bg-[#1b1230] shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[rgba(91,33,182,0.12)]">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-[#5b21b6]" />
                      <span className="text-xs font-mono font-bold text-[#5b21b6] dark:text-[#c4b5fd]">
                        {edu.period}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#171329] dark:text-white font-heading">
                      {edu.degree}
                    </h3>
                    <p className="text-[#3f3850] dark:text-slate-200 text-sm font-semibold flex items-center gap-1.5">
                      <School className="w-4 h-4 text-[#5b21b6]" />
                      {edu.institution}
                    </p>
                  </div>

                  <div className="px-4 py-2 rounded-xl bg-[#ede5ff] dark:bg-[#2c1a4d] border border-[rgba(91,33,182,0.2)] text-center shrink-0 shadow-sm">
                    <span className="text-xs font-mono text-[#3f3850] dark:text-slate-300 block font-bold">Result</span>
                    <span className="text-lg font-black text-[#5b21b6] dark:text-[#c4b5fd] font-heading">
                      {edu.score}
                    </span>
                  </div>
                </div>

                {edu.details && (
                  <p className="pt-4 text-[#3f3850] dark:text-slate-200 text-sm leading-relaxed font-medium">
                    {edu.details}
                  </p>
                )}
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
