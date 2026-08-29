import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { GlowCard } from '../ui/GlowCard';
import type { ProjectItem } from '../../data/portfolioData';
import { PROJECTS_DATA } from '../../data/portfolioData';
import { ExternalLink, Sparkles, ArrowRight, Bot, Activity, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from '../ui/SocialIcons';

interface ProjectsProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  return (
    <section id="projects" className="relative py-24 bg-[#f8f6ff] dark:bg-[#0c0717] z-10">
      {/* Ambient Visual Atmosphere */}
      <div className="absolute inset-0 bg-dots-lavender opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Featured Engineering Showcase"
          title="Full-Stack & AI Platforms"
          subtitle="Real-world software platforms built to turn complex processes into intelligent, scalable web applications."
        />

        <div className="space-y-12">
          {PROJECTS_DATA.map((project, idx) => {
            const isAiProduct = project.isFeaturedAi;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
              >
                <GlowCard className="p-6 sm:p-10 border border-[rgba(91,33,182,0.15)] bg-white dark:bg-[#1b1230] shadow-md">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    
                    {/* Left Details Column (7 cols) */}
                    <div className="lg:col-span-7 space-y-6">
                      {/* Project Number & Badges */}
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-2xl font-black font-mono text-[#5b21b6] dark:text-[#a78bfa]">
                          0{idx + 1}.
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-mono font-extrabold bg-[#ede5ff] text-[#5b21b6] dark:bg-[#2c1a4d] dark:text-[#c4b5fd] border border-[rgba(91,33,182,0.25)]">
                          {isAiProduct ? 'AI Innovation' : 'Full-Stack Web App'}
                        </span>
                        {isAiProduct && (
                          <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#ede5ff] text-[#5b21b6] dark:bg-[#2c1a4d] dark:text-[#c4b5fd] border border-[rgba(91,33,182,0.25)] text-xs font-mono font-bold">
                            <Sparkles className="w-3.5 h-3.5 text-[#5b21b6]" />
                            Featured AI Breakthrough
                          </span>
                        )}
                      </div>

                      {/* Project Title */}
                      <div className="space-y-1">
                        <h3 className="text-3xl sm:text-4xl font-black text-[#171329] dark:text-white font-heading">
                          {project.name}
                        </h3>
                        <p className="text-[#6d28d9] dark:text-[#c4b5fd] text-base font-bold font-mono">
                          {project.title}
                        </p>
                      </div>

                      {/* Solution Summary */}
                      <p className="text-[#3f3850] dark:text-[#d4cbe5] text-sm sm:text-base leading-relaxed font-medium">
                        {project.solution}
                      </p>

                      {/* Key Capabilities */}
                      <div className="space-y-2">
                        <h4 className="text-xs font-mono uppercase text-[#5b21b6] dark:text-[#a78bfa] font-bold">
                          Core Capabilities:
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#4a4357] dark:text-[#d4cbe5] font-semibold">
                          {project.keyFeatures.slice(0, 4).map((feature, fIdx) => (
                            <div key={fIdx} className="flex items-center gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#5b21b6] shrink-0" />
                              <span className="truncate">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technology Badges */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.techStack.all.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-lg bg-[#ede5ff] dark:bg-[#2c1a4d] border border-[rgba(91,33,182,0.2)] text-[#5b21b6] dark:text-[#c4b5fd] text-xs font-mono font-bold"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap items-center gap-3.5 pt-4 border-t border-[rgba(91,33,182,0.15)]">
                        <button
                          onClick={() => onSelectProject(project)}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#5b21b6] via-[#6d28d9] to-[#7c3aed] hover:from-[#4c1d95] hover:to-[#5b21b6] text-white font-semibold text-xs font-mono shadow-md shadow-[#5b21b6]/20 transition-all hover:-translate-y-0.5"
                        >
                          <span>Explore Deep Dive</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>

                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-[#1b1230] hover:bg-[#f0e8ff] border border-[rgba(91,33,182,0.25)] text-[#5b21b6] dark:text-[#c4b5fd] text-xs font-mono font-bold transition-all shadow-sm hover:-translate-y-0.5"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Live Demo</span>
                        </a>

                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-xl bg-white dark:bg-[#1b1230] hover:bg-[#f0e8ff] border border-[rgba(91,33,182,0.25)] text-[#171329] dark:text-white hover:text-[#5b21b6] transition-all shadow-sm"
                          title="GitHub Source"
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>
                      </div>
                    </div>

                    {/* Right Column: Technical Dark Visual Preview Box (5 cols) */}
                    <div className="lg:col-span-5">
                      <div className="relative rounded-2xl bg-[#1b1230] border border-[rgba(167,139,250,0.2)] p-5 space-y-4 overflow-hidden group">
                        
                        {/* Decorative AI Glow */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 blur-xl opacity-60 group-hover:opacity-100 transition-opacity" />

                        <div className="relative z-10 space-y-4">
                          {/* Visual Header */}
                          <div className="flex items-center justify-between pb-3 border-b border-[rgba(167,139,250,0.15)]">
                            <div className="flex items-center gap-2">
                              {isAiProduct ? (
                                <Bot className="w-4 h-4 text-[#a78bfa] animate-pulse" />
                              ) : (
                                <Activity className="w-4 h-4 text-[#a78bfa]" />
                              )}
                              <span className="font-mono text-xs font-bold text-white uppercase">
                                {isAiProduct ? 'AI Pipeline Visual' : 'System Overview'}
                              </span>
                            </div>
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#2c1a4d] text-[#c4b5fd] font-bold">
                              Active Engine
                            </span>
                          </div>

                          {/* Workflow Steps or Farm Modules */}
                          {project.workflow ? (
                            <div className="space-y-2">
                              <span className="text-[11px] font-mono text-[#c4b5fd] block font-semibold">
                                Candidate Evaluation Pipeline:
                              </span>
                              <div className="space-y-1.5 font-mono text-[11px]">
                                {project.workflow.slice(0, 5).map((step, sIdx) => (
                                  <div
                                    key={sIdx}
                                    className="flex items-center justify-between p-2 rounded-lg bg-[#24163d] border border-[rgba(167,139,250,0.15)] text-[#f8f5ff]"
                                  >
                                    <span className="flex items-center gap-2">
                                      <span className="text-[#a78bfa] font-bold">0{sIdx + 1}.</span>
                                      {step}
                                    </span>
                                    <span className="text-emerald-300 font-bold text-[10px]">✓</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ) : (
                            <div className="space-y-3">
                              <span className="text-[11px] font-mono text-[#c4b5fd] block font-semibold">
                                Operations Lifecycle Modules:
                              </span>
                              <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-[#f8f5ff]">
                                <div className="p-2 rounded-lg bg-[#24163d] border border-[rgba(167,139,250,0.15)]">
                                  🐓 Individual Flock
                                </div>
                                <div className="p-2 rounded-lg bg-[#24163d] border border-[rgba(167,139,250,0.15)]">
                                  🥚 Egg Tracking
                                </div>
                                <div className="p-2 rounded-lg bg-[#24163d] border border-[rgba(167,139,250,0.15)]">
                                  🐥 Natural Hatching
                                </div>
                                <div className="p-2 rounded-lg bg-[#24163d] border border-[rgba(167,139,250,0.15)]">
                                  📊 Revenue Analytics
                                </div>
                              </div>
                            </div>
                          )}

                          {/* Impact Quote */}
                          <div className="p-3 rounded-xl bg-[#24163d] border border-[rgba(167,139,250,0.15)] text-xs text-[#d4cbe5] italic">
                            "{project.impact}"
                          </div>
                        </div>
                      </div>
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
