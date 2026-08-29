import React from 'react';
import { motion } from 'framer-motion';

interface StatBentoProps {
  label: string;
  value: string;
}

export const StatBento: React.FC<StatBentoProps> = ({ label, value }) => {
  return (
    <motion.div 
      className="glass-panel p-4 flex flex-col items-center justify-center text-center h-full group"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-indigo-500 mb-1">
        {value}
      </div>
      <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">
        {label}
      </div>
    </motion.div>
  );
};
