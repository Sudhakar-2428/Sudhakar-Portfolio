import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Server, Database, BrainCircuit, CheckCircle2, Wrench } from 'lucide-react';
import { SKILLS_DATA } from '../../data/portfolioData';

// Map icon names from data to actual Lucide components
const ICON_MAP: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-6 h-6" />,
  Layout: <Layout className="w-6 h-6" />,
  Server: <Server className="w-6 h-6" />,
  Database: <Database className="w-6 h-6" />,
  BrainCircuit: <BrainCircuit className="w-6 h-6" />,
  CheckCircle2: <CheckCircle2 className="w-6 h-6" />,
  Wrench: <Wrench className="w-6 h-6" />,
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="relative py-24 z-10 overflow-hidden">
      {/* Background Atmosphere - Soft Blue/Lavender */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[var(--bg-page)] via-[var(--bg-secondary)]/50 to-[var(--bg-page)] opacity-80" />
      <div className="absolute bottom-0 left-[10%] w-[500px] h-[500px] bg-[#93C5FD]/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-[20%] right-[5%] w-[300px] h-[300px] bg-[var(--purple-soft)]/10 blur-[80px] rounded-full pointer-events-none" />

      <div className="max-w-[90vw] mx-auto relative z-10">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold font-heading text-[var(--text-deep)] mb-6"
          >
            Technical Expertise.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[var(--text-secondary)] font-medium max-w-2xl mx-auto"
          >
            A curated collection of technologies and tools that empower my development workflow.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SKILLS_DATA.map((category, categoryIndex) => {
            const IconNode = ICON_MAP[category.iconName] || <Code2 className="w-6 h-6" />;
            return (
              <motion.div 
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="glass-card p-6 sm:p-8 rounded-3xl border border-[var(--glass-border)] hover:border-[#A78BFA] transition-all duration-300 relative overflow-hidden group"
              >
                {/* Hover Background Shift */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-[#F5F1FF]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-3 bg-[var(--purple-soft)]/10 rounded-xl text-[var(--purple-primary)] group-hover:bg-[var(--purple-primary)] group-hover:text-white transition-colors duration-300">
                      {IconNode}
                    </div>
                    <h3 className="text-lg font-bold font-heading text-[var(--text-deep)]">{category.category}</h3>
                  </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="group flex items-center gap-2 px-4 py-2.5 bg-[var(--purple-soft)]/10 hover:bg-[var(--purple-soft)]/20 border border-[var(--glass-border)] rounded-xl transition-all cursor-default shadow-sm"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--purple-primary)]/40 group-hover:bg-[var(--purple-primary)] transition-colors" />
                      <span className="text-[var(--text-deep)] font-medium text-sm">{skill.name}</span>
                    </motion.div>
                  ))}
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
