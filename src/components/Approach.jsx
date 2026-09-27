import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { engineeringPrinciples } from '../data/portfolio';

export const Approach = () => {
  const steps = [
    { num: '01', title: 'Understand', desc: 'Deconstruct the real-world user workflow and problem constraints before writing code.' },
    { num: '02', title: 'Design', desc: 'Plan REST API contracts, database schema relations, and modular component hierarchy.' },
    { num: '03', title: 'Build', desc: 'Implement structured React components, Express REST endpoints, and database models.' },
    { num: '04', title: 'Test', desc: 'Validate API response envelopes, verify authentication guards, and test cross-browser rendering.' },
    { num: '05', title: 'Debug', desc: 'Isolate error stacks, resolve asynchronous race conditions, and fix edge-case bugs.' },
    { num: '06', title: 'Improve', desc: 'Refactor for modularity, index database queries, and optimize performance.' }
  ];

  return (
    <section className="py-20 md:py-28 border-t border-slate-900 dark:border-slate-900 light:border-slate-200 bg-slate-950/40 dark:bg-slate-950/40 light:bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Heading */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="font-mono text-emerald-400 text-sm font-semibold">06.</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
              How I Approach Software
            </h2>
            <div className="h-[1px] bg-slate-800 dark:bg-slate-800 light:bg-slate-200 flex-1 ml-4 max-w-xs" />
          </div>
          <p className="text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-2xl">
            A disciplined engineering process focused on problem clarity, modular system architecture, and iterative validation.
          </p>
        </div>

        {/* 6-Step Mindset Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div
              key={s.num}
              className="p-6 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 space-y-3"
            >
              <span className="text-xs font-mono font-bold text-emerald-400">
                STEP {s.num}
              </span>
              <h3 className="text-lg font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                {s.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed font-sans">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Core Principles Sub-Section */}
        <div className="space-y-6 pt-6">
          <div className="max-w-3xl">
            <h3 className="text-xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
              Core Engineering Principles
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {engineeringPrinciples.map((p, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200 space-y-2"
              >
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{p.title}</span>
                </div>
                <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Approach;
