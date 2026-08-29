import React from 'react';
import { motion } from 'framer-motion';
import { Code, ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-[rgba(91,33,182,0.15)] bg-[#e6deff] pt-16 pb-12 overflow-hidden z-10">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-[#5b21b6]/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#5b21b6] to-[#7c3aed] p-[1px] shadow-md">
                <div className="w-full h-full bg-[#5b21b6] rounded-[11px] flex items-center justify-center font-extrabold text-xl text-white font-heading">
                  {PERSONAL_INFO.monogram}
                </div>
              </div>
              <span className="font-black text-xl tracking-tight text-[#171329] dark:text-white font-heading">
                {PERSONAL_INFO.brand}
              </span>
            </div>
            <p className="text-[#3f3850] dark:text-slate-200 text-sm max-w-md leading-relaxed font-semibold">
              "{PERSONAL_INFO.heroTagline}"
            </p>
            <div className="text-xs font-mono text-[#5b21b6] dark:text-[#c4b5fd] font-extrabold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping" />
              Available for full-time software engineering opportunities
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold text-[#171329] dark:text-white uppercase tracking-wider font-mono">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm text-[#3f3850] dark:text-slate-200 font-sans font-bold">
              <li><a href="#about" className="hover:text-[#5b21b6] dark:hover:text-[#c4b5fd] transition-colors">About Me</a></li>
              <li><a href="#skills" className="hover:text-[#5b21b6] dark:hover:text-[#c4b5fd] transition-colors">Tech Ecosystem</a></li>
              <li><a href="#projects" className="hover:text-[#5b21b6] dark:hover:text-[#c4b5fd] transition-colors">Featured Projects</a></li>
              <li><a href="#experience" className="hover:text-[#5b21b6] dark:hover:text-[#c4b5fd] transition-colors">Experience</a></li>
              <li><a href="#certifications" className="hover:text-[#5b21b6] dark:hover:text-[#c4b5fd] transition-colors">Certifications</a></li>
            </ul>
          </div>

          {/* Social Connections */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold text-[#171329] dark:text-white uppercase tracking-wider font-mono">
              Connect Directly
            </h4>
            <div className="flex flex-wrap gap-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white dark:bg-[#1b1230] border border-[rgba(91,33,182,0.15)] text-[#171329] dark:text-white hover:text-[#5b21b6] shadow-sm transition-all"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white dark:bg-[#1b1230] border border-[rgba(91,33,182,0.15)] text-[#5b21b6] dark:text-[#c4b5fd] hover:text-[#4c1d95] shadow-sm transition-all"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white dark:bg-[#1b1230] border border-[rgba(91,33,182,0.15)] text-amber-600 dark:text-amber-400 shadow-sm transition-all"
                title="LeetCode"
              >
                <Code className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 rounded-xl bg-white dark:bg-[#1b1230] border border-[rgba(91,33,182,0.15)] text-emerald-600 dark:text-emerald-400 shadow-sm transition-all"
                title="Email Direct"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <p className="text-xs text-[#3f3850] dark:text-slate-300 font-mono font-bold pt-2">
              {PERSONAL_INFO.location}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[rgba(91,33,182,0.15)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#3f3850] dark:text-slate-300 font-bold">
          <div className="flex items-center gap-1.5 font-mono">
            <span>© {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with React, TypeScript & Framer Motion.</span>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white dark:bg-[#1b1230] border border-[rgba(91,33,182,0.15)] text-[#171329] dark:text-white hover:text-[#5b21b6] shadow-sm transition-all font-mono font-bold"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#5b21b6]" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};
