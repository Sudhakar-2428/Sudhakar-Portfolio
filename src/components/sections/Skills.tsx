import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { GlowCard } from '../ui/GlowCard';
import { SKILLS_DATA } from '../../data/portfolioData';
import { Code2, Layout, Server, Database, BrainCircuit, CheckCircle2, Wrench, Sparkles } from 'lucide-react';

const ICON_MAP: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-5 h-5 text-[#5b21b6] dark:text-[#a78bfa]" />,
  Layout: <Layout className="w-5 h-5 text-[#5b21b6] dark:text-[#a78bfa]" />,
  Server: <Server className="w-5 h-5 text-[#5b21b6] dark:text-[#a78bfa]" />,
  Database: <Database className="w-5 h-5 text-[#5b21b6] dark:text-[#a78bfa]" />,
  BrainCircuit: <BrainCircuit className="w-5 h-5 text-[#5b21b6] dark:text-[#a78bfa]" />,
  CheckCircle2: <CheckCircle2 className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
  Wrench: <Wrench className="w-5 h-5 text-rose-600 dark:text-rose-400" />,
};

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...SKILLS_DATA.map((item) => item.category)];

  const filteredSkills =
    selectedCategory === 'All'
      ? SKILLS_DATA
      : SKILLS_DATA.filter((cat) => cat.category === selectedCategory);

  return (
    <section id="skills" className="relative py-24 bg-[#f8f6ff] dark:bg-[#0c0717] z-10">
      {/* Technical Blueprint Grid Pattern */}
      <div className="absolute inset-0 bg-grid-lavender opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Technical Competencies"
          title="Skills & Tech Ecosystem"
          subtitle="A comprehensive overview of programming languages, frameworks, backend microservices, databases, and AI APIs I leverage."
        />

        {/* Filter Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-white dark:bg-[#1b1230] border border-[rgba(91,33,182,0.15)] shadow-sm">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`relative px-4 py-2 text-xs font-mono font-bold rounded-xl transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'text-white bg-[#5b21b6] shadow-sm'
                    : 'text-[#171329] dark:text-[#d4cbe5] hover:text-[#5b21b6] hover:bg-[#ede5ff]'
                }`}
              >
                <span>{cat}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Grid of Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((categoryGroup) => (
              <motion.div
                key={categoryGroup.category}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <GlowCard className="h-full p-6 flex flex-col justify-between group border border-[rgba(91,33,182,0.15)] bg-white dark:bg-[#1b1230] shadow-sm">
                  <div>
                    {/* Category Header */}
                    <div className="flex items-center justify-between mb-5 pb-3 border-b border-[rgba(91,33,182,0.12)]">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-[#ede5ff] dark:bg-[#2c1a4d] border border-[rgba(91,33,182,0.2)]">
                          {ICON_MAP[categoryGroup.iconName] || <Code2 className="w-5 h-5 text-[#5b21b6]" />}
                        </div>
                        <h3 className="text-lg font-bold text-[#171329] dark:text-white font-heading">
                          {categoryGroup.category}
                        </h3>
                      </div>
                      <span className="text-[11px] font-mono text-[#5b21b6] dark:text-[#c4b5fd] font-extrabold">
                        {categoryGroup.skills.length} Techs
                      </span>
                    </div>

                    {/* Skill Items */}
                    <div className="space-y-3.5">
                      {categoryGroup.skills.map((skill) => (
                        <div key={skill.name} className="group/item space-y-1.5">
                          <div className="flex justify-between items-center text-xs">
                            <span className="font-bold text-[#171329] dark:text-slate-100 group-hover/item:text-[#5b21b6] transition-colors">
                              {skill.name}
                            </span>
                            {skill.level && (
                              <span className="font-mono text-[10px] text-[#5b21b6] dark:text-[#a78bfa] font-bold">
                                {skill.level >= 88 ? 'Advanced' : 'Proficient'}
                              </span>
                            )}
                          </div>
                          
                          {/* Indicator Bar */}
                          {skill.level && (
                            <div className="w-full h-1.5 rounded-full bg-[#ede5ff] dark:bg-[#2c1a4d] overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: 'easeOut' }}
                                className="h-full rounded-full bg-gradient-to-r from-[#5b21b6] via-[#6d28d9] to-[#7c3aed]"
                              />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-3 border-t border-[rgba(91,33,182,0.12)] flex items-center justify-between text-[10px] font-mono text-[#6b6478] dark:text-slate-400 font-semibold">
                    <span>Verified Practical Usage</span>
                    <Sparkles className="w-3 h-3 text-[#5b21b6]" />
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
