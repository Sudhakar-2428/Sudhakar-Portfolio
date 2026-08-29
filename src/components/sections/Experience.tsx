import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { GlowCard } from '../ui/GlowCard';
import { EXPERIENCE_DATA } from '../../data/portfolioData';
import { Calendar, CheckCircle2, ChevronDown, ChevronUp, Cpu, Layers } from 'lucide-react';
import { GithubIcon } from '../ui/SocialIcons';

export const Experience: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(EXPERIENCE_DATA[0].id);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="relative py-24 bg-[#f4f0ff] z-10">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 bg-dots-lavender opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Professional Track Record"
          title="Work Experience & Internships"
          subtitle="Real-world industry contributions in full-stack web development, AI integration, and REST API engineering."
        />

        <div className="relative pl-6 sm:pl-8 border-l-2 border-[#5b21b6]/30 space-y-12">
          {EXPERIENCE_DATA.map((exp, idx) => {
            const isExpanded = expandedId === exp.id;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative group"
              >
                {/* Glowing Purple Timeline Dot */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-6 w-4 h-4 rounded-full bg-white dark:bg-[#0f091f] border-2 border-[#5b21b6] group-hover:scale-125 group-hover:bg-[#5b21b6] transition-all shadow-md shadow-[#5b21b6]/50" />

                <GlowCard className="p-6 sm:p-8 border border-[rgba(91,33,182,0.15)] bg-white dark:bg-[#1b1230] shadow-sm">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[rgba(91,33,182,0.12)]">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-3 py-1 rounded-full bg-[#ede5ff] dark:bg-[#2c1a4d] border border-[rgba(91,33,182,0.2)] text-[#5b21b6] dark:text-[#c4b5fd] font-mono text-xs font-extrabold">
                          {exp.role}
                        </span>
                        <span className="text-xs font-mono text-[#3f3850] dark:text-slate-300 flex items-center gap-1 font-bold">
                          <Calendar className="w-3.5 h-3.5 text-[#5b21b6]" />
                          {exp.duration}
                        </span>
                      </div>

                      <h3 className="text-2xl font-black text-[#171329] dark:text-white font-heading">
                        {exp.company}
                      </h3>
                      <p className="text-sm font-bold text-[#5b21b6] dark:text-[#c4b5fd] font-mono mt-0.5">
                        Project: {exp.project}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <a
                        href={exp.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-[#24163d] border border-[rgba(91,33,182,0.25)] text-[#171329] dark:text-white hover:text-[#5b21b6] text-xs font-mono font-bold transition-all shadow-sm"
                      >
                        <GithubIcon className="w-4 h-4" />
                        <span>View Repository</span>
                      </a>

                      <button
                        onClick={() => toggleExpand(exp.id)}
                        className="p-2 rounded-xl bg-[#f4f0ff] dark:bg-[#24163d] border border-[rgba(91,33,182,0.15)] text-[#171329] dark:text-white hover:text-[#5b21b6]"
                        aria-label="Toggle Details"
                      >
                        {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="pt-6 space-y-4">
                    <p className="text-[#3f3850] dark:text-slate-200 text-sm sm:text-base leading-relaxed font-medium">
                      "{exp.contribution}"
                    </p>

                    {/* Features Worked On */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#5b21b6] dark:text-[#a78bfa] flex items-center gap-2">
                        <Layers className="w-4 h-4 text-[#5b21b6]" />
                        Key Modules & Features Engineered
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5">
                        {exp.featuresWorkedOn.map((feat, fIdx) => (
                          <div
                            key={fIdx}
                            className="flex items-center gap-2 p-2.5 rounded-xl bg-[#f8f6ff] dark:bg-[#24163d] border border-[rgba(91,33,182,0.12)] shadow-sm text-xs font-bold text-[#171329] dark:text-slate-100"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#5b21b6] shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Expandable Details */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="pt-4 space-y-6 overflow-hidden border-t border-[rgba(91,33,182,0.12)] mt-4"
                        >
                          {/* Integration Highlights */}
                          <div className="space-y-2">
                            <h4 className="text-xs font-mono font-bold uppercase text-[#5b21b6] dark:text-[#a78bfa] flex items-center gap-2">
                              <Cpu className="w-4 h-4 text-[#5b21b6]" />
                              Technical & Integration Highlights
                            </h4>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-[#3f3850] dark:text-slate-200 font-medium">
                              {exp.additionalContribution.map((item, i) => (
                                <li key={i} className="flex items-start gap-2 p-2.5 rounded-lg bg-[#f8f6ff] dark:bg-[#24163d]">
                                  <span className="text-[#5b21b6] font-mono font-bold">▸</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Key Learnings */}
                          <div className="space-y-2">
                            <h4 className="text-xs font-mono font-bold uppercase text-[#065f46] dark:text-emerald-300">
                              Key Learning Outcomes
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.learning.map((lrn, lIdx) => (
                                <span
                                  key={lIdx}
                                  className="px-2.5 py-1 rounded-lg bg-[#ecfdf5] dark:bg-emerald-950/40 border border-emerald-200 text-[#065f46] dark:text-emerald-300 text-xs font-mono font-bold"
                                >
                                  {lrn}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Technologies Tag Bar */}
                    <div className="pt-4 border-t border-[rgba(91,33,182,0.12)] flex flex-wrap items-center gap-2">
                      <span className="text-xs font-mono text-[#5b21b6] dark:text-[#a78bfa] uppercase font-extrabold mr-1">
                        Stack Used:
                      </span>
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg bg-[#ede5ff] dark:bg-[#2c1a4d] border border-[rgba(91,33,182,0.2)] text-[#5b21b6] dark:text-[#c4b5fd] text-xs font-mono font-bold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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
