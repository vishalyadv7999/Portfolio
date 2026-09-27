import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Terminal } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';
import { useTheme } from '../context/theme';
import { personalInfo } from '../data/portfolio';

export const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { num: '01', name: 'Work', href: '#work' },
    { num: '02', name: 'Experience', href: '#experience' },
    { num: '03', name: 'About', href: '#about' },
    { num: '04', name: 'Stack', href: '#stack' },
    { num: '05', name: 'Education', href: '#education' },
    { num: '06', name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    handleScroll();
    // IntersectionObserver for tracking active sections
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((sec) => observer.observe(sec));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      element.setAttribute('tabindex', '-1');
      element.focus({ preventScroll: true });
      history.replaceState(null, '', href);
      window.scrollTo({
        top: offsetPosition,
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/90 dark:bg-slate-950/90 light:bg-white/90 backdrop-blur-md border-b border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 py-3 shadow-lg'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Personal Brand */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-2.5 font-mono font-bold text-base sm:text-lg tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-900 group"
          >
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/20 group-hover:border-emerald-500/50 transition-colors light:text-emerald-700">
              <Terminal className="w-4 h-4" />
            </div>
            <span>
              vishal<span className="text-emerald-400 light:text-emerald-700">.dev</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-5 xl:gap-7 font-mono text-xs">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`transition-colors flex items-center gap-1.5 ${
                    isActive
                      ? 'text-emerald-400 light:text-emerald-700 font-semibold'
                      : 'text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-slate-100 dark:hover:text-slate-100 light:hover:text-slate-900'
                  }`}
                >
                  <span className="text-emerald-400/80 light:text-emerald-700 text-[10px]">{link.num}.</span>
                  <span>{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Action Items */}
          <div className="flex items-center gap-1.5 sm:gap-3">
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
              aria-pressed={!isDark}
              className="p-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-900 dark:hover:bg-slate-900 light:hover:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-200 transition-colors light:text-slate-600"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400 light:text-amber-700" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            {/* Resume Button */}
            <a
              href={personalInfo.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              download="Vishal_Yadav_Resume.pdf"
              className="px-2.5 sm:px-4 py-2 text-xs font-mono font-semibold rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 hover:border-emerald-500/60 transition-all light:text-emerald-700"
            >
              Resume
            </a>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              onKeyDown={(event) => { if (event.key === "Escape") setIsOpen(false); }}
              className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-200 light:text-slate-600"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div onKeyDown={(event) => { if (event.key === "Escape") { setIsOpen(false); document.querySelector('[aria-controls="mobile-navigation"]')?.focus(); } }} id="mobile-navigation" className="max-h-[calc(100dvh-5rem)] overflow-y-auto overscroll-contain lg:hidden bg-slate-950/95 dark:bg-slate-950/95 light:bg-white/95 backdrop-blur-xl border-b border-slate-800 dark:border-slate-800 light:border-slate-200 px-6 py-6 space-y-4 shadow-2xl">
          <div className="space-y-2 font-mono text-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block py-2 text-slate-300 dark:text-slate-300 light:text-slate-800 hover:text-emerald-400"
              >
                <span className="text-emerald-400 text-xs mr-2 light:text-emerald-700">{link.num}.</span>
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-slate-800 dark:border-slate-800 light:border-slate-200 flex flex-wrap gap-3 items-center justify-between">
            <span className="text-xs font-mono text-slate-400 light:text-slate-600">{personalInfo.email}</span>
            <div className="flex gap-3">
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white light:text-slate-600" aria-label="GitHub">
                <Github className="w-4 h-4" />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white light:text-slate-600" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

