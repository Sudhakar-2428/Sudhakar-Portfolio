import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { EDUCATION_DATA } from '../../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="relative py-24 z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-16">
          <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center border border-purple-200 shadow-sm">
            <GraduationCap className="w-6 h-6 text-purple-600" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 font-heading">Education</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EDUCATION_DATA.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <div className="glass-panel p-8 h-full flex flex-col">
                <div className="text-sm font-medium text-purple-600 mb-2">{edu.period}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 leading-tight">{edu.degree}</h3>
                <div className="text-base font-medium text-slate-700 mb-4">{edu.institution}</div>
                
                {edu.details && (
                  <p className="text-sm text-slate-600 mb-6 flex-grow leading-relaxed">
                    {edu.details}
                  </p>
                )}
                
                <div className="mt-auto pt-4 border-t border-slate-100">
                  <span className="inline-block px-3 py-1 bg-white border border-slate-200 rounded-md text-sm font-bold text-slate-800 shadow-sm">
                    {edu.score}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
