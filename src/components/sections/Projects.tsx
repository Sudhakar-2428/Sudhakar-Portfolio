import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { GithubIcon } from '../ui/SocialIcons';
import { PROJECTS_DATA } from '../../data/portfolioData';
import type { ProjectItem } from '../../data/portfolioData';

interface ProjectsProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  return (
    <section id="projects" className="relative py-32 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4 font-heading">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl">
            Real-world platforms engineered to solve complex problems with modern tech stacks and AI integration.
          </p>
        </div>

        <div className="space-y-32">
          {PROJECTS_DATA.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${
                idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image / Showcase Column */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="glass-panel aspect-[4/3] p-8 flex flex-col justify-between overflow-hidden relative group cursor-pointer transition-transform duration-500 hover:scale-[1.02]"
                     onClick={() => onSelectProject(project)}>
                  {/* Decorative Background Element */}
                  <div className="absolute -right-20 -top-20 w-64 h-64 bg-purple-400/20 rounded-full blur-3xl group-hover:bg-purple-500/30 transition-colors duration-500"></div>
                  <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-indigo-400/20 rounded-full blur-3xl group-hover:bg-indigo-500/30 transition-colors duration-500"></div>

                  <div className="relative z-10">
                    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-white/80 text-purple-700 shadow-sm mb-6 border border-purple-100">
                      {project.isFeaturedAi ? 'AI Innovation' : 'Full-Stack'}
                    </span>
                    <h3 className="text-3xl font-bold text-slate-900 mb-2 font-heading">
                      {project.name}
                    </h3>
                    <p className="text-purple-600 font-medium">
                      {project.title}
                    </p>
                  </div>
                  
                  <div className="relative z-10 flex gap-4 mt-8">
                    {project.techStack.all.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-white/60 backdrop-blur-md rounded-lg text-sm font-medium text-slate-700 border border-white/40 shadow-sm">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.all.length > 3 && (
                      <span className="px-3 py-1 bg-white/60 backdrop-blur-md rounded-lg text-sm font-medium text-slate-700 border border-white/40 shadow-sm">
                        +{project.techStack.all.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Text & Details Column */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6 text-slate-400 font-mono text-sm tracking-widest">
                  <span>0{idx + 1}</span>
                  <div className="h-px w-12 bg-slate-300"></div>
                </div>
                
                <h3 className="text-3xl font-bold text-slate-900 mb-6 font-heading leading-tight">
                  {project.solution.split('.')[0]}.
                </h3>
                
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  {project.problem}
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-medium transition-all hover:scale-105 shadow-md shadow-purple-200"
                  >
                    Read Case Study
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 p-3 rounded-full bg-white text-slate-700 hover:text-purple-600 hover:bg-purple-50 transition-all shadow-sm border border-slate-200"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 p-3 rounded-full bg-white text-slate-700 hover:text-purple-600 hover:bg-purple-50 transition-all shadow-sm border border-slate-200"
                  >
                    <GithubIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
