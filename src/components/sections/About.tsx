import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { TiltCard } from '../ui/TiltCard';
import { ABOUT_DATA } from '../../data/portfolioData';
import { Brain, Rocket, Target, Cpu, Server, Cloud, Layers } from 'lucide-react';
import { soundFx } from '../../utils/soundEffects';

const INTEREST_ICONS = [
  <Brain className="w-5 h-5 text-[#4f46e5] dark:text-[#a78bfa]" />,
  <Layers className="w-5 h-5 text-[#4f46e5] dark:text-[#a78bfa]" />,
  <Server className="w-5 h-5 text-[#4f46e5] dark:text-[#a78bfa]" />,
  <Cloud className="w-5 h-5 text-[#4f46e5] dark:text-[#a78bfa]" />,
  <Cpu className="w-5 h-5 text-[#4f46e5] dark:text-[#a78bfa]" />,
];

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-24 bg-[#faf8ff] z-10">
      {/* Visual Atmosphere */}
      <div className="absolute inset-0 bg-dots-lavender opacity-40 pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-[#e0e7ff]/60 dark:bg-purple-900/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Developer Profile"
          title="About Me"
          subtitle="A deeper look into my background, core software engineering interests, and vision for intelligent web systems."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Story Card (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex"
          >
            <TiltCard className="w-full flex flex-col justify-between p-8 border border-[#6366f1]/20 bg-white dark:bg-[#1e1b4b] shadow-sm">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-[#eef2ff] dark:bg-[#2e2a72] border border-[#6366f1]/20 text-[#4f46e5]">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-[#1e1b4b] dark:text-white font-heading">
                      Engineering Philosophy
                    </h3>
                    <span className="text-xs font-mono text-[#4f46e5] dark:text-[#c4b5fd] font-extrabold">
                      Full Stack & Artificial Intelligence
                    </span>
                  </div>
                </div>

                <p className="text-[#334155] dark:text-slate-200 text-base md:text-lg leading-relaxed font-medium">
                  {ABOUT_DATA.bio}
                </p>

                {/* Core Pillar Stats */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#6366f1]/15">
                  <div className="p-3 rounded-2xl bg-[#f5f3ff] dark:bg-[#2e2a72] border border-[#6366f1]/15 text-center">
                    <div className="text-2xl font-black text-[#4f46e5] dark:text-[#c4b5fd] font-heading">100%</div>
                    <div className="text-[11px] font-mono text-[#334155] dark:text-slate-300 font-bold">Dedication</div>
                  </div>
                  <div className="p-3 rounded-2xl bg-[#f5f3ff] dark:bg-[#2e2a72] border border-[#6366f1]/15 text-center">
                    <div className="text-2xl font-black text-[#4f46e5] dark:text-[#c4b5fd] font-heading">Full Stack</div>
                    <div className="text-[11px] font-mono text-[#334155] dark:text-slate-300 font-bold">Java & React</div>
                  </div>
                  <div className="p-3 rounded-2xl bg-[#f5f3ff] dark:bg-[#2e2a72] border border-[#6366f1]/15 text-center">
                    <div className="text-2xl font-black text-emerald-600 dark:text-emerald-300 font-heading">AI First</div>
                    <div className="text-[11px] font-mono text-[#334155] dark:text-slate-300 font-bold">LLM Products</div>
                  </div>
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* Interactive Interest Cards (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-6 flex flex-col justify-between"
          >
            {/* Currently Interested In */}
            <TiltCard className="p-6 border border-[#6366f1]/20 bg-white dark:bg-[#1e1b4b] shadow-sm">
              <div className="flex items-center gap-2.5 mb-4">
                <Brain className="w-5 h-5 text-[#4f46e5]" />
                <h4 className="text-base font-extrabold text-[#1e1b4b] dark:text-white font-heading">
                  Currently Interested In
                </h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {ABOUT_DATA.currentlyInterestedIn.map((topic, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.03, x: 3 }}
                    onClick={() => soundFx.playPop()}
                    className="flex items-center gap-2.5 p-3 rounded-2xl bg-[#f5f3ff] dark:bg-[#2e2a72] border border-[#6366f1]/15 text-xs font-mono font-bold text-[#1e1b4b] dark:text-slate-100 cursor-pointer"
                  >
                    {INTEREST_ICONS[idx % INTEREST_ICONS.length]}
                    <span>{topic}</span>
                  </motion.div>
                ))}
              </div>
            </TiltCard>

            {/* What I Enjoy Building */}
            <TiltCard className="p-6 border border-[#6366f1]/20 bg-white dark:bg-[#1e1b4b] shadow-sm">
              <div className="flex items-center gap-2.5 mb-4">
                <Rocket className="w-5 h-5 text-[#4f46e5]" />
                <h4 className="text-base font-extrabold text-[#1e1b4b] dark:text-white font-heading">
                  What I Enjoy Building
                </h4>
              </div>
              <div className="space-y-2.5">
                {ABOUT_DATA.whatIEnjoyBuilding.map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 4 }}
                    onClick={() => soundFx.playPop()}
                    className="flex items-center gap-3 p-3 rounded-2xl bg-[#f5f3ff] dark:bg-[#2e2a72] border border-[#6366f1]/15 text-xs sm:text-sm text-[#1e1b4b] dark:text-slate-100 font-bold cursor-pointer"
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-[#4f46e5] shrink-0" />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </TiltCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
