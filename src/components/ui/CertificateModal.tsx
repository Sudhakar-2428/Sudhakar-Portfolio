import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, Calendar, CheckCircle2, ShieldCheck } from 'lucide-react';
import type { CertificationItem } from '../../data/portfolioData';

interface CertificateModalProps {
  cert: CertificationItem | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ cert, onClose }) => {
  useEffect(() => {
    if (cert) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [cert]);

  if (!cert) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/60 dark:bg-black/80 backdrop-blur-md"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl bg-[var(--bg-card)] dark:bg-[#1b1230] border border-[rgba(91,33,182,0.2)] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-xl bg-white dark:bg-purple-950 border border-purple-500/20 text-slate-600 dark:text-slate-300 hover:text-purple-700 transition-all shadow-sm"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-700 dark:text-purple-300">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <span className="px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-800 dark:text-purple-300 text-[11px] font-mono font-semibold">
                Verified Credential
              </span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading mt-1">
                {cert.provider}
              </h3>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-white dark:bg-purple-950/60 border border-purple-500/20 shadow-sm space-y-4 mb-6">
            <div>
              <h4 className="text-lg font-bold text-purple-800 dark:text-purple-300 mb-1 font-heading">
                {cert.title}
              </h4>
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-600 dark:text-slate-300 font-semibold">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-purple-600" />
                  Issued: {cert.date}
                </span>
                {cert.certId && (
                  <span className="flex items-center gap-1 text-emerald-700 dark:text-emerald-400 font-bold">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    ID: {cert.certId}
                  </span>
                )}
              </div>
            </div>

            <div className="pt-3 border-t border-purple-500/15">
              <h5 className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 font-bold mb-2">
                Core Competencies Validated
              </h5>
              <div className="flex flex-wrap gap-2">
                {cert.skillsLearned.map((skill) => (
                  <span
                    key={skill}
                    className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-purple-50 dark:bg-purple-900/40 text-slate-800 dark:text-slate-200 text-xs font-mono font-semibold"
                  >
                    <CheckCircle2 className="w-3 h-3 text-purple-600" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-700 to-indigo-600 hover:from-purple-800 hover:to-indigo-700 text-white font-semibold text-xs font-mono shadow-md transition-all"
            >
              Close Details
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
