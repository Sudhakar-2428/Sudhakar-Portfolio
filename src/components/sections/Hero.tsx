import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { ArrowDownRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -150]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#F7F7F5]">
      
      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-black" />
        <div className="absolute left-2/4 top-0 bottom-0 w-px bg-black" />
        <div className="absolute left-3/4 top-0 bottom-0 w-px bg-black" />
      </div>

      <div className="max-w-[90vw] w-full mx-auto relative z-10">
        
        <div className="flex flex-col mb-12">
          <div className="overflow-hidden">
            <motion.h1 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
              className="text-massive text-[#0A0A0A] m-0 p-0 hover-target"
            >
              {PERSONAL_INFO.brand}
            </motion.h1>
          </div>
          
          <div className="overflow-hidden flex justify-end">
            <motion.h1 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
              className="text-massive text-[#0A0A0A] m-0 p-0 flex items-center gap-4 sm:gap-10 hover-target"
            >
              <span className="text-sm md:text-xl font-mono tracking-widest uppercase font-medium max-w-[200px] text-left leading-tight mt-4 hidden md:block">
                Based in <br />
                {PERSONAL_INFO.location.split(',')[0]}
              </span>
              DEVELOPER
            </motion.h1>
          </div>
        </div>

        <motion.div 
          style={{ y: y1 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-[#0A0A0A]/10 pt-8"
        >
          <div className="md:col-span-4 flex items-start text-[#0A0A0A]/60">
            <ArrowDownRight className="w-6 h-6 mr-4 flex-shrink-0" />
            <p className="font-mono text-sm uppercase tracking-widest max-w-xs">
              Scroll to explore selected works and architectural systems
            </p>
          </div>
          
          <div className="md:col-span-8 md:col-start-8">
            <p className="text-xl md:text-3xl text-[#0A0A0A] leading-tight font-medium max-w-2xl">
              {PERSONAL_INFO.heroTagline} {PERSONAL_INFO.shortIntro.split('—')[0]}
            </p>
          </div>
        </motion.div>

      </div>
      
      {/* Absolute floating element for parallax */}
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-20 right-10 w-32 h-32 md:w-64 md:h-64 rounded-full bg-[#E53E3E] mix-blend-multiply blur-3xl opacity-20 pointer-events-none"
      />
    </section>
  );
};
