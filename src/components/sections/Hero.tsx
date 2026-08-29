import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, MapPin, Download, Code, Sparkles, Terminal, Play, Check } from 'lucide-react';
import { PERSONAL_INFO, HERO_STATS } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';
import { TiltCard } from '../ui/TiltCard';
import { soundFx } from '../../utils/soundEffects';
import confetti from 'canvas-confetti';

interface HeroProps {
  onOpenResume: () => void;
}

const CODE_SNIPPETS = {
  java: `// ☕ Spring Boot REST Service
@RestController
@RequestMapping("/api/v1/sudhakar")
public class DeveloperEngine {

    @GetMapping("/status")
    public ResponseEntity<EngineStatus> getStatus() {
        return ResponseEntity.ok(new EngineStatus(
            "SUDHAKAR", 
            "Full Stack & AI Engineer", 
            List.of("Spring Boot", "React", "MySQL", "OpenAI"),
            "Building high-impact software solutions"
        ));
    }
}`,
  react: `// ⚛️ React TypeScript Frontend Component
import { useState } from 'react';
import { motion } from 'framer-motion';

export const InteractiveApp: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'AI' | 'FullStack'>('AI');
  
  return (
    <motion.div whileHover={{ scale: 1.02 }} className="p-6 rounded-2xl bg-white shadow-xl">
      <h3 className="font-extrabold text-indigo-900">Sudhakar Stack Engine</h3>
      <p className="text-slate-600 text-sm font-semibold">Transforming complex problems into solutions.</p>
    </motion.div>
  );
};`,
  ai: `// 🤖 OpenAI / Web Speech API Engine
import { OpenAI } from 'openai';

const aiAgent = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function evaluateCandidate(response: string) {
  const prompt = \`Analyze interview candidate response: "\${response}"\`;
  const completion = await aiAgent.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "system", content: "Evaluate clarity, technical accuracy & depth." }]
  });
  return completion.choices[0].message.content;
}`
};

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [activeTab, setActiveTab] = useState<'java' | 'react' | 'ai'>('java');
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    soundFx.playPop();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleProjectsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    soundFx.playPop();
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const triggerConfetti = () => {
    soundFx.playChime();
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#4f46e5', '#6366f1', '#7c3aed']
    });
  };

  const copySnippet = () => {
    navigator.clipboard.writeText(CODE_SNIPPETS[activeTab]);
    setCopiedSnippet(true);
    soundFx.playPop();
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden z-10 bg-[#faf8ff] dark:bg-[#0f091f]">
      {/* Dynamic Background Gradients & Mesh */}
      <div className="absolute inset-0 bg-dots-lavender opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 left-8 w-96 h-96 bg-[#e0e7ff]/60 dark:bg-purple-900/30 rounded-full blur-3xl pointer-events-none animate-pulse-glow-soft" />
      <div className="absolute bottom-10 right-8 w-[34rem] h-[34rem] bg-[#ede5ff]/60 dark:bg-indigo-900/30 rounded-full blur-3xl pointer-events-none animate-pulse-glow-soft" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Brand, Title, Tagline, Actions (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white dark:bg-[#1e1b4b] border border-[#6366f1]/20 shadow-sm backdrop-blur-md"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-xs font-mono text-[#1e1b4b] dark:text-purple-200 font-bold">
                Open for Full-Stack & AI Engineering Roles
              </span>
              <span className="text-[#4f46e5]">|</span>
              <span className="text-xs font-mono text-[#4f46e5] dark:text-[#a78bfa] flex items-center gap-1 font-bold">
                <MapPin className="w-3.5 h-3.5 text-[#4f46e5]" />
                {PERSONAL_INFO.location.split(',')[0]}, India
              </span>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-1">
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-lg font-mono text-[#1e1b4b] dark:text-[#d4cbe5] font-extrabold tracking-wider block"
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
                <h2 className="text-xl sm:text-2xl font-mono text-[#4f46e5] dark:text-[#c4b5fd] font-extrabold uppercase tracking-wider">
                  {PERSONAL_INFO.title}
                </h2>
                <span className="w-16 h-[2.5px] bg-gradient-to-r from-[#4f46e5] to-transparent rounded-full" />
              </motion.div>
            </div>

            {/* Signature Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg sm:text-2xl font-extrabold text-[#1e1b4b] dark:text-white font-heading leading-snug border-l-4 border-[#4f46e5] pl-4 py-1"
            >
              "{PERSONAL_INFO.heroTagline}"
            </motion.p>

            {/* Short Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-sm sm:text-base text-[#334155] dark:text-[#d4cbe5] max-w-2xl leading-relaxed font-normal"
            >
              {PERSONAL_INFO.shortIntro}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap items-center gap-3.5 pt-2"
            >
              <a
                href="#projects"
                onClick={handleProjectsClick}
                className="group relative inline-flex items-center gap-2.5 px-6.5 py-3.5 rounded-2xl bg-gradient-to-r from-[#4f46e5] via-[#6366f1] to-[#7c3aed] hover:from-[#4338ca] hover:to-[#4f46e5] text-white font-bold text-sm shadow-md shadow-[#4f46e5]/25 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </a>

              <a
                href="#contact"
                onClick={handleContactClick}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white dark:bg-[#1e1b4b] hover:bg-[#f5f3ff] border border-[#6366f1]/25 text-[#1e1b4b] dark:text-white font-bold text-sm shadow-sm transition-all duration-300 hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4 text-[#4f46e5]" />
                <span>Get in Touch</span>
              </a>

              <button
                onClick={() => {
                  triggerConfetti();
                  onOpenResume();
                }}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-[#eef2ff] dark:bg-[#2e2a72] hover:bg-[#e0e7ff] border border-[#6366f1]/20 text-[#4f46e5] dark:text-[#c4b5fd] font-mono text-xs font-bold transition-all duration-300 hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-[#4f46e5]" />
                <span>Resume PDF</span>
              </button>
            </motion.div>

            {/* Social Profiles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex items-center gap-4 pt-4 border-t border-[#6366f1]/15"
            >
              <span className="text-xs font-mono text-[#64748b] dark:text-[#9f94b8] uppercase tracking-widest font-extrabold">
                Profiles:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundFx.playPop()}
                  className="p-2.5 rounded-2xl bg-white dark:bg-[#1e1b4b] border border-[#6366f1]/15 text-[#1e1b4b] dark:text-white hover:text-[#4f46e5] hover:-translate-y-1 shadow-sm transition-all"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-4.5 h-4.5" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundFx.playPop()}
                  className="p-2.5 rounded-2xl bg-white dark:bg-[#1e1b4b] border border-[#6366f1]/15 text-[#4f46e5] dark:text-[#a78bfa] hover:text-[#4338ca] hover:-translate-y-1 shadow-sm transition-all"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4.5 h-4.5" />
                </a>
                <a
                  href={PERSONAL_INFO.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundFx.playPop()}
                  className="p-2.5 rounded-2xl bg-white dark:bg-[#1e1b4b] border border-[#6366f1]/15 text-amber-600 dark:text-amber-400 hover:-translate-y-1 shadow-sm transition-all"
                  title="LeetCode Profile"
                >
                  <Code className="w-4.5 h-4.5" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: Interactive Multi-Tab Code Playground + 3D Tilt (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none space-y-5">
              
              {/* 3D Tilt Card wrapping code sandbox */}
              <TiltCard className="p-0 border border-[#6366f1]/25 shadow-xl bg-[#1e1b4b] text-white">
                {/* Code Playground Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#17153b] border-b border-[#6366f1]/15">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-400 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
                  </div>

                  {/* Snippet Tabs */}
                  <div className="flex items-center gap-1 p-1 rounded-xl bg-[#2a2663]">
                    <button
                      onClick={() => {
                        setActiveTab('java');
                        soundFx.playPop();
                      }}
                      className={`px-2.5 py-1 text-[10px] font-mono font-bold rounded-lg transition-all ${
                        activeTab === 'java' ? 'bg-[#4f46e5] text-white' : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      Spring Boot
                    </button>
                    <button
                      onClick={() => {
                        setActiveTab('react');
                        soundFx.playPop();
                      }}
                      className={`px-2.5 py-1 text-[10px] font-mono font-bold rounded-lg transition-all ${
                        activeTab === 'react' ? 'bg-[#4f46e5] text-white' : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      React TS
                    </button>
                    <button
                      onClick={() => {
                        setActiveTab('ai');
                        soundFx.playPop();
                      }}
                      className={`px-2.5 py-1 text-[10px] font-mono font-bold rounded-lg transition-all ${
                        activeTab === 'ai' ? 'bg-[#4f46e5] text-white' : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      OpenAI API
                    </button>
                  </div>

                  {/* Copy snippet button */}
                  <button
                    onClick={copySnippet}
                    className="p-1.5 rounded-lg bg-[#2a2663] text-slate-300 hover:text-white transition-colors"
                    title="Copy Snippet"
                  >
                    {copiedSnippet ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Terminal className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Code Body */}
                <div className="p-5 font-mono text-[11px] sm:text-xs leading-relaxed text-[#f8f5ff] overflow-x-auto max-h-[280px]">
                  <pre className="text-slate-200">
                    <code>{CODE_SNIPPETS[activeTab]}</code>
                  </pre>
                </div>

                {/* Footer status */}
                <div className="px-5 py-2.5 bg-[#17153b] border-t border-[#6366f1]/15 flex items-center justify-between text-[10px] font-mono text-[#c4b5fd]">
                  <span className="flex items-center gap-1.5 font-bold text-emerald-300">
                    <Play className="w-3 h-3 fill-current" />
                    Engine Active
                  </span>
                  <span>Sudhakar Architecture</span>
                </div>
              </TiltCard>

              {/* Floating Card: "Passionate About" */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="p-4 rounded-2xl bg-white dark:bg-[#1e1b4b] border border-[#6366f1]/20 shadow-md space-y-2"
              >
                <div className="flex items-center gap-2 text-xs font-bold font-mono text-[#4f46e5] dark:text-[#c4b5fd] uppercase">
                  <Sparkles className="w-4 h-4 text-[#4f46e5]" />
                  Passionate Engineering Pillars
                </div>
                <div className="flex flex-wrap gap-1.5 text-xs font-mono font-bold">
                  <span className="px-2.5 py-1 rounded-xl bg-[#eef2ff] text-[#4f46e5] border border-[#6366f1]/15">
                    AI & LLMs
                  </span>
                  <span className="px-2.5 py-1 rounded-xl bg-[#eef2ff] text-[#4f46e5] border border-[#6366f1]/15">
                    Full Stack Web
                  </span>
                  <span className="px-2.5 py-1 rounded-xl bg-[#eef2ff] text-[#4f46e5] border border-[#6366f1]/15">
                    System Design
                  </span>
                  <span className="px-2.5 py-1 rounded-xl bg-emerald-100 text-emerald-800 border border-emerald-300">
                    Cloud Microservices
                  </span>
                </div>
              </motion.div>

              {/* HERO STATISTICS CARD */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-4 rounded-2xl bg-white dark:bg-[#1e1b4b] border border-[#6366f1]/20 shadow-md">
                {HERO_STATS.map((stat, idx) => (
                  <div key={idx} className="text-center p-2 rounded-xl bg-[#f5f3ff] dark:bg-[#2e2a72]">
                    <span className="text-2xl font-black text-[#4f46e5] dark:text-[#c4b5fd] font-heading block">
                      {stat.value}
                    </span>
                    <span className="text-[11px] font-mono text-[#334155] dark:text-[#d4cbe5] font-bold block">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
