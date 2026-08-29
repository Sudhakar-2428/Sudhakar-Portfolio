import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { PROJECTS_DATA } from '../../data/portfolioData';
import type { ProjectItem } from '../../data/portfolioData';

interface ProjectsProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Transform scroll position into a horizontal movement
  // The amount of x translation depends on the number of projects
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(PROJECTS_DATA.length - 1) * 100}vw`]);

  return (
    <section 
      ref={targetRef}
      id="projects" 
      className="relative h-[300vh] bg-[#F7F7F5]"
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        
        {/* Section Header Fixed Context */}
        <div className="absolute top-10 left-10 md:top-20 md:left-20 z-20 pointer-events-none mix-blend-difference text-white">
          <h2 className="text-xl font-mono uppercase tracking-widest font-bold">
            Selected Works <sup className="text-xs ml-1 font-normal opacity-70">0{PROJECTS_DATA.length}</sup>
          </h2>
        </div>

        {/* Horizontal Moving Container */}
        <motion.div style={{ x }} className="flex">
          {PROJECTS_DATA.map((project, idx) => (
            <div 
              key={project.id} 
              className="w-screen h-screen flex items-center justify-center flex-shrink-0 relative px-4 md:px-20"
            >
              
              {/* Massive Background Index Number */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-bold text-black opacity-[0.03] pointer-events-none select-none font-heading leading-none">
                0{idx + 1}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-7xl z-10">
                {/* Visual Side */}
                <div 
                  className="w-full aspect-[4/3] bg-[#E8E8E6] relative group cursor-none hover-target overflow-hidden"
                  onClick={() => onSelectProject(project)}
                >
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  
                  {/* Subtle placeholder/texture for the image block */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <span className="font-mono text-sm uppercase tracking-widest">{project.techStack.all[0]} Architecture</span>
                  </div>

                  {/* "View Case" cursor follow text simulation */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none">
                    <span className="text-white font-mono uppercase tracking-widest text-sm bg-black px-6 py-3 rounded-full">
                      View Case
                    </span>
                  </div>
                </div>

                {/* Text Side */}
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-xs font-mono uppercase tracking-widest bg-black text-white px-3 py-1 rounded-full">
                      {project.isFeaturedAi ? 'AI Engine' : 'Full Stack'}
                    </span>
                    <span className="text-sm font-mono text-[#0A0A0A]/50">2024</span>
                  </div>
                  
                  <h3 className="text-5xl md:text-7xl font-black text-[#0A0A0A] leading-tight mb-4 tracking-tighter">
                    {project.name}
                  </h3>
                  
                  <p className="text-xl text-[#0A0A0A]/70 mb-8 max-w-xl leading-relaxed">
                    {project.title}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.techStack.all.slice(0, 4).map(tech => (
                      <span key={tech} className="text-xs font-mono uppercase border border-[#0A0A0A]/20 px-3 py-1 text-[#0A0A0A]/60">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-8 border-t border-[#0A0A0A]/10 pt-6">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="group flex items-center text-lg font-medium text-[#0A0A0A] hover-target"
                    >
                      Read Case Study
                      <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" />
                    </button>

                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group flex items-center text-sm font-mono uppercase tracking-widest text-[#0A0A0A]/60 hover:text-[#0A0A0A] transition-colors hover-target"
                    >
                      Live
                      <ArrowUpRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </a>
                    
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group flex items-center text-sm font-mono uppercase tracking-widest text-[#0A0A0A]/60 hover:text-[#0A0A0A] transition-colors hover-target"
                    >
                      Code
                      <ArrowUpRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </a>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
