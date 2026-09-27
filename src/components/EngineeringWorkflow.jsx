import React from 'react';
import { Workflow, CheckCircle2 } from 'lucide-react';
import { engineeringWorkflow, engineeringPrinciples } from '../data/portfolio';

export const EngineeringWorkflow = () => {
  return (
    <section className="py-16 md:py-24 border-t border-slate-900 dark:border-slate-900 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section 1: How I Build Software */}
        <div className="space-y-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-medium text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 mb-3">
              <Workflow className="w-3.5 h-3.5" />
              <span>DEVELOPMENT LIFECYCLE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
              How I Build Software Systems
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-400 dark:text-slate-400 light:text-slate-600">
              A structured, modular approach to engineering reliable web applications from problem deconstruction to production verification.
            </p>
          </div>

          {/* 8-Step Lifecycle Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {engineeringWorkflow.map((item) => (
              <div
                key={item.step}
                className="p-5 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 space-y-2.5 hover:border-slate-700 transition-colors"
              >
                <span className="text-xs font-mono font-bold text-brand-400">
                  STAGE {item.step}
                </span>
                <h3 className="text-base font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Core Engineering Principles */}
        <div className="pt-8 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 space-y-8">
          <div className="max-w-3xl">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
              Engineering Principles I Follow
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {engineeringPrinciples.map((principle, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-950/70 dark:bg-slate-950/70 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200 space-y-2"
              >
                <div className="flex items-center gap-2 text-brand-400 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{principle.title}</span>
                </div>
                <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
                  {principle.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default EngineeringWorkflow;
