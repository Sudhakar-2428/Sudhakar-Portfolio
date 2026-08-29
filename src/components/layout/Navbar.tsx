import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal, Download, Search, Volume2, VolumeX } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { soundFx } from '../../utils/soundEffects';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

interface NavbarProps {
  onOpenResume: () => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPos = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const nextState = !soundEnabled;
    setSoundEnabled(nextState);
    soundFx.enabled = nextState;
    if (nextState) soundFx.playChime();
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    soundFx.playPop();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-2.5 bg-white/90 backdrop-blur-xl border-b border-[#6366f1]/15 shadow-sm'
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* LEFT: Logo & Brand */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center gap-3 cursor-pointer"
          >
            <motion.div
              whileHover={{ scale: 1.08, rotate: [0, -4, 4, 0] }}
              whileTap={{ scale: 0.95 }}
              className="relative w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#4f46e5] via-[#6366f1] to-[#7c3aed] p-[1px] shadow-md shadow-[#4f46e5]/25"
            >
              <div className="w-full h-full bg-[#4f46e5] rounded-[15px] flex items-center justify-center">
                <span className="font-black text-xl text-white font-heading">
                  {PERSONAL_INFO.monogram}
                </span>
              </div>
            </motion.div>

            <div className="flex flex-col">
              <span className="font-extrabold text-lg tracking-tight text-[#1e1b4b] font-heading group-hover:text-[#4f46e5] transition-colors">
                {PERSONAL_INFO.brand}
              </span>
              <span className="text-[10px] font-mono tracking-wider text-[#4f46e5] uppercase -mt-1 font-bold flex items-center gap-1">
                <Terminal className="w-2.5 h-2.5" />
                {PERSONAL_INFO.title}
              </span>
            </div>
          </a>

          {/* CENTER: Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#6366f1]/15 shadow-sm">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-3.5 py-1.5 text-xs font-bold tracking-wide rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-[#4f46e5]'
                      : 'text-[#1e1b4b] hover:text-[#4f46e5] hover:-translate-y-0.5'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 bg-[#eef2ff] border border-[#6366f1]/25 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {item.label}
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#4f46e5]" />}
                  </span>
                </a>
              );
            })}
          </nav>

          {/* RIGHT: Actions (Search + Sound + Resume) */}
          <div className="flex items-center gap-2">
            {/* Search Trigger */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-[#6366f1]/20 text-xs font-mono font-bold text-[#1e1b4b] shadow-sm hover:bg-[#f5f3ff]"
              title="Search Portfolio (Cmd+K)"
            >
              <Search className="w-3.5 h-3.5 text-[#4f46e5]" />
              <span className="hidden sm:inline">Search</span>
              <kbd className="hidden sm:inline px-1 py-0.2 text-[10px] rounded bg-slate-100 border border-slate-300 text-slate-600 font-sans">⌘K</kbd>
            </motion.button>

            {/* Sound FX Toggle */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleSound}
              className="p-2 rounded-xl bg-white border border-[#6366f1]/20 text-[#4f46e5] hover:bg-[#f5f3ff] shadow-sm"
              title={soundEnabled ? 'Mute Interaction Sounds' : 'Enable Interaction Sounds'}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4 text-[#4f46e5]" /> : <VolumeX className="w-4 h-4 text-slate-400" />}
            </motion.button>

            {/* Download Resume Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                soundFx.playChime();
                onOpenResume();
              }}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-bold font-mono text-white bg-gradient-to-r from-[#4f46e5] via-[#6366f1] to-[#7c3aed] hover:from-[#4338ca] hover:to-[#4f46e5] rounded-xl transition-all shadow-md shadow-[#4f46e5]/20"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </motion.button>

            {/* Mobile Drawer Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl bg-white border border-[#6366f1]/20 text-[#1e1b4b]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="xl:hidden bg-[#faf8ff]/95 border-b border-[#6366f1]/20 backdrop-blur-2xl overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${
                      isActive
                        ? 'bg-[#eef2ff] text-[#4f46e5] border border-[#6366f1]/20'
                        : 'text-[#1e1b4b] hover:bg-white/80'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#4f46e5]" />}
                  </a>
                );
              })}
              <div className="pt-2 flex items-center gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] text-white font-bold text-sm shadow-md"
                >
                  <Download className="w-4 h-4" />
                  View & Download Resume
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
