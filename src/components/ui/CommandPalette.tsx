import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Code2, Rocket, Briefcase, Award, ArrowRight } from 'lucide-react';
import { PROJECTS_DATA, SKILLS_DATA } from '../../data/portfolioData';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (proj: any) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onSelectProject,
}) => {
  const [query, setQuery] = useState('');

  // Cmd+K keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else setQuery('');
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Filter projects & skills
  const matchingProjects = PROJECTS_DATA.filter(
    (p) =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.techStack.all.some((t) => t.toLowerCase().includes(query.toLowerCase()))
  );

  const matchingSkills = SKILLS_DATA.flatMap((cat) => cat.skills).filter((s) =>
    s.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleItemClick = (href: string) => {
    onClose();
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 sm:px-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0f172a]/50 backdrop-blur-md"
        />

        {/* Command Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          transition={{ type: 'spring', duration: 0.3 }}
          className="relative w-full max-w-2xl bg-white dark:bg-[#1e1b4b] border border-[#6366f1]/30 rounded-3xl shadow-2xl overflow-hidden z-10"
        >
          {/* Input Header */}
          <div className="flex items-center px-4 py-3.5 border-b border-[#6366f1]/15 bg-[#faf8ff] dark:bg-[#17153b]">
            <Search className="w-5 h-5 text-[#4f46e5] dark:text-[#a78bfa] shrink-0 mr-3" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects, tech stack, skills, certifications... (e.g. React, Spring Boot, AI)"
              className="w-full bg-transparent text-sm font-sans font-semibold text-[#1e1b4b] dark:text-white placeholder:text-[#64748b] focus:outline-none"
            />
            <button
              onClick={onClose}
              className="p-1 rounded-lg hover:bg-[#eef2ff] text-[#64748b] shrink-0"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Results List */}
          <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4">
            {/* Quick Nav Links */}
            {!query && (
              <div>
                <span className="text-[11px] font-mono uppercase font-bold text-[#64748b] block mb-2 px-2">
                  Quick Navigation
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <button
                    onClick={() => handleItemClick('#projects')}
                    className="p-3 rounded-2xl bg-[#f5f3ff] dark:bg-[#2e2a72] hover:bg-[#eef2ff] border border-[#6366f1]/15 text-left text-xs font-mono font-bold text-[#1e1b4b] dark:text-white flex items-center justify-between"
                  >
                    <span className="flex items-center gap-2">
                      <Rocket className="w-4 h-4 text-[#4f46e5]" />
                      Projects
                    </span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => handleItemClick('#skills')}
                    className="p-3 rounded-2xl bg-[#f5f3ff] dark:bg-[#2e2a72] hover:bg-[#eef2ff] border border-[#6366f1]/15 text-left text-xs font-mono font-bold text-[#1e1b4b] dark:text-white flex items-center justify-between"
                  >
                    <span className="flex items-center gap-2">
                      <Code2 className="w-4 h-4 text-[#4f46e5]" />
                      Skills
                    </span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => handleItemClick('#experience')}
                    className="p-3 rounded-2xl bg-[#f5f3ff] dark:bg-[#2e2a72] hover:bg-[#eef2ff] border border-[#6366f1]/15 text-left text-xs font-mono font-bold text-[#1e1b4b] dark:text-white flex items-center justify-between"
                  >
                    <span className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-[#4f46e5]" />
                      Experience
                    </span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => handleItemClick('#certifications')}
                    className="p-3 rounded-2xl bg-[#f5f3ff] dark:bg-[#2e2a72] hover:bg-[#eef2ff] border border-[#6366f1]/15 text-left text-xs font-mono font-bold text-[#1e1b4b] dark:text-white flex items-center justify-between"
                  >
                    <span className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-[#4f46e5]" />
                      Certs
                    </span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* Projects Match */}
            {matchingProjects.length > 0 && (
              <div>
                <span className="text-[11px] font-mono uppercase font-bold text-[#4f46e5] dark:text-[#a78bfa] block mb-2 px-2">
                  Projects ({matchingProjects.length})
                </span>
                <div className="space-y-1.5">
                  {matchingProjects.map((p) => (
                    <div
                      key={p.id}
                      onClick={() => {
                        onClose();
                        onSelectProject(p);
                      }}
                      className="p-3 rounded-2xl hover:bg-[#f5f3ff] dark:hover:bg-[#2e2a72] cursor-pointer flex items-center justify-between transition-colors border border-transparent hover:border-[#6366f1]/20"
                    >
                      <div>
                        <div className="font-bold text-sm text-[#1e1b4b] dark:text-white">
                          {p.name}
                        </div>
                        <div className="text-xs text-[#4f46e5] font-mono">
                          {p.title}
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-lg bg-[#eef2ff] text-[#4f46e5] text-[11px] font-mono font-bold">
                        View Modal
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Skills Match */}
            {matchingSkills.length > 0 && (
              <div>
                <span className="text-[11px] font-mono uppercase font-bold text-[#4f46e5] dark:text-[#a78bfa] block mb-2 px-2">
                  Skills ({matchingSkills.length})
                </span>
                <div className="flex flex-wrap gap-2 px-2">
                  {matchingSkills.map((s) => (
                    <span
                      key={s.name}
                      onClick={() => handleItemClick('#skills')}
                      className="px-3 py-1.5 rounded-xl bg-[#f5f3ff] dark:bg-[#2e2a72] text-[#1e1b4b] dark:text-white text-xs font-mono font-bold hover:bg-[#4f46e5] hover:text-white cursor-pointer transition-colors"
                    >
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {query && matchingProjects.length === 0 && matchingSkills.length === 0 && (
              <div className="p-8 text-center text-sm text-[#64748b] font-mono">
                No matching results found for "{query}".
              </div>
            )}
          </div>

          {/* Footer instruction */}
          <div className="px-4 py-2.5 bg-[#faf8ff] dark:bg-[#17153b] border-t border-[#6366f1]/15 flex items-center justify-between text-[11px] font-mono text-[#64748b]">
            <span>Press <kbd className="px-1.5 py-0.5 rounded bg-white border border-slate-300 font-bold text-slate-700">ESC</kbd> to exit</span>
            <span className="flex items-center gap-1 text-[#4f46e5] font-bold">
              Sudhakar Portfolio Search Engine
            </span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
