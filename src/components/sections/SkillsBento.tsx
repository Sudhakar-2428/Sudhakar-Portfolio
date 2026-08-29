import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS_DATA } from '../../data/portfolioData';

export const SkillsBento: React.FC = () => {
  // Flatten top skills for the bento view
  const topSkills = SKILLS_DATA.flatMap((cat) => cat.skills)
    .sort((a, b) => (b.level || 0) - (a.level || 0))
    .slice(0, 16); // Top 16 skills

  return (
    <div className="flex flex-col h-full z-10">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-slate-900 font-heading">Core Arsenal</h3>
        <span className="text-sm font-medium text-purple-600 bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
          Tech Stack
        </span>
      </div>

      <div className="flex flex-wrap gap-2.5">
        {topSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: index * 0.03,
            }}
            whileHover={{ 
              scale: 1.05, 
              backgroundColor: "var(--purple-primary)",
              color: "#ffffff",
              borderColor: "var(--purple-primary)"
            }}
            className="px-4 py-2 bg-white/80 border border-slate-200 text-slate-700 text-sm font-medium rounded-xl shadow-sm cursor-default transition-colors duration-200"
          >
            {skill.name}
          </motion.div>
        ))}
      </div>
      
      {/* Decorative gradient blur in background */}
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-400/20 rounded-full blur-3xl pointer-events-none"></div>
    </div>
  );
};
