import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, ExternalLink, CheckCircle } from 'lucide-react';
import { PROJECTS_DATA } from '../../data/portfolioData';
import type { ProjectItem } from '../../data/portfolioData';
import poultryImg from '../../assets/projects/poultry.png';
import interviewImg from '../../assets/projects/interview.png';

interface ProjectsProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  return (
    <section id="projects" className="relative py-24 z-10 overflow-hidden">
      {/* Background Atmosphere - Deeper Lavender */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[var(--bg-page)] via-[var(--bg-secondary)]/50 to-[var(--bg-page)] opacity-80" />
      <div className="absolute bottom-1/3 right-[5%] w-[500px] h-[500px] bg-[var(--purple-primary)]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE1IDBMMTUgNjBNMCAxNUw2MCAxNSIgc3Ryb2tlPSJyZ2JhKDkxLCAzMywgMTgyLCAwLjA0KSIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==')] opacity-60 -z-10" />
      
      <div className="max-w-[90vw] mx-auto relative z-10">
        
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-[#E9D5FF] mb-4 shadow-sm"
          >
            <span className="text-[#5B21B6] font-mono text-xs uppercase tracking-widest font-bold">
              Selected Works
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-heading text-[var(--text-deep)] mb-6"
          >
            Featured Projects.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[var(--text-secondary)] font-medium max-w-2xl mx-auto"
          >
            A collection of technical projects ranging from AI-powered solutions to scalable web applications.
          </motion.p>
        </div>

        <div className="flex flex-col gap-32">
          {PROJECTS_DATA.map((project, idx) => {
            const isSmartPoultry = project.id === "smart-poultry";
            
            return (
              <div key={project.id} className="relative group ">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-[#7C3AED] opacity-0 group-hover:opacity-5 blur-[100px] transition-opacity duration-700 rounded-[3rem] pointer-events-none" />
                
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-8 items-center">
                  
                  {/* Content Side */}
                  <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className={`xl:col-span-5 flex flex-col p-8 xl:p-10 glass-card rounded-[2rem] border border-[var(--glass-border)] hover:border-[#A78BFA] transition-all duration-500 relative overflow-hidden group/text ${idx % 2 !== 0 ? 'xl:order-2' : ''}`}
                  >
                    {/* Hover Background Shift */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-[#F5F1FF]/50 opacity-0 group-hover/text:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex items-center gap-4 mb-6">
                        <span className="text-xs font-mono uppercase tracking-widest bg-[var(--purple-soft)]/10 border border-[var(--glass-border)] text-[var(--purple-primary)] px-3 py-1 rounded-full shadow-sm">
                          {project.isFeaturedAi ? 'AI Powered' : 'Full Stack'}
                        </span>
                      </div>
                    
                    <h3 className="text-2xl font-bold font-heading text-[var(--text-deep)] group-hover:text-[var(--purple-primary)] transition-colors mb-2">
                      {project.name}
                    </h3>
                    <p className="text-[var(--purple-bright)] font-bold text-sm mb-4">
                      {project.title}
                    </p>
                    <p className="text-[var(--text-secondary)] font-medium mb-6 line-clamp-3 leading-relaxed">
                      {project.solution}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mt-auto mb-10">
                      {project.techStack.all.slice(0, 4).map(tech => (
                        <span key={tech} className="px-3 py-1 rounded-lg bg-[var(--bg-page)] border border-[#E9D5FF] text-[var(--text-secondary)] text-xs font-bold">
                          {tech}
                        </span>
                      ))}
                      {project.techStack.all.length > 4 && (
                        <span className="px-3 py-1 rounded-lg bg-[var(--bg-page)] border border-[#E9D5FF] text-[var(--text-secondary)] text-xs font-bold">
                          +{project.techStack.all.length - 4}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                      <button
                        onClick={() => onSelectProject(project)}
                        className=" flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#5B21B6] text-white font-medium hover:bg-[#7C3AED] transition-all shadow-lg shadow-purple-500/20 hover:-translate-y-0.5 group/btn"
                      >
                        Case Study
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                      </button>
                      
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className=" flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[var(--purple-soft)]/10 border border-[var(--glass-border)] text-[var(--purple-primary)] font-bold hover:bg-[var(--purple-primary)] hover:text-white transition-all shadow-sm hover:-translate-y-0.5 group/link"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>

                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className=" flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--purple-soft)]/10 border border-[var(--glass-border)] text-[var(--purple-primary)] font-bold hover:bg-[var(--purple-primary)] hover:text-white transition-all shadow-sm hover:-translate-y-0.5"
                      >
                        GH
                      </a>
                    </div>
                    </div>
                  </motion.div>

                  {/* Visual Side */}
                  <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    onClick={() => onSelectProject(project)}
                    className={`glass-card xl:col-span-7 h-[500px] rounded-[2rem] p-8 relative overflow-hidden transition-all duration-700 hover:border-[#A78BFA] group ${idx % 2 !== 0 ? 'xl:order-1' : ''}`}
                  >
                    {/* Hover Background Shift */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-[#F5F1FF]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    <div className="absolute inset-0 border border-[var(--glass-border)] rounded-[2rem] pointer-events-none z-30" />
                    <div className="absolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none flex items-center justify-center backdrop-blur-[2px]">
                      <div className="bg-white/90 px-6 py-3 rounded-full text-[#5B21B6] font-bold tracking-widest uppercase text-sm shadow-xl flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        View Details <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="w-full h-full relative z-10 transition-transform duration-700 group-hover:scale-[1.02] flex flex-col">
                      {/* Image Area */}
                      <div className="relative w-full flex-1 rounded-2xl overflow-hidden border border-[var(--glass-border)] shadow-lg group-hover:shadow-[0_8px_30px_rgb(91,33,182,0.15)] group-hover:border-[#A78BFA] transition-all duration-300">
                        <img 
                          src={isSmartPoultry ? poultryImg : interviewImg} 
                          alt={project.name} 
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      
                      {/* Additional Information Area */}
                      <div className="mt-5 flex flex-col gap-3 bg-white/40 backdrop-blur-md p-5 rounded-2xl border border-[var(--glass-border)] shadow-sm">
                        {isSmartPoultry ? (
                          <>
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold uppercase tracking-wider text-[var(--purple-primary)]">AI Farm Management</span>
                              <span className="text-xs font-bold text-[var(--text-secondary)] bg-white/60 px-2 py-1 rounded-md">Spring Boot + React</span>
                            </div>
                            <div className="h-px w-full bg-gradient-to-r from-[var(--glass-border)] via-[#E9D5FF] to-[var(--glass-border)]"></div>
                            <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                              <li className="flex items-start gap-2.5">
                                <CheckCircle className="w-4 h-4 text-[var(--purple-primary)] mt-0.5 shrink-0" />
                                <span><strong className="text-[var(--text-deep)]">Capability:</strong> Complete lifecycle tracking & automation</span>
                              </li>
                              <li className="flex items-start gap-2.5">
                                <CheckCircle className="w-4 h-4 text-[var(--purple-primary)] mt-0.5 shrink-0" />
                                <span><strong className="text-[var(--text-deep)]">Highlight:</strong> Real-time farm analytics dashboard</span>
                              </li>
                              <li className="flex items-start gap-2.5">
                                <CheckCircle className="w-4 h-4 text-[var(--purple-primary)] mt-0.5 shrink-0" />
                                <span><strong className="text-[var(--text-deep)]">Impact:</strong> Eliminates manual records & centralizes ops</span>
                              </li>
                            </ul>
                          </>
                        ) : (
                          <>
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold uppercase tracking-wider text-[var(--purple-primary)]">AI Interview Agent</span>
                              <span className="text-xs font-bold text-[var(--text-secondary)] bg-white/60 px-2 py-1 rounded-md">React + OpenAI API</span>
                            </div>
                            <div className="h-px w-full bg-gradient-to-r from-[var(--glass-border)] via-[#E9D5FF] to-[var(--glass-border)]"></div>
                            <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                              <li className="flex items-start gap-2.5">
                                <CheckCircle className="w-4 h-4 text-[var(--purple-primary)] mt-0.5 shrink-0" />
                                <span><strong className="text-[var(--text-deep)]">Capability:</strong> Real-time AI interview & evaluation</span>
                              </li>
                              <li className="flex items-start gap-2.5">
                                <CheckCircle className="w-4 h-4 text-[var(--purple-primary)] mt-0.5 shrink-0" />
                                <span><strong className="text-[var(--text-deep)]">Highlight:</strong> Integrated live coding & sentiment tracking</span>
                              </li>
                              <li className="flex items-start gap-2.5">
                                <CheckCircle className="w-4 h-4 text-[var(--purple-primary)] mt-0.5 shrink-0" />
                                <span><strong className="text-[var(--text-deep)]">Impact:</strong> Provides instant feedback to boost pass rates</span>
                              </li>
                            </ul>
                          </>
                        )}
                      </div>
                    </div>
                  </motion.div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
