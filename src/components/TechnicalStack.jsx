import React, { useState } from 'react';
import { Code2, Layout, Server, Database, Cpu, Terminal, Info } from 'lucide-react';
import { technologyDetails } from '../data/portfolio';

export const TechnicalStack = () => {
  const [selectedSkill, setSelectedSkill] = useState(technologyDetails.backend[0]);

  const skillRows = [
    { title: "Languages", icon: Code2, items: technologyDetails.languages },
    { title: "Frontend", icon: Layout, items: technologyDetails.frontend },
    { title: "Backend & APIs", icon: Server, items: technologyDetails.backend },
    { title: "Databases", icon: Database, items: technologyDetails.databases },
    { title: "CS Fundamentals", icon: Cpu, items: technologyDetails.fundamentals },
    { title: "Developer Tools", icon: Terminal, items: technologyDetails.tools }
  ];

  return (
    <section id="stack" className="py-20 md:py-28 border-t border-slate-900 dark:border-slate-900 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Heading */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="font-mono text-emerald-400 text-sm font-semibold light:text-emerald-700">04.</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
              Technical Stack
            </h2>
            <div className="h-[1px] bg-slate-800 dark:bg-slate-800 light:bg-slate-200 flex-1 ml-4 max-w-xs" />
          </div>
          <p className="text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-2xl">
            A structured view of programming languages, frameworks, architectural concepts, and tools used in my coursework and projects.
          </p>
        </div>

        {/* Top Part: Horizontal Categorized Rows with Side Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Horizontal Rows (8 cols) */}
          <div className="lg:col-span-8 space-y-4">
            {skillRows.map((cat, idx) => {
              const IconComp = cat.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 space-y-3"
                >
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-300 dark:text-slate-300 light:text-slate-700 uppercase tracking-wider">
                    <IconComp className="w-4 h-4 text-emerald-400 light:text-emerald-700" />
                    <span>{cat.title}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
                    {cat.items.map((skill, sIdx) => {
                      const isSelected = selectedSkill?.name === skill.name;
                      return (
                        <button
                          key={sIdx}
                          onMouseEnter={() => setSelectedSkill(skill)}
                          onClick={() => setSelectedSkill(skill)}
                          aria-pressed={isSelected}
                          className={`px-3 py-1.5 rounded-lg text-left transition-all ${
                            isSelected
                              ? 'bg-emerald-500 text-slate-950 font-semibold shadow-sm scale-[1.02]'
                              : 'bg-slate-950 dark:bg-slate-950 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:border-slate-600 border border-slate-800 dark:border-slate-800 light:border-slate-200'
                          }`}
                        >
                          {skill.name}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Context Inspector Card (4 cols) */}
          <div className="lg:col-span-4 sticky top-24 p-6 rounded-2xl bg-slate-950 dark:bg-slate-950 light:bg-white border border-emerald-500/40 dark:border-emerald-500/40 light:border-emerald-300 shadow-xl space-y-4 font-mono">
            <div className="flex items-center justify-between border-b border-slate-800/80 dark:border-slate-800/80 light:border-slate-100 pb-3">
              <span className="text-xs text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1.5 light:text-emerald-700">
                <Info className="w-4 h-4" />
                Skill Context
              </span>
              <span className="text-[10px] text-slate-400 light:text-slate-600">Project Context</span>
            </div>

            <div className="space-y-1.5">
              <h3 className="text-xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                {selectedSkill?.name}
              </h3>
              <span className="inline-block px-2.5 py-0.5 text-xs rounded bg-slate-900 text-emerald-400 border border-slate-800 light:text-emerald-700 light:bg-slate-100">
                {selectedSkill?.role}
              </span>
            </div>

            <div className="pt-2 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-100 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed font-sans">
              <strong className="block text-slate-400 font-mono text-[11px] mb-1 uppercase light:text-slate-600">
                Application Context:
              </strong>
              <p>{selectedSkill?.context}</p>
            </div>
          </div>

        </div>


      </div>
    </section>
  );
};

export default TechnicalStack;
