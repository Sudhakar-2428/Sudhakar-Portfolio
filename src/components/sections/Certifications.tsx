import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, ShieldCheck, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../../data/portfolioData';
import type { CertificationItem } from '../../data/portfolioData';

interface CertificationsProps {
  onSelectCert: (cert: CertificationItem) => void;
}

export const Certifications: React.FC<CertificationsProps> = ({ onSelectCert }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsVisible, setCardsVisible] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth >= 1024) setCardsVisible(3);
      else if (window.innerWidth >= 768) setCardsVisible(2);
      else setCardsVisible(1);
    };
    updateVisible();
    window.addEventListener('resize', updateVisible);
    return () => window.removeEventListener('resize', updateVisible);
  }, []);

  const maxIndex = Math.max(0, CERTIFICATIONS_DATA.length - cardsVisible);

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev();
      else if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [maxIndex]);

  const handleDragEnd = (_e: any, { offset }: any) => {
    const swipeThreshold = 50;
    if (offset.x < -swipeThreshold) {
      handleNext();
    } else if (offset.x > swipeThreshold) {
      handlePrev();
    }
  };

  return (
    <section id="certifications" className="relative py-24 z-10 overflow-hidden">
      {/* Background Atmosphere - Light Lavender */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[var(--bg-page)] via-[var(--bg-secondary)]/50 to-[var(--bg-page)] opacity-80" />
      <div className="absolute bottom-0 left-[20%] w-[500px] h-[500px] bg-[var(--purple-soft)]/10 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-[90vw] mx-auto relative z-20 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-[var(--glass-border)] mb-4 shadow-sm"
            >
              <span className="text-[var(--purple-primary)] font-mono text-xs uppercase tracking-widest font-bold">
                Verified Competencies
              </span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold font-heading text-[var(--text-deep)]"
            >
              Certifications
            </motion.h2>
          </div>

          {/* Navigation Controls */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              aria-label="Previous certificate"
              className="p-3 rounded-xl bg-white border border-[var(--glass-border)] text-[var(--purple-primary)] hover:bg-[var(--purple-soft)]/20 hover:border-[var(--purple-primary)]/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:border-[var(--glass-border)] transition-all shadow-sm"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              aria-label="Next certificate"
              className="p-3 rounded-xl bg-white border border-[var(--glass-border)] text-[var(--purple-primary)] hover:bg-[var(--purple-soft)]/20 hover:border-[var(--purple-primary)]/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:border-[var(--glass-border)] transition-all shadow-sm"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        </div>
      </div>

      <div className="relative w-full max-w-[90vw] mx-auto overflow-hidden">
        
        {/* Left & Right Gradients for smooth fade - positioned inside the container so cards fade at edges */}
        <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-r from-[var(--bg-page)] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-l from-[var(--bg-page)] to-transparent z-10 pointer-events-none" />

        <motion.div 
          ref={containerRef}
          className="flex cursor-grab active:cursor-grabbing py-4"
          drag="x"
          dragDirectionLock
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.1}
          onDragEnd={handleDragEnd}
          style={{ 
            width: `${(CERTIFICATIONS_DATA.length / cardsVisible) * 100}%`,
            touchAction: 'pan-y'
          }}
          animate={{ x: `-${(currentIndex * 100) / CERTIFICATIONS_DATA.length}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {CERTIFICATIONS_DATA.map((cert, idx) => {
            const isVisible = idx >= currentIndex && idx < currentIndex + cardsVisible;
            return (
              <div
                key={cert.id}
                style={{ width: `${100 / CERTIFICATIONS_DATA.length}%` }}
                className="px-3 md:px-4 flex-shrink-0"
              >
                <div 
                  className={`glass-card h-full p-6 md:p-8 flex flex-col justify-between rounded-[2rem] border border-[var(--glass-border)] transition-all duration-500 relative overflow-hidden group ${
                    isVisible ? 'opacity-100 scale-100 shadow-sm hover:shadow-xl hover:border-[#A78BFA]' : 'opacity-40 scale-95 pointer-events-none'
                  }`}
                >
                  
                  {/* Hover Background Shift */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-[#F5F1FF]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  <div className="space-y-6 relative z-10">
                    {/* Provider Header */}
                    <div className="flex items-center justify-between">
                      <div className="p-3 rounded-2xl bg-[var(--purple-soft)]/10 text-[var(--purple-primary)] border border-[var(--glass-border)] group-hover:bg-[var(--purple-primary)] group-hover:text-white transition-all duration-300">
                        <Award className="w-6 h-6" />
                      </div>
                      <span className="px-3 py-1 rounded-full bg-[var(--purple-soft)]/10 border border-[var(--glass-border)] text-[10px] md:text-xs font-mono font-bold text-[var(--purple-primary)] shadow-sm uppercase tracking-wider">
                        {cert.provider}
                      </span>
                    </div>

                    {/* Title */}
                    <div>
                      <h3 className="text-lg md:text-xl font-black text-[var(--text-deep)] font-heading transition-colors leading-tight mb-3">
                        {cert.title}
                      </h3>
                      <div className="flex flex-col gap-2 text-xs md:text-sm font-mono text-[var(--text-secondary)] font-semibold">
                        <span className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-[var(--purple-primary)]" />
                          {cert.date}
                        </span>
                        {cert.certId && (
                          <span className="flex items-center gap-2 text-emerald-600">
                            <ShieldCheck className="w-4 h-4" />
                            ID: {cert.certId}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {cert.skillsLearned.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 md:px-3 py-1 rounded-lg bg-[var(--purple-soft)]/10 text-[var(--text-secondary)] text-[10px] md:text-xs font-mono border border-[var(--glass-border)] font-semibold shadow-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* View Button */}
                  <div className="pt-6 mt-8 border-t border-[var(--glass-border)] relative z-10">
                    <button
                      onClick={() => onSelectCert(cert)}
                      className="w-full flex items-center justify-between px-5 py-3 rounded-xl bg-[var(--purple-soft)]/10 hover:bg-[var(--purple-primary)] hover:text-white border border-[var(--glass-border)] text-sm font-bold text-[var(--purple-primary)] transition-all shadow-sm group/btn"
                    >
                      <span>View Certificate</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
