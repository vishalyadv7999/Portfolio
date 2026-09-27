import React from 'react';
import { Code2, Layout, Server, Database, Cpu, Terminal } from 'lucide-react';
import { skills } from '../data/portfolio';

export const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      icon: <Code2 className="w-5 h-5 text-brand-400" />,
      items: skills.languages
    },
    {
      category: "Frontend Development",
      icon: <Layout className="w-5 h-5 text-cyan-400" />,
      items: skills.frontend
    },
    {
      category: "Backend & API Systems",
      icon: <Server className="w-5 h-5 text-amber-400" />,
      items: skills.backend
    },
    {
      category: "Databases & Storage",
      icon: <Database className="w-5 h-5 text-emerald-400" />,
      items: skills.databases
    },
    {
      category: "Core Computer Science",
      icon: <Cpu className="w-5 h-5 text-purple-400" />,
      items: skills.fundamentals
    },
    {
      category: "Developer Tools & Workflows",
      icon: <Terminal className="w-5 h-5 text-rose-400" />,
      items: skills.tools
    }
  ];

  return (
    <section id="skills" className="py-16 md:py-24 border-t border-slate-900 dark:border-slate-900 light:border-slate-200 bg-slate-950/40 dark:bg-slate-950/40 light:bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-medium text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 mb-3">
            <span>TECHNICAL PROFICIENCIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
            Categorized Technical Skills
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400 dark:text-slate-400 light:text-slate-600">
            Categorized by engineering domains with verified applications across production-style projects.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((group, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-slate-900/70 dark:bg-slate-900/70 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3 border-b border-slate-800/80 dark:border-slate-800/80 light:border-slate-100 pb-3">
                <div className="p-2 rounded-lg bg-slate-950 dark:bg-slate-950 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200">
                  {group.icon}
                </div>
                <h3 className="text-base font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                  {group.category}
                </h3>
              </div>

              <div className="space-y-2.5">
                {group.items.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-2.5 rounded-lg bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 flex items-center justify-between font-mono text-xs"
                  >
                    <span className="font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800">
                      {skill.name}
                    </span>
                    <span className="text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-500">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
