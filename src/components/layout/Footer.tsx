import React from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#0A0A0A] text-[#F7F7F5] pt-32 pb-12 overflow-hidden z-10">
      <div className="max-w-[90vw] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-6xl md:text-8xl font-medium tracking-tight hover-target leading-none">
              {PERSONAL_INFO.brand}
            </h2>
            <p className="text-xl text-[#F7F7F5]/70 max-w-sm">
              {PERSONAL_INFO.heroTagline}
            </p>
          </div>

          {/* Links */}
          <div className="space-y-6">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#F7F7F5]/50">
              Navigation
            </h4>
            <ul className="flex flex-col gap-4 text-lg">
              <li><a href="#projects" className="hover-target hover:text-[#E53E3E] transition-colors">Selected Works</a></li>
              <li><a href="#experience" className="hover-target hover:text-[#E53E3E] transition-colors">Experience</a></li>
              <li><a href="#skills" className="hover-target hover:text-[#E53E3E] transition-colors">Arsenal</a></li>
              <li><a href="#contact" className="hover-target hover:text-[#E53E3E] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Socials */}
          <div className="space-y-6">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#F7F7F5]/50">
              Socials
            </h4>
            <ul className="flex flex-col gap-4 text-lg">
              <li><a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover-target hover:text-[#E53E3E] transition-colors">GitHub</a></li>
              <li><a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover-target hover:text-[#E53E3E] transition-colors">LinkedIn</a></li>
              <li><a href={PERSONAL_INFO.leetcode} target="_blank" rel="noopener noreferrer" className="hover-target hover:text-[#E53E3E] transition-colors">LeetCode</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#F7F7F5]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono uppercase tracking-widest text-[#F7F7F5]/50">
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
