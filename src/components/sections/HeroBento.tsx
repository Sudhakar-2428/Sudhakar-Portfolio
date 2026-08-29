import React from 'react';
import { FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface HeroBentoProps {
  onOpenResume: () => void;
}

export const HeroBento: React.FC<HeroBentoProps> = ({ onOpenResume }) => {
  return (
    <div className="flex flex-col h-full justify-between z-10">
      <div>
        <div className="inline-flex items-center space-x-2 bg-white/60 rounded-full px-3 py-1 mb-6 border border-white backdrop-blur-md shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600"></span>
          </span>
          <span className="text-xs font-medium text-slate-700 tracking-wide uppercase">
            Available for work
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-4">
          Hi, I'm <span className="text-gradient-purple">{PERSONAL_INFO.name}</span>
        </h1>
        
        <h2 className="text-xl md:text-2xl text-slate-600 font-medium mb-6 max-w-lg leading-relaxed">
          {PERSONAL_INFO.heroTagline}
        </h2>
        
        <p className="text-slate-500 max-w-lg mb-8 leading-relaxed">
          {PERSONAL_INFO.shortIntro}
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-4 mt-auto">
        <button
          onClick={onOpenResume}
          className="group relative inline-flex items-center justify-center px-6 py-3 font-semibold text-white transition-all duration-200 bg-purple-600 rounded-full hover:bg-purple-700 hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600"
        >
          <FileText className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
          View Resume
        </button>

        <div className="flex items-center gap-3">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/80 rounded-full text-slate-600 hover:text-purple-600 hover:bg-white transition-all shadow-sm hover:shadow border border-slate-100 hover:border-purple-200"
            aria-label="GitHub"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/80 rounded-full text-slate-600 hover:text-purple-600 hover:bg-white transition-all shadow-sm hover:shadow border border-slate-100 hover:border-purple-200"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};
