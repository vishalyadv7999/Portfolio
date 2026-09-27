import React from 'react';
import { Layers, Server, ShieldCheck, Radio, Database, Cpu } from 'lucide-react';
import { capabilities } from '../data/portfolio';

const iconMap = {
  Layers: Layers,
  Server: Server,
  ShieldCheck: ShieldCheck,
  Radio: Radio,
  Database: Database,
  Cpu: Cpu
};

export const Capabilities = () => {
  return (
    <section id="capabilities" className="py-16 md:py-24 border-t border-slate-900 dark:border-slate-900 light:border-slate-200 bg-slate-950/40 dark:bg-slate-950/40 light:bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-medium text-cyan-400 bg-cyan-950/40 border border-cyan-800/40 mb-3">
            <span>ENGINEERING CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
            What I Build & Deliver
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400 dark:text-slate-400 light:text-slate-600">
            Translating core computer science principles and modern full-stack web technologies into structured, maintainable software systems.
          </p>
        </div>

        {/* 6 Core Capability Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((item) => {
            const IconComp = iconMap[item.icon] || Server;
            return (
              <div
                key={item.id}
                className="group relative p-6 rounded-xl bg-slate-900/70 dark:bg-slate-900/70 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 hover:border-brand-500/50 dark:hover:border-brand-500/50 light:hover:border-brand-400 shadow-sm hover:shadow-glow-sm transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-lg bg-brand-950/60 dark:bg-brand-950/60 light:bg-brand-50 border border-brand-800/40 dark:border-brand-800/40 light:border-brand-200 flex items-center justify-center text-brand-400 mb-4 group-hover:scale-105 transition-transform">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Tech chips */}
                <div className="pt-4 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-100 flex flex-wrap gap-1.5">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-xs font-mono rounded bg-slate-950 dark:bg-slate-950 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 border border-slate-800 dark:border-slate-800 light:border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Capabilities;
