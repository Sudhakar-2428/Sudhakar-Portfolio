import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, Sparkles, Cpu, Layers, Workflow } from 'lucide-react';
import type { ProjectItem } from '../../data/portfolioData';
import { GithubIcon } from './SocialIcons';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [project]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0f091f]/60 backdrop-blur-md"
        />

        {/* Modal Content */}
        <motion.div
          data-lenis-prevent
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', duration: 0.5, bounce: 0.2 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-[#1b1230] border border-[rgba(91,33,182,0.2)] rounded-2xl shadow-2xl z-10 p-6 sm:p-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2.5 rounded-xl bg-[#f4f0ff] dark:bg-[#2c1a4d] border border-[rgba(91,33,182,0.15)] text-[#171329] dark:text-white hover:text-[#5b21b6] transition-all shadow-sm"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="space-y-3 mb-6 pr-10">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-[#ede5ff] dark:bg-[#2c1a4d] border border-[rgba(91,33,182,0.2)] text-[#5b21b6] dark:text-[#c4b5fd] text-xs font-mono font-bold">
                {project.id === 'mock-interview-agent' ? 'AI Product' : 'Full Stack Application'}
              </span>
              {project.isFeaturedAi && (
                <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#ede5ff] dark:bg-[#2c1a4d] border border-[rgba(91,33,182,0.2)] text-[#5b21b6] dark:text-[#c4b5fd] text-xs font-mono font-bold">
                  <Sparkles className="w-3.5 h-3.5 text-[#5b21b6]" />
                  Featured AI Innovation
                </span>
              )}
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-[#171329] dark:text-white font-heading">
              {project.name}
            </h2>
            <p className="text-[#5b21b6] dark:text-[#c4b5fd] text-base font-extrabold font-mono">
              {project.title}
            </p>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3 pb-6 mb-6 border-b border-[rgba(91,33,182,0.15)]">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#5b21b6] via-[#6d28d9] to-[#7c3aed] hover:from-[#4c1d95] hover:to-[#5b21b6] text-white font-semibold text-xs font-mono shadow-md transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                Live Application
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#f4f0ff] dark:bg-[#24163d] hover:bg-[#ede5ff] border border-[rgba(91,33,182,0.2)] text-[#171329] dark:text-white font-bold text-xs font-mono shadow-sm transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                GitHub Repository
              </a>
            )}
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Problem & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl bg-[#fff0f2] dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/40">
                <h3 className="text-xs font-mono uppercase tracking-wider text-[#9f1239] dark:text-rose-300 font-bold mb-2">
                  The Problem
                </h3>
                <p className="text-[#3f3850] dark:text-[#d4cbe5] text-sm leading-relaxed font-medium">
                  {project.problem}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#ecfdf5] dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/40">
                <h3 className="text-xs font-mono uppercase tracking-wider text-[#065f46] dark:text-emerald-300 font-bold mb-2">
                  The Solution
                </h3>
                <p className="text-[#3f3850] dark:text-[#d4cbe5] text-sm leading-relaxed font-medium">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Workflow */}
            {project.workflow && (
              <div className="space-y-4">
                <h3 className="text-base font-bold text-[#171329] dark:text-white flex items-center gap-2 font-heading">
                  <Workflow className="w-5 h-5 text-[#5b21b6]" />
                  System Pipeline & Workflow Architecture
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {project.workflow.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-[#f8f6ff] dark:bg-[#24163d] border border-[rgba(91,33,182,0.15)] text-xs text-[#171329] dark:text-white font-semibold shadow-sm"
                    >
                      <span className="font-mono text-[#5b21b6] dark:text-[#a78bfa] font-bold block mb-1">
                        0{idx + 1}.
                      </span>
                      {step}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Features */}
            <div className="space-y-4">
              <h3 className="text-base font-bold text-[#171329] dark:text-white flex items-center gap-2 font-heading">
                <Layers className="w-5 h-5 text-[#5b21b6]" />
                Key Features & Technical Capabilities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.keyFeatures.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-[#f8f6ff] dark:bg-[#24163d] border border-[rgba(91,33,182,0.12)] shadow-sm text-sm text-[#171329] dark:text-slate-100 font-semibold"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#5b21b6] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Architecture */}
            {project.aiComponent && (
              <div className="p-5 rounded-xl bg-[#ede5ff] dark:bg-[#2c1a4d] border border-[rgba(91,33,182,0.2)] space-y-2">
                <h3 className="text-xs font-mono uppercase tracking-wider text-[#5b21b6] dark:text-[#c4b5fd] font-bold flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-[#5b21b6]" />
                  Artificial Intelligence Architecture
                </h3>
                <p className="text-[#3f3850] dark:text-[#d4cbe5] text-sm leading-relaxed font-medium">
                  {project.aiComponent}
                </p>
              </div>
            )}

            {/* Impact */}
            {project.impact && (
              <div className="p-5 rounded-xl bg-[#f4f0ff] dark:bg-[#24163d] border border-[rgba(91,33,182,0.15)] space-y-2">
                <h3 className="text-xs font-mono uppercase tracking-wider text-[#5b21b6] dark:text-[#c4b5fd] font-bold">
                  Impact & Value Delivered
                </h3>
                <p className="text-[#3f3850] dark:text-[#d4cbe5] text-sm leading-relaxed font-medium">
                  {project.impact}
                </p>
              </div>
            )}

            {/* Tech Stack Pills */}
            <div className="space-y-3 pt-2">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#5b21b6] dark:text-[#a78bfa]">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.all.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg bg-[#ede5ff] dark:bg-[#2c1a4d] border border-[rgba(91,33,182,0.2)] text-[#5b21b6] dark:text-[#c4b5fd] text-xs font-mono font-bold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
