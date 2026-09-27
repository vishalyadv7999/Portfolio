import React, { useState } from 'react';
import { Code2, Layout, Server, Database, Cpu, Terminal, Info } from 'lucide-react';
import { technologyDetails } from '../data/portfolio';

export const InteractiveTechMap = () => {
  const [selectedTech, setSelectedTech] = useState(technologyDetails.backend[0]);

  const categories = [
    { name: "Languages", icon: <Code2 className="w-4 h-4 text-brand-400" />, items: technologyDetails.languages },
    { name: "Frontend", icon: <Layout className="w-4 h-4 text-cyan-400" />, items: technologyDetails.frontend },
    { name: "Backend & APIs", icon: <Server className="w-4 h-4 text-amber-400" />, items: technologyDetails.backend },
    { name: "Databases", icon: <Database className="w-4 h-4 text-emerald-400" />, items: technologyDetails.databases },
    { name: "Core CS", icon: <Cpu className="w-4 h-4 text-purple-400" />, items: technologyDetails.fundamentals },
    { name: "Tools", icon: <Terminal className="w-4 h-4 text-rose-400" />, items: technologyDetails.tools }
  ];

  return (
    <section id="skills" className="py-16 md:py-24 border-t border-slate-900 dark:border-slate-900 light:border-slate-200 bg-slate-950/30 dark:bg-slate-950/30 light:bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-medium text-cyan-400 bg-cyan-950/40 border border-cyan-800/40 mb-3">
            <span>INTERACTIVE TECHNOLOGY MAP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
            Verified Technical Proficiencies
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400 dark:text-slate-400 light:text-slate-600">
            Select or hover over any technology node to inspect how and where it was applied across my actual software projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Categorized Technology Grid (8 cols) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 space-y-3"
              >
                <div className="flex items-center gap-2 border-b border-slate-800/80 dark:border-slate-800/80 light:border-slate-100 pb-2.5">
                  {cat.icon}
                  <h3 className="text-xs font-bold font-mono uppercase text-slate-200 dark:text-slate-200 light:text-slate-800">
                    {cat.name}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {cat.items.map((tech, tIdx) => {
                    const isSelected = selectedTech?.name === tech.name;
                    return (
                      <button
                        key={tIdx}
                        onMouseEnter={() => setSelectedTech(tech)}
                        onClick={() => setSelectedTech(tech)}
                        className={`px-2.5 py-1 text-xs font-mono rounded-lg transition-all text-left ${
                          isSelected
                            ? 'bg-brand-600 text-white font-semibold shadow-sm'
                            : 'bg-slate-950 dark:bg-slate-950 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:border-slate-600 border border-slate-800 dark:border-slate-800 light:border-slate-200'
                        }`}
                      >
                        {tech.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Dynamic Context Inspector Card (4 cols) */}
          <div className="lg:col-span-4 sticky top-24 p-6 rounded-2xl bg-slate-950 dark:bg-slate-950 light:bg-white border border-brand-500/40 dark:border-brand-500/40 light:border-brand-300 shadow-xl space-y-4 font-mono">
            <div className="flex items-center justify-between border-b border-slate-800/80 dark:border-slate-800/80 light:border-slate-100 pb-3">
              <span className="text-xs text-brand-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Info className="w-4 h-4" />
                Contextual Inspector
              </span>
              <span className="text-[10px] text-emerald-400">Verified Application</span>
            </div>

            <div className="space-y-2">
              <h4 className="text-xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                {selectedTech?.name}
              </h4>
              <span className="inline-block px-2 py-0.5 text-xs rounded bg-slate-900 text-brand-400 border border-slate-800">
                {selectedTech?.role}
              </span>
            </div>

            <div className="pt-2 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-100 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed font-sans">
              <strong className="block text-slate-400 font-mono text-[11px] mb-1 uppercase">
                Application Context:
              </strong>
              <p>{selectedTech?.context}</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default InteractiveTechMap;
