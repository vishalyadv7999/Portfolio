import React from 'react';
import { TrendingUp } from 'lucide-react';
import { projectEvolution } from '../data/portfolio';

export const ProjectEvolution = () => {
  return (
    <div className="pt-10 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 space-y-8">
      <div className="max-w-3xl space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-medium text-emerald-400 bg-emerald-950/40 border border-emerald-800/40">
          <TrendingUp className="w-3.5 h-3.5" />
          <span>TECHNICAL PROGRESSION</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
          Project Evolution: Increasing Architectural Scope
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600">
          Demonstrating architectural growth across successive applications from web fundamentals to real-time event-driven systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative font-mono text-xs">
        {projectEvolution.map((item, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-slate-950/70 dark:bg-slate-950/70 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200 space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 pb-2.5">
                <span className="font-bold px-2 py-0.5 rounded bg-slate-900 text-emerald-400 border border-slate-800 text-[11px]">
                  PHASE {item.step}
                </span>
                <span className="text-[10px] text-slate-400">
                  {item.period}
                </span>
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 font-sans">
                  {item.project}
                </h4>
                <p className="text-[11px] text-emerald-400 font-medium mt-0.5">
                  {item.phase}
                </p>
              </div>

              <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed font-sans">
                {item.focus}
              </p>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 space-y-1">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                Demonstrated Capability:
              </span>
              <p className="text-[11px] text-slate-200 dark:text-slate-200 light:text-slate-800 font-semibold font-sans">
                {item.demonstrates}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectEvolution;
