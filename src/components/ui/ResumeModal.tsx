import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Briefcase, GraduationCap, Mail, Phone, MapPin, Sparkles } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCE_DATA, PROJECTS_DATA, EDUCATION_DATA } from '../../data/portfolioData';
import confetti from 'canvas-confetti';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
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
  }, [isOpen]);

  if (!isOpen) return null;

  const handleDownload = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#7c3aed', '#6d28d9', '#8b5cf6']
    });

    const resumeContent = `
==================================================
${PERSONAL_INFO.brand} - ${PERSONAL_INFO.title}
==================================================
Location: ${PERSONAL_INFO.location}
Phone: ${PERSONAL_INFO.phone}
Email: ${PERSONAL_INFO.email}
GitHub: ${PERSONAL_INFO.github}
LinkedIn: ${PERSONAL_INFO.linkedin}
LeetCode: ${PERSONAL_INFO.leetcode}

OBJECTIVE:
${PERSONAL_INFO.shortIntro}

EXPERIENCE:
BrinarySpot Technologies - Web Development Intern (1 Month)
Project: AI Personalized Learning Platform
Work: Developed interactive modules (Quiz, Coding Sandbox, AI Tutor, Voice-based English practice) using React, Spring Boot, OpenAI API & Web Speech API.

PROJECTS:
1. SmartPoultry - AI-Driven Poultry Farm Management System
   Live: ${PROJECTS_DATA[0].live}
   GitHub: ${PROJECTS_DATA[0].github}
   Stack: Java, Spring Boot, MySQL, JavaScript, HTML5, CSS3, AI Analytics

2. Mock Interview Agent - AI-Powered Interview Platform
   Live: ${PROJECTS_DATA[1].live}
   GitHub: ${PROJECTS_DATA[1].github}
   Stack: React, TypeScript, Spring Boot, PostgreSQL, OpenAI API, Vercel

EDUCATION:
- B.E. Computer & Communication Engineering (2023 - 2027)
  VSB Engineering College, Karur | CGPA: 7.27
- Class XII Higher Secondary (2022 - 2023)
  Ponnu Matriculation Higher Secondary School | Percentage: 78%

ACHIEVEMENTS:
- TCS CodeVita Season 13 Global Rank: 17,216
- IEEE APCIT 2025 Research Paper Presenter: "Lightweight Blockchain Framework for Secure and Privacy-Preserving IoT Systems"
    `.trim();

    const blob = new Blob([resumeContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Sudhakar_Software_Developer_Resume.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/60 dark:bg-black/80 backdrop-blur-md"
        />

        <motion.div
          data-lenis-prevent
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl max-h-[90vh] md:max-h-[85vh] flex flex-col bg-[var(--bg-card)] dark:bg-[#1b1230] border border-[rgba(91,33,182,0.2)] rounded-2xl shadow-2xl z-10 overflow-hidden"
        >
          {/* Header (Fixed) */}
          <div className="flex-shrink-0 p-5 sm:p-8 pb-4 border-b border-purple-500/15 relative z-20 bg-[var(--bg-card)] dark:bg-[#1b1230]">
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 sm:top-8 sm:right-8 p-2 rounded-xl bg-white dark:bg-purple-950 border border-purple-500/20 text-slate-600 dark:text-slate-300 hover:text-purple-700 transition-all shadow-sm z-30"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pr-12">
              <div>
                <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-800 dark:text-purple-300 text-xs font-mono font-semibold mb-2 inline-block">
                  Professional Candidate Dossier
                </span>
                <h2 className="text-2xl font-black text-slate-900 dark:text-white font-heading">
                  {PERSONAL_INFO.name}
                </h2>
                <p className="text-purple-700 dark:text-purple-300 text-sm font-semibold">
                  {PERSONAL_INFO.title}
                </p>
              </div>

              <button
                onClick={handleDownload}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-600 hover:from-purple-800 hover:to-indigo-700 text-white font-semibold text-xs font-mono shadow-md transition-all shrink-0"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </button>
            </div>
          </div>

          {/* Body (Scrollable) */}
          <div 
            className="flex-1 overflow-y-auto overscroll-contain p-5 sm:p-8 touch-pan-y"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            <div className="space-y-6 text-sm text-slate-700 dark:text-slate-200">
              {/* Contact info strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-white dark:bg-purple-950/60 border border-purple-500/20 font-mono text-xs text-slate-600 dark:text-slate-300 shadow-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-purple-600" />
                <span className="truncate">{PERSONAL_INFO.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-purple-600" />
                <span>{PERSONAL_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-purple-600" />
                <span className="truncate">Tamil Nadu, India</span>
              </div>
            </div>

            {/* Summary */}
            <div>
              <h3 className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 font-bold mb-2">
                Executive Profile
              </h3>
              <p className="p-4 rounded-xl bg-white dark:bg-purple-950/40 border border-purple-500/15 leading-relaxed text-slate-700 dark:text-slate-200 font-medium shadow-sm">
                {PERSONAL_INFO.shortIntro}
              </p>
            </div>

            {/* Experience */}
            <div>
              <h3 className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 font-bold mb-2 flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5 text-purple-600" />
                Work Experience
              </h3>
              {EXPERIENCE_DATA.map((exp) => (
                <div key={exp.id} className="p-4 rounded-xl bg-white dark:bg-purple-950/40 border border-purple-500/15 space-y-2 shadow-sm">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-base">{exp.role}</h4>
                      <p className="text-purple-700 dark:text-purple-300 text-xs font-semibold">{exp.company} • {exp.project}</p>
                    </div>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400 font-semibold">{exp.duration}</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">{exp.contribution}</p>
                </div>
              ))}
            </div>

            {/* Projects */}
            <div>
              <h3 className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 font-bold mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                Featured Projects
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PROJECTS_DATA.map((proj) => (
                  <div key={proj.id} className="p-3.5 rounded-xl bg-white dark:bg-purple-950/40 border border-purple-500/15 space-y-1 shadow-sm">
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm">{proj.name}</h4>
                    <p className="text-xs text-purple-700 dark:text-purple-300 font-semibold">{proj.title}</p>
                    <p className="text-[11px] text-slate-600 dark:text-slate-300 line-clamp-2">{proj.solution}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 font-bold mb-2 flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-purple-600" />
                Education
              </h3>
              <div className="space-y-2">
                {EDUCATION_DATA.map((edu, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-white dark:bg-purple-950/40 border border-purple-500/15 flex justify-between items-center text-xs shadow-sm">
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white">{edu.degree}</h4>
                      <p className="text-slate-600 dark:text-slate-300">{edu.institution}</p>
                    </div>
                    <div className="text-right">
                      <span className="font-mono text-purple-700 dark:text-purple-300 font-bold">{edu.score}</span>
                      <p className="text-slate-500 text-[11px]">{edu.period}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </div>

          {/* Footer (Fixed) */}
          <div className="flex-shrink-0 p-5 sm:p-8 pt-4 border-t border-purple-500/15 flex justify-between items-center text-xs font-mono text-slate-500 dark:text-slate-400 font-semibold bg-[var(--bg-card)] dark:bg-[#1b1230]">
            <span>Sudhakar • Software Developer Portfolio</span>
            <button
              onClick={handleDownload}
              className="text-purple-700 dark:text-purple-300 hover:underline flex items-center gap-1"
            >
              Download PDF / TXT
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
