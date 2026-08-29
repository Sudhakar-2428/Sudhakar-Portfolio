import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE_DATA, EDUCATION_DATA } from '../../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 bg-[#0A0A0A] text-[#F7F7F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Experience Section */}
        <div className="mb-32">
          <h2 className="text-sm font-mono uppercase tracking-widest text-[#F7F7F5]/50 mb-12 border-b border-[#F7F7F5]/10 pb-4">
            Professional Experience
          </h2>
          
          <div className="flex flex-col">
            {EXPERIENCE_DATA.map((exp) => (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group border-b border-[#F7F7F5]/10 py-10 hover:border-[#F7F7F5]/30 transition-colors hover-target"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                  <div className="md:col-span-3">
                    <span className="text-sm font-mono text-[#F7F7F5]/50">{exp.duration}</span>
                  </div>
                  
                  <div className="md:col-span-9">
                    <h3 className="text-3xl md:text-5xl font-medium tracking-tight mb-4 group-hover:text-[#E53E3E] transition-colors">
                      {exp.role}
                    </h3>
                    
                    <div className="flex items-center gap-4 mb-6 text-[#F7F7F5]/70">
                      <span className="text-lg">{exp.company}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E53E3E]"></span>
                      <span className="font-mono text-sm uppercase">{exp.project}</span>
                    </div>

                    <p className="text-[#F7F7F5]/60 text-lg leading-relaxed max-w-3xl mb-8">
                      {exp.contribution}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map(tech => (
                        <span key={tech} className="px-3 py-1 border border-[#F7F7F5]/20 rounded-full text-xs font-mono text-[#F7F7F5]/70">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Section embedded */}
        <div>
          <h2 className="text-sm font-mono uppercase tracking-widest text-[#F7F7F5]/50 mb-12 border-b border-[#F7F7F5]/10 pb-4">
            Academic Background
          </h2>
          
          <div className="flex flex-col">
            {EDUCATION_DATA.map((edu, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group border-b border-[#F7F7F5]/10 py-10 hover:border-[#F7F7F5]/30 transition-colors hover-target"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                  <div className="md:col-span-3">
                    <span className="text-sm font-mono text-[#F7F7F5]/50">{edu.period}</span>
                  </div>
                  
                  <div className="md:col-span-9 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-medium tracking-tight mb-2 group-hover:text-[#E53E3E] transition-colors">
                        {edu.degree}
                      </h3>
                      <div className="text-lg text-[#F7F7F5]/70">
                        {edu.institution}
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <span className="inline-block px-4 py-2 border border-[#E53E3E]/30 text-[#E53E3E] rounded-full font-mono text-sm">
                        {edu.score}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
