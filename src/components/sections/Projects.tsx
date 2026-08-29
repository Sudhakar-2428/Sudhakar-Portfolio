import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { TiltCard } from '../ui/TiltCard';
import type { ProjectItem } from '../../data/portfolioData';
import { PROJECTS_DATA } from '../../data/portfolioData';
import { ExternalLink, Sparkles, ArrowRight, Bot, Activity, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from '../ui/SocialIcons';
import { soundFx } from '../../utils/soundEffects';

interface ProjectsProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  return (
    <section id="projects" className="relative py-24 bg-[#faf8ff] z-10">
      {/* Background Visual Atmosphere */}
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
                <TiltCard className="p-6 sm:p-10 border border-[#6366f1]/20 bg-white dark:bg-[#1e1b4b] shadow-lg">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    
                    {/* Left Details Column (7 cols) */}
                    <div className="lg:col-span-7 space-y-6">
                      {/* Project Number & Badges */}
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-2xl font-black font-mono text-[#4f46e5] dark:text-[#a78bfa]">
                          0{idx + 1}.
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-mono font-extrabold bg-[#eef2ff] text-[#4f46e5] dark:bg-[#2e2a72] dark:text-[#c4b5fd] border border-[#6366f1]/25">
                          {isAiProduct ? 'AI Innovation' : 'Full-Stack Web App'}
                        </span>
                        {isAiProduct && (
                          <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#eef2ff] text-[#4f46e5] dark:bg-[#2e2a72] dark:text-[#c4b5fd] border border-[#6366f1]/25 text-xs font-mono font-bold">
                            <Sparkles className="w-3.5 h-3.5 text-[#4f46e5]" />
                            Featured AI Breakthrough
                          </span>
                        )}
                      </div>

                      {/* Project Title */}
                      <div className="space-y-1">
                        <h3 className="text-3xl sm:text-4xl font-black text-[#1e1b4b] dark:text-white font-heading">
                          {project.name}
                        </h3>
                        <p className="text-[#4f46e5] dark:text-[#c4b5fd] text-base font-extrabold font-mono">
                          {project.title}
                        </p>
                      </div>

                      {/* Solution Summary */}
                      <p className="text-[#334155] dark:text-[#d4cbe5] text-sm sm:text-base leading-relaxed font-medium">
                        {project.solution}
                      </p>

                      {/* Key Capabilities */}
                      <div className="space-y-2">
                        <h4 className="text-xs font-mono uppercase text-[#4f46e5] dark:text-[#a78bfa] font-bold">
                          Core Capabilities:
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#334155] dark:text-[#d4cbe5] font-semibold">
                          {project.keyFeatures.slice(0, 4).map((feature, fIdx) => (
                            <div key={fIdx} className="flex items-center gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#4f46e5] shrink-0" />
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
                            className="px-3 py-1 rounded-xl bg-[#eef2ff] dark:bg-[#2e2a72] border border-[#6366f1]/20 text-[#4f46e5] dark:text-[#c4b5fd] text-xs font-mono font-bold"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap items-center gap-3.5 pt-4 border-t border-[#6366f1]/15">
                        <button
                          onClick={() => {
                            soundFx.playChime();
                            onSelectProject(project);
                          }}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-[#4f46e5] via-[#6366f1] to-[#7c3aed] hover:from-[#4338ca] hover:to-[#4f46e5] text-white font-bold text-xs font-mono shadow-md shadow-[#4f46e5]/20 transition-all hover:-translate-y-0.5"
                        >
                          <span>Explore Deep Dive</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>

                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => soundFx.playPop()}
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white dark:bg-[#1e1b4b] hover:bg-[#f5f3ff] border border-[#6366f1]/25 text-[#4f46e5] dark:text-[#c4b5fd] text-xs font-mono font-bold transition-all shadow-sm hover:-translate-y-0.5"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Live Demo</span>
                        </a>

                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => soundFx.playPop()}
                          className="p-2.5 rounded-2xl bg-white dark:bg-[#1e1b4b] hover:bg-[#f5f3ff] border border-[#6366f1]/25 text-[#1e1b4b] dark:text-white hover:text-[#4f46e5] transition-all shadow-sm"
                          title="GitHub Source"
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>
                      </div>
                    </div>

                    {/* Right Column: Technical Dark Visual Preview Box (5 cols) */}
                    <div className="lg:col-span-5">
                      <div className="relative rounded-2xl bg-[#17153b] border border-[#6366f1]/25 p-5 space-y-4 overflow-hidden group">
                        
                        {/* Decorative AI Glow */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600/30 to-purple-600/30 blur-xl opacity-60 group-hover:opacity-100 transition-opacity" />

                        <div className="relative z-10 space-y-4">
                          {/* Visual Header */}
                          <div className="flex items-center justify-between pb-3 border-b border-[#6366f1]/20">
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
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#2a2663] text-[#c4b5fd] font-bold">
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
                                    className="flex items-center justify-between p-2 rounded-xl bg-[#242054] border border-[#6366f1]/20 text-[#f8f5ff]"
                                  >
                                    <span className="flex items-center gap-2">
                                      <span className="text-[#a78bfa] font-bold">0{sIdx + 1}.</span>
                                      {step}
                                    </span>
                                    <span className="text-emerald-400 font-bold text-[10px]">✓</span>
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
                                <div className="p-2 rounded-xl bg-[#242054] border border-[#6366f1]/20">
                                  🐓 Individual Flock
                                </div>
                                <div className="p-2 rounded-xl bg-[#242054] border border-[#6366f1]/20">
                                  🥚 Egg Tracking
                                </div>
                                <div className="p-2 rounded-xl bg-[#242054] border border-[#6366f1]/20">
                                  🐥 Natural Hatching
                                </div>
                                <div className="p-2 rounded-xl bg-[#242054] border border-[#6366f1]/20">
                                  📊 Revenue Analytics
                                </div>
                              </div>
                            </div>
                          )}

                          {/* Impact Quote */}
                          <div className="p-3 rounded-xl bg-[#242054] border border-[#6366f1]/20 text-xs text-[#d4cbe5] italic">
                            "{project.impact}"
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
