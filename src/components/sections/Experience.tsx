import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { EXPERIENCE_DATA } from '../../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative py-24 z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-16">
          <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center border border-purple-200 shadow-sm">
            <Briefcase className="w-6 h-6 text-purple-600" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 font-heading">Experience</h2>
        </div>

        <div className="relative border-l-2 border-purple-200 ml-6 pl-10 space-y-16">
          {EXPERIENCE_DATA.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[49px] top-1 w-4 h-4 rounded-full bg-purple-600 border-4 border-white shadow-sm shadow-purple-200"></div>
              
              <div className="glass-panel p-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-1">{exp.role}</h3>
                    <div className="text-lg font-medium text-purple-600 mb-2">{exp.company}</div>
                  </div>
                  <div className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm font-medium border border-slate-200 mt-2 md:mt-0">
                    {exp.duration}
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-2">Project</div>
                  <div className="text-slate-700 font-medium">{exp.project}</div>
                </div>

                <p className="text-slate-600 leading-relaxed mb-6">
                  {exp.contribution}
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 mb-2">Key Features</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {exp.featuresWorkedOn.slice(0, 6).map((feature, i) => (
                        <li key={i} className="flex items-start text-sm text-slate-600">
                          <span className="mr-2 text-purple-500 mt-0.5">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-4 border-t border-slate-100">
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.slice(0, 6).map((tech) => (
                        <span key={tech} className="px-2.5 py-1 bg-white border border-slate-200 rounded-md text-xs font-medium text-slate-600 shadow-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
