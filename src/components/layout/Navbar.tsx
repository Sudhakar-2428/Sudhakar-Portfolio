import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

const NAV_ITEMS = [
  { label: 'Works', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

interface NavbarProps {
  onOpenResume: () => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['hero', ...NAV_ITEMS.map((item) => item.href.substring(1))];
      const scrollPos = window.scrollY + window.innerHeight / 2;

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
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-4 bg-[#F7F7F5]/90 backdrop-blur-md'
          : 'py-8 bg-transparent'
      }`}
    >
      <div className="max-w-[90vw] mx-auto">
        <div className="flex items-center justify-between">
          
          {/* Brand */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-2 hover-target text-[#0A0A0A]"
          >
            <div className="w-8 h-8 bg-[#0A0A0A] text-[#F7F7F5] flex items-center justify-center font-bold font-heading text-lg leading-none">
              {PERSONAL_INFO.monogram}
            </div>
            <span className="font-bold text-sm tracking-widest uppercase font-mono">
              {PERSONAL_INFO.brand}
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-12">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative text-xs font-mono uppercase tracking-widest transition-colors duration-300 hover-target ${
                    isActive ? 'text-[#0A0A0A] font-bold' : 'text-[#0A0A0A]/50 hover:text-[#0A0A0A]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute -bottom-2 left-0 right-0 h-px bg-[#0A0A0A]"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-6">
            <button
              onClick={onOpenSearch}
              className="hover-target text-[#0A0A0A] hover:text-[#E53E3E] transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            
            <button
              onClick={onOpenResume}
              className="hidden md:flex hover-target text-[#0A0A0A] hover:text-[#E53E3E] transition-colors items-center gap-2 text-xs font-mono uppercase tracking-widest"
            >
              <FileText className="w-4 h-4" />
              Resume
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden hover-target text-[#0A0A0A]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0A0A0A] text-[#F7F7F5] absolute top-full left-0 right-0 border-t border-[#F7F7F5]/10"
          >
            <div className="flex flex-col px-[5vw] py-8 space-y-6">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-2xl font-medium tracking-tight hover:text-[#E53E3E] transition-colors hover-target"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-6 border-t border-[#F7F7F5]/10">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="flex items-center gap-2 text-sm font-mono uppercase tracking-widest hover-target hover:text-[#E53E3E] transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  Download Resume
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
