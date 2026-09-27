import React from 'react';
import { Mail } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';
import { personalInfo } from '../data/portfolio';

export const SocialRail = () => {
  return (
    <aside
      aria-label="Social links rail"
      className="hidden xl:flex fixed bottom-0 left-8 z-40 flex-col items-center gap-6"
    >
      <div className="flex flex-col items-center gap-4">
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-slate-400 hover:text-emerald-400 hover:-translate-y-1 transition-all duration-200"
          aria-label="GitHub Profile"
        >
          <Github className="w-5 h-5" />
        </a>
        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-slate-400 hover:text-emerald-400 hover:-translate-y-1 transition-all duration-200"
          aria-label="LinkedIn Profile"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a
          href={`mailto:${personalInfo.email}`}
          className="p-2 text-slate-400 hover:text-emerald-400 hover:-translate-y-1 transition-all duration-200"
          aria-label="Direct Email"
        >
          <Mail className="w-5 h-5" />
        </a>
      </div>

      {/* Connecting vertical line */}
      <div className="w-[1px] h-24 bg-slate-800 dark:bg-slate-800 light:bg-slate-300" />
    </aside>
  );
};

export default SocialRail;
