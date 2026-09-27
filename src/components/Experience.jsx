import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { experience } from '../data/portfolio';

export const Experience = () => {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section id="experience" className="py-20 md:py-28 border-t border-slate-900 dark:border-slate-900 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Heading */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-emerald-400 text-sm font-semibold light:text-emerald-700">02.</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
            Experience & Training
          </h2>
          <div className="h-[1px] bg-slate-800 dark:bg-slate-800 light:bg-slate-200 flex-1 ml-4 max-w-xs" />
        </div>

        {/* Two-Column Résumé Layout with Row Hover Focus */}
        <div className="space-y-6">
          {experience.map((exp, idx) => {
            const isHovered = hoveredIdx === idx;
            const isAnyHovered = hoveredIdx !== null;
            const isDimmed = isAnyHovered && !isHovered;

            return (
              <div
                key={exp.id}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`p-6 sm:p-8 rounded-2xl transition-all duration-300 border ${
                  isHovered
                    ? 'bg-slate-900/90 dark:bg-slate-900/90 light:bg-white border-emerald-500/40 dark:border-emerald-500/40 light:border-emerald-300 shadow-lg'
                    : isDimmed
                    ? 'bg-slate-950/40 dark:bg-slate-950/40 light:bg-slate-50/50 border-slate-800/40'
                    : 'bg-slate-900/50 dark:bg-slate-900/50 light:bg-white border-slate-800/80 dark:border-slate-800/80 light:border-slate-200'
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                  
                  {/* Left Column: Dates (3 cols) */}
                  <div className="md:col-span-3">
                    <span className="text-xs font-mono text-slate-400 dark:text-slate-400 light:text-slate-500 uppercase tracking-wider block">
                      {exp.period}
                    </span>
                    <span className="text-[11px] font-mono text-emerald-400 block mt-1 light:text-emerald-700">
                      {exp.type}
                    </span>
                  </div>

                  {/* Right Column: Company, Role, Description, Tech Badges (9 cols) */}
                  <div className="md:col-span-9 space-y-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                        {exp.role} <span className="text-emerald-400 font-mono light:text-emerald-700">· {exp.company}</span>
                      </h3>
                    </div>

                    <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
                      {exp.summary}
                    </p>

                    {/* Bullet Points */}
                    <ul className="space-y-2 pt-1">
                      {exp.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5 light:text-emerald-700" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Badges */}
                    <div className="pt-3 flex flex-wrap gap-1.5 font-mono text-xs">
                      {exp.technologies.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-0.5 rounded bg-slate-950 dark:bg-slate-950 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 border border-slate-800 dark:border-slate-800 light:border-slate-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Experience;
