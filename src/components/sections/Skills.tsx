import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS_DATA } from '../../data/portfolioData';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 bg-[#F7F7F5] text-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-sm font-mono uppercase tracking-widest text-[#0A0A0A]/50 mb-16 border-b border-[#0A0A0A]/10 pb-4">
          Capabilities & Arsenal
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
          {SKILLS_DATA.map((category, idx) => (
            <motion.div 
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col"
            >
              <h3 className="text-2xl font-medium tracking-tight mb-6">
                {category.category}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map(skill => (
                  <span 
                    key={skill.name} 
                    className="px-4 py-2 border border-[#0A0A0A]/20 rounded-full text-sm font-medium hover:bg-[#0A0A0A] hover:text-[#F7F7F5] transition-colors cursor-none hover-target"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
