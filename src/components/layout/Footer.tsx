import React from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#130E1F] text-[#F7F7F5] pt-32 pb-12 overflow-hidden z-10">
      <div className="max-w-[90vw] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-6xl md:text-8xl font-medium tracking-tight leading-none bg-gradient-to-br from-[#D4CDEC] to-[#A78BFA] bg-clip-text text-transparent">
              {PERSONAL_INFO.brand}
            </h2>
            <p className="text-xl text-[#F7F7F5]/90 max-w-sm">
              {PERSONAL_INFO.heroTagline}
            </p>
          </div>

          {/* Links */}
          <div className="space-y-6">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#F7F7F5]/70">
              Navigation
            </h4>
            <ul className="flex flex-col gap-4 text-lg">
              <li><a href="#projects" className=" hover:text-[#A78BFA] transition-colors">Selected Works</a></li>
              <li><a href="#experience" className=" hover:text-[#A78BFA] transition-colors">Experience</a></li>
              <li><a href="#skills" className=" hover:text-[#A78BFA] transition-colors">Arsenal</a></li>
              <li><a href="#contact" className=" hover:text-[#A78BFA] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Socials */}
          <div className="space-y-6">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#F7F7F5]/70">
              Socials
            </h4>
            <ul className="flex flex-col gap-4 text-lg">
              <li><a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className=" hover:text-[#A78BFA] transition-colors">GitHub</a></li>
              <li><a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className=" hover:text-[#A78BFA] transition-colors">LinkedIn</a></li>
              <li><a href={PERSONAL_INFO.leetcode} target="_blank" rel="noopener noreferrer" className=" hover:text-[#A78BFA] transition-colors">LeetCode</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#F7F7F5]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono uppercase tracking-widest text-[#F7F7F5]/70">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Available for opportunities
          </div>
        </div>
      </div>
    </footer>
  );
};
