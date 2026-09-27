import React from 'react';
import { GraduationCap, Gamepad2 } from 'lucide-react';
import { education, extracurricular } from '../data/portfolio';

export const Education = () => {
  return (
    <section id="education" className="py-16 md:py-24 border-t border-slate-900 dark:border-slate-900 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-emerald-400 text-sm font-semibold light:text-emerald-700">05.</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
            Education & Beyond Code
          </h2>
          <div className="h-[1px] bg-slate-800 dark:bg-slate-800 light:bg-slate-200 flex-1 ml-4 max-w-xs" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Education Card (7 cols) */}
          <div className="md:col-span-7 p-6 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 space-y-4">
            <div className="flex items-start justify-between gap-4 border-b border-slate-800/80 dark:border-slate-800/80 light:border-slate-100 pb-3">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-emerald-400 light:text-emerald-700 light:bg-slate-100">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                    {education.degree}
                  </h3>
                  <p className="text-xs font-mono text-emerald-400 light:text-emerald-700">
                    {education.institution}
                  </p>
                </div>
              </div>
              <div className="text-right font-mono text-xs">
                <span className="text-slate-400 block light:text-slate-600">{education.period}</span>
                <span className="text-emerald-400 font-bold light:text-emerald-700">GPA: {education.gpa}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 font-mono text-xs pt-1">
              <span className="px-2 py-0.5 bg-slate-950 dark:bg-slate-950 light:bg-slate-100 rounded border border-slate-800">Data Structures & Algorithms</span>
              <span className="px-2 py-0.5 bg-slate-950 dark:bg-slate-950 light:bg-slate-100 rounded border border-slate-800">Object-Oriented Programming</span>
              <span className="px-2 py-0.5 bg-slate-950 dark:bg-slate-950 light:bg-slate-100 rounded border border-slate-800">DBMS & SQL</span>
              <span className="px-2 py-0.5 bg-slate-950 dark:bg-slate-950 light:bg-slate-100 rounded border border-slate-800">Operating Systems</span>
              <span className="px-2 py-0.5 bg-slate-950 dark:bg-slate-950 light:bg-slate-100 rounded border border-slate-800">Computer Networks</span>
            </div>
          </div>

          {/* Beyond Code (5 cols) */}
          <div className="md:col-span-5 p-6 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-2.5 text-slate-100 dark:text-slate-100 light:text-slate-900 font-bold text-sm">
                <Gamepad2 className="w-4 h-4 text-emerald-400 light:text-emerald-700" />
                <span>Beyond Code</span>
              </div>
              <span className="text-xs font-mono text-emerald-400 block light:text-emerald-700">
                {extracurricular.title} · {extracurricular.role}
              </span>
              <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
                {extracurricular.description}
              </p>
            </div>
            <p className="text-[11px] font-mono text-slate-400 light:text-slate-600">
              Coordinated player registrations, schedule logistics, and technical setups.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Education;
