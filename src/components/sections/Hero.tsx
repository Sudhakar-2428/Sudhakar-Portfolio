import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, MapPin, Cpu, Download, Code, Sparkles, Terminal } from 'lucide-react';
import { PERSONAL_INFO, HERO_STATS } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';
import confetti from 'canvas-confetti';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleProjectsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#5b21b6', '#6d28d9', '#7c3aed']
    });
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden z-10 bg-[#f4f0ff] dark:bg-[#0f091f]">
      {/* Layered Background Visual Atmosphere */}
      <div className="absolute inset-0 bg-dots-lavender opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#e4d5ff]/50 dark:bg-purple-900/30 rounded-full blur-3xl pointer-events-none animate-pulse-glow-soft" />
      <div className="absolute bottom-10 right-10 w-[32rem] h-[32rem] bg-[#ddd6fe]/50 dark:bg-indigo-900/30 rounded-full blur-3xl pointer-events-none animate-pulse-glow-soft" style={{ animationDelay: '2.5s' }} />

      {/* Orbital curved SVG line background */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50%" cy="50%" r="400" fill="none" stroke="#5b21b6" strokeWidth="1" strokeDasharray="4 8" />
        <circle cx="50%" cy="50%" r="600" fill="none" stroke="#6d28d9" strokeWidth="1.5" opacity="0.4" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Editorial Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Salutation, Brand, Tagline, CTAs & Socials (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Small Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-[#1b1230] border border-[rgba(91,33,182,0.15)] shadow-sm backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping" />
              <span className="text-xs font-mono text-[#171329] dark:text-purple-200 font-semibold">
                Available for Software Opportunities
              </span>
              <span className="text-[#5b21b6]">|</span>
              <span className="text-xs font-mono text-[#5b21b6] dark:text-[#a78bfa] flex items-center gap-1 font-bold">
                <MapPin className="w-3 h-3 text-[#5b21b6]" />
                {PERSONAL_INFO.location.split(',')[0]}, India
              </span>
            </motion.div>

            {/* Headline Block */}
            <div className="space-y-1.5">
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-lg font-mono text-[#171329] dark:text-[#d4cbe5] font-semibold tracking-wider block"
              >
                Hi, I'm
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight font-heading leading-tight"
              >
                <span className="text-gradient-purple">{PERSONAL_INFO.brand}</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-3 pt-1"
              >
                <h2 className="text-xl sm:text-2xl font-mono text-[#5b21b6] dark:text-[#c4b5fd] font-extrabold uppercase tracking-wider">
                  {PERSONAL_INFO.title}
                </h2>
                <span className="w-14 h-[2px] bg-gradient-to-r from-[#5b21b6] to-transparent" />
              </motion.div>
            </div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg sm:text-2xl font-semibold text-[#171329] dark:text-white font-heading leading-snug border-l-4 border-[#5b21b6] pl-4 py-1"
            >
              "{PERSONAL_INFO.heroTagline}"
            </motion.p>

            {/* Short Introduction */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-sm sm:text-base text-[#3f3850] dark:text-[#d4cbe5] max-w-2xl leading-relaxed font-normal"
            >
              {PERSONAL_INFO.shortIntro}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap items-center gap-3.5 pt-2"
            >
              <a
                href="#projects"
                onClick={handleProjectsClick}
                className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#5b21b6] via-[#6d28d9] to-[#7c3aed] hover:from-[#4c1d95] hover:to-[#5b21b6] text-white font-semibold text-sm shadow-md shadow-[#5b21b6]/25 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </a>

              <a
                href="#contact"
                onClick={handleContactClick}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-[#1b1230] hover:bg-[#f0e8ff] border border-[rgba(91,33,182,0.25)] text-[#171329] dark:text-white font-semibold text-sm shadow-sm transition-all duration-300 hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4 text-[#5b21b6] dark:text-[#a78bfa]" />
                <span>Contact Me</span>
              </a>

              <button
                onClick={() => {
                  triggerConfetti();
                  onOpenResume();
                }}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#ede5ff] dark:bg-[#2c1a4d] hover:bg-[#e2d5ff] border border-[rgba(91,33,182,0.2)] text-[#5b21b6] dark:text-[#c4b5fd] font-mono text-xs font-bold transition-all duration-300 hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-[#5b21b6]" />
                <span>Download Resume</span>
              </button>
            </motion.div>

            {/* Social Icons Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex items-center gap-4 pt-4 border-t border-[rgba(91,33,182,0.15)]"
            >
              <span className="text-xs font-mono text-[#6b6478] dark:text-[#9f94b8] uppercase tracking-widest font-bold">
                Profiles:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white dark:bg-[#1b1230] border border-[rgba(91,33,182,0.15)] text-[#171329] dark:text-white hover:text-[#5b21b6] hover:border-[#5b21b6]/40 hover:-translate-y-1 shadow-sm transition-all"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-4.5 h-4.5" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white dark:bg-[#1b1230] border border-[rgba(91,33,182,0.15)] text-[#5b21b6] dark:text-[#a78bfa] hover:text-[#4c1d95] hover:border-[#5b21b6]/40 hover:-translate-y-1 shadow-sm transition-all"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4.5 h-4.5" />
                </a>
                <a
                  href={PERSONAL_INFO.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white dark:bg-[#1b1230] border border-[rgba(91,33,182,0.15)] text-amber-600 dark:text-amber-400 hover:border-amber-500/40 hover:-translate-y-1 shadow-sm transition-all"
                  title="LeetCode Profile"
                >
                  <Code className="w-4.5 h-4.5" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: Abstract Developer Workspace Visual (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none space-y-6">
              
              {/* Outer Lavender Glow Ring */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#5b21b6] via-[#7c3aed] to-[#a78bfa] blur-xl opacity-20 dark:opacity-40 animate-pulse-glow-soft" />

              {/* Developer Desktop Visual Panel (Dark Technical Container for code contrast) */}
              <div className="relative rounded-2xl bg-[#1b1230] border border-[rgba(167,139,250,0.25)] shadow-xl overflow-hidden">
                {/* IDE Window Bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#110a22] border-b border-[rgba(167,139,250,0.15)]">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-400 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-[#c4b5fd] font-semibold">
                    <Terminal className="w-3.5 h-3.5 text-[#a78bfa]" />
                    <span>SudhakarWorkspace.ts</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#2c1a4d] text-[#c4b5fd] font-bold">
                    Developer Workspace
                  </span>
                </div>

                {/* IDE Code Visual Content */}
                <div className="p-5 font-mono text-xs leading-relaxed space-y-2 text-[#f8f5ff]">
                  <div className="text-[#a78bfa] font-semibold">// Professional Full-Stack & AI Environment</div>

                  <div>
                    <span className="text-[#c4b5fd] font-bold">export const</span>{' '}
                    <span className="text-amber-300 font-bold">sudhakarEngine</span>{' '}
                    <span className="text-slate-400">=</span> &#123;
                  </div>

                  <div className="pl-4 space-y-1">
                    <div>
                      <span className="text-[#a78bfa]">name:</span>{' '}
                      <span className="text-emerald-300">"{PERSONAL_INFO.name}"</span>,
                    </div>
                    <div>
                      <span className="text-[#a78bfa]">title:</span>{' '}
                      <span className="text-emerald-300">"{PERSONAL_INFO.title}"</span>,
                    </div>
                    <div>
                      <span className="text-[#a78bfa]">stack:</span> [
                      <span className="text-amber-300">"Java"</span>,{' '}
                      <span className="text-amber-300">"Spring Boot"</span>,{' '}
                      <span className="text-amber-300">"React"</span>,{' '}
                      <span className="text-amber-300">"TypeScript"</span>],
                    </div>
                    <div>
                      <span className="text-[#a78bfa]">products:</span> [
                      <span className="text-indigo-300">"SmartPoultry"</span>,{' '}
                      <span className="text-indigo-300">"Mock Interview Agent"</span>],
                    </div>
                    <div>
                      <span className="text-[#a78bfa]">status:</span>{' '}
                      <span className="text-emerald-300">"Building high-impact solutions"</span>
                    </div>
                  </div>

                  <div>&#125;;</div>

                  <div className="pt-2 border-t border-[rgba(167,139,250,0.15)] flex items-center justify-between text-[11px] text-[#c4b5fd]">
                    <span className="flex items-center gap-1.5 font-semibold text-[#a78bfa]">
                      <Cpu className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '9s' }} />
                      Full Stack & AI Ready
                    </span>
                    <span className="font-mono text-emerald-300 font-bold">Active Engine</span>
                  </div>
                </div>
              </div>

              {/* Floating Glass Card: "Passionate About" */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="p-4 rounded-2xl bg-white dark:bg-[#1b1230] border border-[rgba(91,33,182,0.15)] shadow-lg space-y-2"
              >
                <div className="flex items-center gap-2 text-xs font-bold font-mono text-[#5b21b6] dark:text-[#c4b5fd] uppercase">
                  <Sparkles className="w-4 h-4 text-[#5b21b6]" />
                  Passionate About
                </div>
                <div className="flex flex-wrap gap-1.5 text-xs font-mono font-bold">
                  <span className="px-2.5 py-1 rounded-lg bg-[#ede5ff] dark:bg-[#2c1a4d] text-[#5b21b6] dark:text-[#c4b5fd]">
                    AI
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-[#ede5ff] dark:bg-[#2c1a4d] text-[#5b21b6] dark:text-[#c4b5fd]">
                    Full Stack
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-[#ede5ff] dark:bg-[#2c1a4d] text-[#5b21b6] dark:text-[#c4b5fd]">
                    Cloud
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
                    System Design
                  </span>
                </div>
              </motion.div>

              {/* HERO STATISTICS CARD */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-white dark:bg-[#1b1230] border border-[rgba(91,33,182,0.15)] shadow-md"
              >
                {HERO_STATS.map((stat, idx) => (
                  <div key={idx} className="text-center p-2 rounded-xl bg-[#f8f6ff] dark:bg-[#24163d]">
                    <span className="text-2xl font-black text-[#5b21b6] dark:text-[#c4b5fd] font-heading block">
                      {stat.value}
                    </span>
                    <span className="text-[11px] font-mono text-[#3f3850] dark:text-[#d4cbe5] font-bold block">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
