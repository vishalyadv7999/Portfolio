import React from 'react';
import { Layers, Server, ShieldCheck, Radio, Database, Cpu, GraduationCap } from 'lucide-react';
import { capabilities } from '../data/portfolio';

const iconMap = {
  Layers: Layers,
  Server: Server,
  ShieldCheck: ShieldCheck,
  Radio: Radio,
  Database: Database,
  Cpu: Cpu
};

export const EngineeringProfile = () => {
  return (
    <section id="about" className="py-16 md:py-24 border-t border-slate-900 dark:border-slate-900 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-medium text-brand-400 bg-brand-950/40 border border-brand-800/40 mb-3">
            <span>ENGINEERING PROFILE & COMPETENCIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
            Full-Stack Engineering Foundations
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400 dark:text-slate-400 light:text-slate-600">
            A verified track record of architecting complete web applications, engineering backend REST APIs, securing systems with JWT/RBAC, and building event-driven real-time services.
          </p>
        </div>

        {/* Narrative & Engineering Overview */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 mb-12 space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3 text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed text-sm sm:text-base">
              <p>
                As a Computer Science and Engineering student at <strong className="text-slate-100 dark:text-slate-100 light:text-slate-900">IMS Engineering College, Ghaziabad</strong>, my development work is focused on building dependable full-stack applications with <span className="text-brand-400 font-medium">React.js, Node.js, Express.js, MongoDB, and SQL</span>.
              </p>
              <p>
                My projects reflect practical engineering challenges: implementing 6 backend areas in the Roadside Assistance platform, managing 5 relational entities in LearnNexus, and checking reservation availability in the Online Parking Management system.
              </p>
            </div>
            
            <div className="lg:col-span-4 p-4 rounded-xl bg-slate-950 dark:bg-slate-950 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200 space-y-2 font-mono text-xs text-slate-300 dark:text-slate-300 light:text-slate-700">
              <div className="flex items-center gap-2 text-brand-400 font-bold">
                <GraduationCap className="w-4 h-4" />
                <span>Academic & Internship Core</span>
              </div>
              <p className="text-[11px] text-slate-400">B.Tech CSE (2023–2027) • GPA: 7.5/10</p>
              <p className="text-[11px] text-slate-400">IBM PBEL AI Intern • Unified Mentors Web Intern</p>
            </div>
          </div>
        </div>

        {/* 6 Capabilities Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((item) => {
            const IconComp = iconMap[item.icon] || Server;
            return (
              <div
                key={item.id}
                className="group relative p-6 rounded-2xl bg-slate-900/70 dark:bg-slate-900/70 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 hover:border-brand-500/50 dark:hover:border-brand-500/50 light:hover:border-brand-400 shadow-sm hover:shadow-glow-sm transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-brand-950/60 dark:bg-brand-950/60 light:bg-brand-50 border border-brand-800/40 dark:border-brand-800/40 light:border-brand-200 flex items-center justify-center text-brand-400 mb-4 group-hover:scale-105 transition-transform">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

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

export default EngineeringProfile;
