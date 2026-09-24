import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FileText, 
  Menu, 
  X, 
  Send, 
  Sun,
  Moon
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenVercelGuide?: () => void;
  onOpenPhotoModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenVercelGuide, onOpenPhotoModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { name: string; href: string; badge?: string }[] = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0b0f19]/80 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#"
          id="brand-logo"
          aria-label="Neha Sain Portfolio"
          className="group flex items-center gap-2 text-left focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg p-1"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-blue-600 to-cyan-400 p-[1px] shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-[#0b0f19] rounded-[11px] flex items-center justify-center font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-300 text-base select-none">
              <span
                onClick={(e) => {
                  if (onOpenPhotoModal) {
                    e.preventDefault();
                    e.stopPropagation();
                    onOpenPhotoModal();
                  }
                }}
                className="cursor-pointer hover:text-indigo-400 active:scale-95 transition-colors"
                title=""
              >
                N
              </span>
              <span>S</span>
            </div>
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border-2 border-[#0b0f19]"></span>
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links with Apple-grade Dynamic Island Pill & Sliding Glass Highlight */}
        <nav
          onMouseLeave={() => setHoveredTab(null)}
          className="hidden lg:flex items-center gap-0.5 bg-slate-900/60 dark:bg-slate-900/60 border border-white/10 rounded-full p-1 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.36)]"
        >
          {navLinks.map((link) => {
            const isHovered = hoveredTab === link.name;
            const hasAnyHover = hoveredTab !== null;
            return (
              <a
                key={link.name}
                href={link.href}
                id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                onMouseEnter={() => setHoveredTab(link.name)}
                className={`relative px-4 py-1.5 text-xs font-medium rounded-full flex items-center gap-1.5 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] select-none ${
                  isHovered
                    ? 'text-white scale-[1.02]'
                    : hasAnyHover
                    ? 'text-slate-400 opacity-60 hover:opacity-100'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {/* Apple sliding active indicator with spring physics */}
                {isHovered && (
                  <motion.div
                    layoutId="apple-nav-hover-pill"
                    className="absolute inset-0 rounded-full bg-white/[0.14] border border-white/[0.12] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_4px_16px_rgba(0,0,0,0.25)] backdrop-blur-md -z-10"
                    transition={{
                      type: 'spring',
                      stiffness: 450,
                      damping: 32,
                    }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
                {link.badge && (
                  <span className="relative z-10 px-1.5 py-0.2 text-[9px] font-mono font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 rounded-full">
                    {link.badge}
                  </span>
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="hidden md:flex items-center gap-2">
          {/* High-Contrast Theme Toggle - Icon only */}
          <button
            type="button"
            id="nav-theme-toggle-btn"
            onClick={toggleTheme}
            className={`flex items-center justify-center p-2 rounded-xl border transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-sm hover:scale-105 active:scale-95 ${
              theme === 'light'
                ? 'bg-indigo-50 border-indigo-200 text-indigo-800 hover:bg-indigo-100 hover:shadow-indigo-500/20'
                : 'bg-slate-800/80 border-slate-700/80 text-slate-200 hover:text-white hover:bg-slate-700/90 hover:border-slate-600'
            }`}
            title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? (
              <Moon className="w-4 h-4 text-indigo-700" />
            ) : (
              <Sun className="w-4 h-4 text-amber-400" />
            )}
          </button>

          <button
            type="button"
            id="nav-resume-btn"
            onClick={onOpenResume}
            className="group relative overflow-hidden flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/80 rounded-xl transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-sm hover:border-slate-500 hover:text-white hover:scale-[1.03] active:scale-[0.97]"
          >
            <FileText className="w-3.5 h-3.5 text-indigo-400 group-hover:scale-110 transition-transform duration-300" />
            <span>Resume</span>
          </button>

          <a
            href="#contact"
            id="nav-contact-cta"
            className="group relative overflow-hidden flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-blue-600 hover:from-indigo-500 hover:to-blue-500 rounded-xl transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-md shadow-indigo-500/25 hover:shadow-indigo-500/45 hover:scale-[1.03] active:scale-[0.97]"
          >
            <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out pointer-events-none" />
            <Send className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            <span>Hire Me</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-xl border border-white/10 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-b border-white/10 bg-[#0e1424]/95 backdrop-blur-2xl px-5 pt-3 pb-6 shadow-2xl"
          >
            <div className="flex flex-col gap-2 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/[0.08] active:scale-[0.98] transition-all duration-200 rounded-xl flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  {link.badge && (
                    <span className="px-2 py-0.5 text-[10px] font-mono bg-indigo-500/20 text-indigo-300 rounded-md">
                      {link.badge}
                    </span>
                  )}
                </a>
              ))}

              <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-2.5">
                {/* Mobile Theme Toggle */}
                <button
                  type="button"
                  id="mobile-theme-toggle-btn"
                  onClick={() => {
                    toggleTheme();
                  }}
                  className={`w-full flex items-center justify-center py-2.5 text-xs font-semibold rounded-xl border transition-colors ${
                    theme === 'light'
                      ? 'bg-indigo-50 border-indigo-200 text-indigo-900'
                      : 'bg-slate-800 text-slate-200 border-slate-700'
                  }`}
                  aria-label="Toggle Theme"
                >
                  {theme === 'light' ? (
                    <Moon className="w-5 h-5 text-indigo-700" />
                  ) : (
                    <Sun className="w-5 h-5 text-amber-400" />
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-slate-200 bg-slate-800 rounded-xl border border-slate-700"
                >
                  <FileText className="w-4 h-4 text-indigo-400" />
                  <span>Resume</span>
                </button>

                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-white bg-indigo-600 rounded-xl"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Contact Neha Sain</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
