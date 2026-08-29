import React from 'react';
import { motion } from 'framer-motion';
import { HeroBento } from './HeroBento';
import { AboutBento } from './AboutBento';
import { SkillsBento } from './SkillsBento';
import { StatBento } from './StatBento';

interface BentoGridProps {
  onOpenResume: () => void;
}

export const BentoGrid: React.FC<BentoGridProps> = ({ onOpenResume }) => {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
        {/* Main Hero Cell - Spans 2 columns on md, 2 rows */}
        <motion.div 
          className="md:col-span-2 md:row-span-2 glass-panel p-8 md:p-12 relative flex flex-col justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <HeroBento onOpenResume={onOpenResume} />
        </motion.div>

        {/* Bio / About Cell */}
        <motion.div 
          className="md:col-span-1 md:row-span-1 glass-panel p-6 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <AboutBento />
        </motion.div>

        {/* Stat Cells */}
        <motion.div 
          className="md:col-span-1 md:row-span-1 grid grid-cols-2 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <StatBento label="Projects" value="10+" />
          <StatBento label="Experience" value="1+ Yrs" />
        </motion.div>

        {/* Skills Cell - Spans 3 columns */}
        <motion.div 
          className="md:col-span-3 glass-panel p-8 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <SkillsBento />
        </motion.div>
      </div>
    </section>
  );
};
