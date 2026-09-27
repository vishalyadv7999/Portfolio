import React from 'react';
import { ExternalLink, FolderGit2 } from 'lucide-react';
import { Github } from './SocialIcons';
import { personalInfo, projects } from '../data/portfolio';

export const GitHubSection = () => {
  return (
    <section id="github" className="py-20 md:py-28 border-t border-slate-900 dark:border-slate-900 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Heading */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="font-mono text-emerald-400 text-sm font-semibold">08.</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
              Explore the Code
            </h2>
            <div className="h-[1px] bg-slate-800 dark:bg-slate-800 light:bg-slate-200 flex-1 ml-4 max-w-xs" />
          </div>
          <p className="text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-2xl">
            Explore source code, implementation details and project history in the linked repositories.
          </p>
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="p-6 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 hover:border-emerald-500/40 transition-all flex flex-col justify-between space-y-5"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <FolderGit2 className="w-5 h-5 text-emerald-400" />
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-emerald-400 transition-colors"
                    aria-label={`Open ${proj.title} GitHub repository`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <h3 className="text-base font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                  {proj.title}
                </h3>
                <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 line-clamp-3 leading-relaxed">
                  {proj.tagline}
                </p>
              </div>

              <div className="space-y-4 pt-3 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-100 font-mono text-xs">
                <div className="flex flex-wrap gap-1.5">
                  {proj.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[11px] rounded bg-slate-950 dark:bg-slate-950 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2 text-xs font-semibold rounded-lg bg-slate-950 dark:bg-slate-950 light:bg-slate-100 hover:bg-slate-800 text-slate-200 dark:text-slate-200 light:text-slate-800 border border-slate-800 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Inspect Repository</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Global Profile Bar */}
        <div className="p-6 rounded-2xl bg-slate-900/40 dark:bg-slate-900/40 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-emerald-400">
              <Github className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                Browse Complete GitHub Profile
              </h4>
              <p className="text-xs text-slate-400">
                Explore commit activity, project branches, and open repositories.
              </p>
            </div>
          </div>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-semibold rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-colors shrink-0"
          >
            <span>Visit @vishalyadv7999</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default GitHubSection;
