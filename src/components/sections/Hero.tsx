import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Code2, Cpu, Database, Server, GitBranch, Layout } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
      
      {/* 3D Atmosphere & Orbital System */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        
        {/* Deep Violet Core Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-[var(--purple-deep)]/5 rounded-full blur-[120px]" />

        {/* Ambient Gradients */}
        <motion.div 
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -right-[10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-[var(--purple-soft)]/10 to-[var(--purple-deep)]/10 blur-[100px]"
        />
        <motion.div 
          animate={{ rotate: -360, scale: [1, 1.2, 1] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[10%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tr from-[var(--purple-primary)]/10 to-transparent blur-[120px]"
        />

        {/* 3D Perspective Grid */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(var(--text-deep) 1px, transparent 1px), linear-gradient(90deg, var(--text-deep) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            transform: 'perspective(1000px) rotateX(60deg) scale(2) translateY(-10%)',
            transformOrigin: 'top center'
          }}
        />

        {/* Orbital Rings behind the ecosystem */}
        <div className="absolute top-1/2 right-[25%] -translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] border-[1px] border-dashed border-[var(--purple-primary)]/20 rounded-full animate-[spin_60s_linear_infinite]" />
        <div className="absolute top-1/2 right-[25%] -translate-y-1/2 -translate-x-1/2 w-[450px] h-[450px] border-[1px] border-[var(--purple-soft)]/20 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
        <div className="absolute top-1/2 right-[25%] -translate-y-1/2 -translate-x-1/2 w-[300px] h-[300px] border-[2px] border-[var(--purple-primary)]/10 rounded-full" />
      </div>

      <div className="max-w-[90vw] mx-auto relative z-10 w-full grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="flex flex-col items-start pt-10 xl:pt-0">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-[var(--glass-border)] shadow-sm mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span className="text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider">Available for opportunities</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-2 text-[var(--text-secondary)] font-medium text-lg"
          >
            Hi, I'm
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black font-heading mb-4 text-[var(--text-deep)] tracking-tight drop-shadow-sm"
          >
            {PERSONAL_INFO.brand}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradient-primary mb-6 tracking-tight"
          >
            {PERSONAL_INFO.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-[var(--text-secondary)] text-lg md:text-xl leading-relaxed max-w-xl mb-10 font-medium"
          >
            {PERSONAL_INFO.heroTagline}
            <br className="hidden md:block" />
            <span className="text-[var(--text-muted)] text-base md:text-lg mt-3 block">
              {PERSONAL_INFO.shortIntro.split('—')[0]}
            </span>
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4 mb-12"
          >
            <a 
              href="#projects"
              className="px-8 py-4 rounded-xl bg-[var(--purple-primary)] text-white font-bold hover:bg-[var(--purple-bright)] transition-all shadow-lg shadow-[var(--accent-glow)] hover:shadow-xl hover:-translate-y-0.5"
            >
              View Projects
            </a>
            <a 
              href="#contact"
              className="px-8 py-4 rounded-xl bg-[var(--bg-card)] text-[var(--text-deep)] font-bold border border-[var(--glass-border)] hover:border-[var(--purple-soft)] transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center gap-5"
          >
            <div className="flex gap-4">
              <a 
                href={PERSONAL_INFO.github}
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-[var(--bg-card)] border border-[var(--glass-border)] text-[var(--text-deep)] hover:bg-[var(--purple-primary)] hover:text-white hover:border-[var(--purple-primary)] transition-all shadow-sm font-bold group"
              >
                GH
              </a>
              <a 
                href={PERSONAL_INFO.linkedin}
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-[var(--bg-card)] border border-[var(--glass-border)] text-[var(--text-deep)] hover:bg-[var(--purple-primary)] hover:text-white hover:border-[var(--purple-primary)] transition-all shadow-sm font-bold group"
              >
                IN
              </a>
            </div>
            <a href={PERSONAL_INFO.leetcode} target="_blank" rel="noreferrer" className="text-[var(--text-muted)] hover:text-[var(--purple-primary)] transition-colors p-2 bg-[var(--bg-card)] rounded-full hover:bg-white border border-[var(--glass-border)] hover:border-[var(--purple-soft)]">
              <Code2 className="w-5 h-5" />
            </a>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="text-[var(--text-muted)] hover:text-[var(--purple-primary)] transition-colors p-2 bg-[var(--bg-card)] rounded-full hover:bg-white border border-[var(--glass-border)] hover:border-[var(--purple-soft)]">
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        {/* Right Content - Premium Developer Technology Ecosystem */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative hidden xl:flex items-center justify-center h-[600px] perspective-1000"
        >
          {/* Central Glassmorphic Workstation */}
          <motion.div 
            animate={{ rotateY: [-2, 2, -2], rotateX: [1, -1, 1], y: [-5, 5, -5] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full max-w-[420px] aspect-[4/3] z-20"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="absolute inset-0 bg-white/30 dark:bg-black/10 backdrop-blur-2xl rounded-2xl border border-[var(--glass-border)] shadow-[0_20px_60px_rgba(76,36,156,0.15)] flex flex-col overflow-hidden">
              {/* Window Header */}
              <div className="h-10 border-b border-[var(--glass-border)] bg-white/20 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-400 shadow-sm" />
                <div className="w-3 h-3 rounded-full bg-amber-400 shadow-sm" />
                <div className="w-3 h-3 rounded-full bg-emerald-400 shadow-sm" />
                <div className="ml-4 flex-1 flex justify-center">
                  <span className="text-[10px] font-mono font-bold text-[var(--text-muted)] bg-white/30 px-3 py-1 rounded-md">
                    workspace.tsx
                  </span>
                </div>
              </div>
              
              {/* Code Interface */}
              <div className="flex-1 p-5 font-mono text-sm flex flex-col gap-3 relative overflow-hidden bg-gradient-to-br from-white/10 to-[var(--bg-card)]/50">
                
                {/* Abstract Code Lines */}
                <div className="flex items-center gap-3">
                  <span className="text-[var(--text-muted)]/50 text-xs">1</span>
                  <div className="w-32 h-3 bg-[var(--purple-soft)]/30 rounded" />
                  <div className="w-16 h-3 bg-[var(--purple-primary)]/30 rounded" />
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[var(--text-muted)]/50 text-xs">2</span>
                  <div className="w-8 h-3" />
                  <div className="w-24 h-3 bg-emerald-400/30 rounded" />
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[var(--text-muted)]/50 text-xs">3</span>
                  <div className="w-8 h-3" />
                  <div className="font-bold text-[var(--purple-deep)] text-lg">&lt;SudhakAR /&gt;</div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[var(--text-muted)]/50 text-xs">4</span>
                  <div className="w-16 h-3" />
                  <div className="w-40 h-3 bg-[var(--text-secondary)]/20 rounded" />
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[var(--text-muted)]/50 text-xs">5</span>
                  <div className="w-16 h-3" />
                  <div className="w-20 h-3 bg-blue-400/30 rounded" />
                </div>

                {/* Data Visuals embedded in code */}
                <div className="mt-auto pt-4 border-t border-[var(--glass-border)] flex items-end justify-between px-2">
                  {[40, 70, 45, 90, 65, 80].map((height, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ duration: 1.5, delay: 0.5 + i * 0.1 }}
                      className="w-8 bg-gradient-to-t from-[var(--purple-primary)] to-[var(--purple-soft)] rounded-t-sm opacity-80"
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating Technology Ecosystem Cards */}
          
          {/* Spring Boot / Backend */}
          <motion.div
            animate={{ y: [-15, 15, -15] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -left-12 z-30"
          >
            <div className="glass-card px-4 py-3 rounded-2xl flex items-center gap-3 shadow-[0_8px_24px_rgba(109,53,217,0.15)] border border-[var(--purple-soft)]/30 backdrop-blur-xl bg-white/70">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-400/20 to-emerald-500/20 flex items-center justify-center text-emerald-600">
                <Server className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[13px] font-black text-[var(--text-deep)]">Spring Boot</div>
                <div className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-wider">Backend Engine</div>
              </div>
            </div>
          </motion.div>

          {/* React / Frontend */}
          <motion.div
            animate={{ x: [-10, 10, -10], y: [-5, 5, -5] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-1/4 -right-16 z-30"
          >
            <div className="glass-card px-4 py-3 rounded-2xl flex items-center gap-3 shadow-[0_8px_24px_rgba(109,53,217,0.15)] border border-[var(--purple-soft)]/30 backdrop-blur-xl bg-white/70">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 flex items-center justify-center text-blue-600">
                <Layout className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[13px] font-black text-[var(--text-deep)]">React</div>
                <div className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-wider">Frontend UI</div>
              </div>
            </div>
          </motion.div>

          {/* OpenAI / AI Integration */}
          <motion.div
            animate={{ y: [15, -15, 15], x: [5, -5, 5] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-1/4 -left-20 z-30"
          >
            <div className="glass-card px-4 py-3 rounded-2xl flex items-center gap-3 shadow-[0_8px_24px_rgba(109,53,217,0.15)] border border-[var(--purple-soft)]/30 backdrop-blur-xl bg-white/70">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--purple-primary)]/20 to-[var(--purple-bright)]/20 flex items-center justify-center text-[var(--purple-primary)]">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[13px] font-black text-[var(--text-deep)]">AI Integration</div>
                <div className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-wider">OpenAI API</div>
              </div>
            </div>
          </motion.div>

          {/* MySQL / Database */}
          <motion.div
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute -bottom-8 right-0 z-30"
          >
            <div className="glass-card px-4 py-3 rounded-2xl flex items-center gap-3 shadow-[0_8px_24px_rgba(109,53,217,0.15)] border border-[var(--purple-soft)]/30 backdrop-blur-xl bg-white/70">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400/20 to-orange-500/20 flex items-center justify-center text-orange-600">
                <Database className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[13px] font-black text-[var(--text-deep)]">MySQL</div>
                <div className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-wider">Database</div>
              </div>
            </div>
          </motion.div>

          {/* GitHub / Version Control */}
          <motion.div
            animate={{ x: [8, -8, 8], rotate: [-2, 2, -2] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -top-12 right-12 z-10"
          >
            <div className="glass-card px-4 py-3 rounded-2xl flex items-center gap-3 shadow-[0_4px_16px_rgba(0,0,0,0.05)] border border-white/50 backdrop-blur-xl bg-white/40 scale-90">
              <div className="w-8 h-8 rounded-lg bg-slate-800/10 flex items-center justify-center text-slate-700">
                <GitBranch className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] font-black text-[var(--text-deep)]">GitHub</div>
                <div className="text-[9px] font-bold text-[var(--text-muted)] uppercase tracking-wider">Version Control</div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};
