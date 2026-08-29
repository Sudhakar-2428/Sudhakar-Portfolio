import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  badge: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  centered = false,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-12 md:mb-16 ${centered ? 'text-center' : 'text-left'}`}
    >
      <div
        className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ede5ff] dark:bg-[#2c1a4d] border border-[rgba(91,33,182,0.2)] text-[#5b21b6] dark:text-[#c4b5fd] text-xs font-mono font-bold tracking-wider uppercase mb-4 ${
          centered ? 'mx-auto' : ''
        }`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#5b21b6] dark:bg-[#a78bfa] animate-pulse" />
        {badge}
      </div>
      
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#171329] dark:text-white mb-4 font-heading">
        {title}
      </h2>

      {subtitle && (
        <p className="text-[#3f3850] dark:text-[#d4cbe5] text-base md:text-lg max-w-2xl font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
