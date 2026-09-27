import React from 'react';
import { Terminal, Mail, ArrowUp } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';
import { personalInfo } from '../data/portfolio';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-slate-900 dark:border-slate-900 light:border-slate-200 bg-slate-950 dark:bg-slate-950 light:bg-slate-50 text-slate-400 dark:text-slate-400 light:text-slate-600 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 light:text-emerald-700">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <span className="font-sans font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 text-sm block">
                {personalInfo.name}
              </span>
              <span className="text-[11px] text-slate-400 light:text-slate-600">
                {personalInfo.title}
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-xs">
            <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
            <a href="#experience" className="hover:text-emerald-400 transition-colors">Experience</a>
            <a href="#work" className="hover:text-emerald-400 transition-colors">Selected Work</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
            <a href="#stack" className="hover:text-emerald-400 transition-colors">Stack</a>
            <a href={personalInfo.resumePath} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">Resume</a>
          </div>

          {/* Social Icons & Scroll to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 dark:bg-slate-900 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 hover:text-emerald-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 dark:bg-slate-900 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 hover:text-emerald-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-lg bg-slate-900 dark:bg-slate-900 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 hover:text-emerald-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 dark:bg-slate-900 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 hover:text-emerald-400 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-slate-900 dark:border-slate-900 light:border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-500">
          <p>© {new Date().getFullYear()} Vishal Yadav. Engineered with React, Vite & Tailwind CSS.</p>
          <p>Delhi NCR, India · IST (UTC+5:30)</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
