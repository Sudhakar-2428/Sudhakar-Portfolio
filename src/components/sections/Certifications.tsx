import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { GlowCard } from '../ui/GlowCard';
import { CERTIFICATIONS_DATA } from '../../data/portfolioData';
import type { CertificationItem } from '../../data/portfolioData';
import { Award, Calendar, ShieldCheck, ArrowRight } from 'lucide-react';

interface CertificationsProps {
  onSelectCert: (cert: CertificationItem) => void;
}

export const Certifications: React.FC<CertificationsProps> = ({ onSelectCert }) => {
  return (
    <section id="certifications" className="relative py-24 bg-[#f8f6ff] z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Verified Competencies"
          title="Certifications & Credentials"
          subtitle="Official technical certifications from Infosys Springboard and Nasscom FutureSkills Prime."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS_DATA.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <GlowCard className="h-full p-6 flex flex-col justify-between group border border-[rgba(91,33,182,0.15)] bg-white dark:bg-[#1b1230] shadow-sm">
                <div className="space-y-4">
                  {/* Provider Header */}
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-[#ede5ff] dark:bg-[#2c1a4d] border border-[rgba(91,33,182,0.2)] text-[#5b21b6]">
                      <Award className="w-5 h-5" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#ede5ff] dark:bg-[#2c1a4d] border border-[rgba(91,33,182,0.2)] text-[11px] font-mono text-[#5b21b6] dark:text-[#c4b5fd] font-extrabold shadow-sm">
                      {cert.provider}
                    </span>
                  </div>

                  {/* Title */}
                  <div>
                    <h3 className="text-lg font-bold text-[#171329] dark:text-white font-heading group-hover:text-[#5b21b6] transition-colors">
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-2 text-xs font-mono text-[#3f3850] dark:text-slate-300 font-bold">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#5b21b6]" />
                        {cert.date}
                      </span>
                      {cert.certId && (
                        <span className="flex items-center gap-1 text-[#065f46] dark:text-emerald-300 font-extrabold">
                          <ShieldCheck className="w-3.5 h-3.5" />
                          ID: {cert.certId}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Skills badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {cert.skillsLearned.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-0.5 rounded-md bg-[#f4f0ff] dark:bg-[#24163d] text-[#171329] dark:text-slate-100 text-[11px] font-mono border border-[rgba(91,33,182,0.12)] font-semibold shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Details Button */}
                <div className="pt-6 mt-6 border-t border-[rgba(91,33,182,0.12)]">
                  <button
                    onClick={() => onSelectCert(cert)}
                    className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#ede5ff] dark:bg-[#2c1a4d] hover:bg-[#e2d5ff] border border-[rgba(91,33,182,0.2)] text-xs font-mono font-extrabold text-[#5b21b6] dark:text-[#c4b5fd] transition-all shadow-sm"
                  >
                    <span>View Verification Dossier</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
