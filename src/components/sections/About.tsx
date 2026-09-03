import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code2, Server, Lightbulb } from 'lucide-react';
import { ABOUT_DATA } from '../../data/portfolioData';

const FEATURE_CARDS = [
  {
    title: "AI & Intelligent Systems",
    icon: <Brain className="w-6 h-6" />,
    description: "Integrating LLMs and intelligent APIs to create smart applications."
  },
  {
    title: "Full Stack Development",
    icon: <Code2 className="w-6 h-6" />,
    description: "Building responsive, modern, and accessible web interfaces."
  },
  {
    title: "Backend Engineering",
    icon: <Server className="w-6 h-6" />,
    description: "Designing robust APIs and scalable database architectures."
  },
  {
    title: "Problem Solving",
    icon: <Lightbulb className="w-6 h-6" />,
    description: "Turning complex challenges into elegant, efficient solutions."
  }
];

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-24 z-10 overflow-hidden">
      {/* Background Atmosphere - Cooler Lavender */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[var(--bg-page)] via-[var(--bg-secondary)]/50 to-[var(--bg-page)] opacity-80" />
      <div className="absolute top-1/4 -right-[10%] w-[400px] h-[400px] bg-[#BCC2ED]/20 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMzMsIDI2LCA1MCwgMC4wNSkiLz48L3N2Zz4=')] opacity-50 -z-10" />

      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[var(--purple-soft)]/10 to-transparent pointer-events-none" />
      <motion.div 
        animate={{ rotate: -180, scale: [1, 1.1, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-gradient-to-tr from-[var(--purple-soft)]/20 to-[var(--purple-primary)]/10 blur-3xl opacity-50 pointer-events-none"
      />

      <div className="max-w-[90vw] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
          
          {/* Left: Large Typography */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-[var(--purple-soft)]" />
                <span className="text-[var(--purple-primary)] font-mono text-sm tracking-widest uppercase font-bold">
                  Discover More
                </span>
              </div>
              <h2 className="text-6xl md:text-8xl font-bold font-heading text-[var(--text-deep)] tracking-tighter leading-none mb-6">
                ABOUT<br/>ME.
              </h2>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold font-heading text-[var(--text-deep)] mb-6 leading-tight"
              >
                Building digital products, brands, and experience.
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg text-[var(--text-secondary)] font-medium max-w-sm"
              >
                Passionate about bridging the gap between design and engineering.
              </motion.p>
            </motion.div>
          </div>

          {/* Right: Intro & Feature Cards */}
          <div className="lg:col-span-7 flex flex-col gap-12">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card rounded-3xl p-8 md:p-10 shadow-sm border border-[var(--glass-border)] hover:border-[#A78BFA] transition-all duration-300 relative overflow-hidden group"
            >
              {/* Hover Background Shift */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-[#F5F1FF]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-[var(--text-deep)] mb-6 font-heading">
                A brief introduction
              </h3>
              <p className="text-[var(--text-secondary)] font-medium text-lg leading-relaxed mb-6">
                {ABOUT_DATA.bio}
              </p>
              <div className="flex flex-wrap gap-3">
                {ABOUT_DATA.currentlyInterestedIn.slice(0, 3).map((item, i) => (
                  <span key={i} className="px-4 py-2 bg-white/70 rounded-full text-sm font-bold text-[var(--purple-primary)] border border-[var(--glass-border)] shadow-sm">
                    {item}
                  </span>
                ))}
              </div>
              </div>
            </motion.div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {FEATURE_CARDS.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
                  className="glass-card p-8 rounded-3xl group border border-[var(--glass-border)] hover:border-[#A78BFA] transition-all duration-300 relative overflow-hidden"
                >
                  {/* Hover Background Shift */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-[#F5F1FF]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-[var(--purple-soft)]/10 text-[var(--purple-primary)] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[var(--purple-primary)] group-hover:text-white transition-all duration-300">
                    {card.icon}
                  </div>
                  <h4 className="text-xl font-bold text-[var(--text-deep)] mb-3 font-heading group-hover:text-[var(--purple-primary)] transition-colors">
                    {card.title}
                  </h4>
                  <p className="text-[var(--text-secondary)] font-medium leading-relaxed text-sm">
                    {card.description}
                  </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
