import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal, Sun, Moon, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { useTheme } from '../../context/ThemeContext';

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
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
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
          ? 'py-2.5 bg-white/85 dark:bg-[#0f091f]/85 backdrop-blur-xl border-b border-[rgba(91,33,182,0.15)] shadow-sm'
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
              whileHover={{ scale: 1.06, rotate: [0, -3, 3, 0] }}
              whileTap={{ scale: 0.95 }}
              className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-[#5b21b6] via-[#6d28d9] to-[#7c3aed] p-[1px] shadow-sm shadow-[#5b21b6]/20"
            >
              <div className="w-full h-full bg-[#5b21b6] rounded-[11px] flex items-center justify-center">
                <span className="font-extrabold text-xl text-white font-heading">
                  {PERSONAL_INFO.monogram}
                </span>
              </div>
            </motion.div>

            <div className="flex flex-col">
              <span className="font-extrabold text-lg tracking-tight text-[#171329] dark:text-white font-heading group-hover:text-[#5b21b6] dark:group-hover:text-[#a78bfa] transition-colors">
                {PERSONAL_INFO.brand}
              </span>
              <span className="text-[10px] font-mono tracking-wider text-[#5b21b6] dark:text-[#a78bfa] uppercase -mt-1 font-bold flex items-center gap-1">
                <Terminal className="w-2.5 h-2.5" />
                {PERSONAL_INFO.title}
              </span>
            </div>
          </a>

          {/* CENTER: Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 bg-white/80 dark:bg-[#1b1230]/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[rgba(91,33,182,0.12)] shadow-sm">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-3.5 py-1.5 text-xs font-semibold tracking-wide rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-[#5b21b6] dark:text-[#c4b5fd]'
                      : 'text-[#171329] dark:text-[#d4cbe5] hover:text-[#5b21b6] dark:hover:text-[#c4b5fd] hover:-translate-y-0.5'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 bg-[#ede5ff] dark:bg-[#2c1a4d] border border-[rgba(91,33,182,0.25)] rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {item.label}
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#5b21b6] dark:bg-[#a78bfa]" />}
                  </span>
                </a>
              );
            })}
          </nav>

          {/* RIGHT: Actions */}
          <div className="flex items-center gap-2.5">
            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-white/90 dark:bg-[#1b1230] border border-[rgba(91,33,182,0.15)] text-[#5b21b6] dark:text-[#a78bfa] hover:bg-[#f0e8ff] shadow-sm transition-all"
              aria-label="Toggle Theme"
              title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
            >
              {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-amber-300" />}
            </motion.button>

            {/* Download Resume Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onOpenResume}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold font-mono text-white bg-gradient-to-r from-[#5b21b6] via-[#6d28d9] to-[#7c3aed] hover:from-[#4c1d95] hover:to-[#5b21b6] rounded-xl transition-all shadow-md shadow-[#5b21b6]/20"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </motion.button>

            {/* Mobile Drawer Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl bg-white/90 dark:bg-[#1b1230] border border-[rgba(91,33,182,0.15)] text-[#171329] dark:text-white"
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
            className="xl:hidden bg-[#f4f0ff]/95 dark:bg-[#0f091f]/95 border-b border-[rgba(91,33,182,0.15)] backdrop-blur-2xl overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                      isActive
                        ? 'bg-[#ede5ff] text-[#5b21b6] dark:bg-[#2c1a4d] dark:text-[#c4b5fd] border border-[rgba(91,33,182,0.2)]'
                        : 'text-[#171329] dark:text-white hover:bg-white/80'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#5b21b6]" />}
                  </a>
                );
              })}
              <div className="pt-2 flex items-center gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-[#5b21b6] to-[#7c3aed] text-white font-semibold text-sm shadow-md"
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
