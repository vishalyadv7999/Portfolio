import React from 'react';
import { GraduationCap, Server, ShieldCheck, Radio } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 border-t border-slate-900 dark:border-slate-900 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Heading with Editorial Numbering */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-emerald-400 text-sm font-semibold light:text-emerald-700">03.</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
            About Me
          </h2>
          <div className="h-[1px] bg-slate-800 dark:bg-slate-800 light:bg-slate-200 flex-1 ml-4 max-w-xs" />
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed text-base">
            <p>
              I am a Computer Science and Engineering student at <strong className="text-slate-100 dark:text-slate-100 light:text-slate-900">IMS Engineering College, Ghaziabad</strong>, with hands-on experience developing full-stack web applications and backend services.
            </p>
            <p>
              My primary focus is building complete applications with <span className="text-emerald-400 font-mono font-medium light:text-emerald-700">React.js, Node.js, Express, MongoDB, and SQL</span>. I enjoy working across the full lifecycle of a feature: from designing RESTful API endpoints and database schemas to securing routes with JWT authentication and building real-time tracking with <span className="text-emerald-400 font-mono font-medium light:text-emerald-700">Socket.io</span>.
            </p>
            <p>
              Through the <strong className="text-slate-100 dark:text-slate-100 light:text-slate-900">IBM-AKTU PBEL institutional program</strong> (AI workflows and prompt validation) and my web development internship at <strong className="text-slate-100 dark:text-slate-100 light:text-slate-900">Unified Mentors</strong> (responsive interfaces and browser testing), I practice development, testing and debugging.
            </p>

            {/* "Currently" Status Section */}
            <div className="pt-3 p-4 rounded-xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200 space-y-2 text-xs font-mono">
              <div className="flex items-center gap-2 text-slate-200 dark:text-slate-200 light:text-slate-800 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Current Status</span>
              </div>
              <ul className="space-y-1.5 text-slate-400 pl-4 list-disc light:text-slate-600">
                <li>Pursuing B.Tech in Computer Science & Engineering (2023 — 2027)</li>
                <li>Participating in the IBM-AKTU PBEL AI internship program</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Technical Snapshot Grid */}
          <div className="lg:col-span-5 space-y-3 font-mono text-xs">
            
            <div className="p-4 rounded-xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200 flex items-start gap-3">
              <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-emerald-400 light:text-emerald-700 light:bg-slate-100">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div>
                <span className="text-slate-400 uppercase text-[10px] block light:text-slate-600">Academic Background</span>
                <strong className="text-slate-100 dark:text-slate-100 light:text-slate-900 font-semibold text-xs block">
                  B.Tech CSE • IMS Engineering College
                </strong>
                <span className="text-[11px] text-emerald-400 light:text-emerald-700">GPA: {personalInfo.gpa} (Oct 2023 — July 2027)</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200 flex items-start gap-3">
              <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-emerald-400 light:text-emerald-700 light:bg-slate-100">
                <Server className="w-4 h-4" />
              </div>
              <div>
                <span className="text-slate-400 uppercase text-[10px] block light:text-slate-600">Full-Stack Scope</span>
                <strong className="text-slate-100 dark:text-slate-100 light:text-slate-900 font-semibold text-xs block">
                  3 Full-Stack Applications
                </strong>
                <span className="text-[11px] text-slate-400 light:text-slate-600">Roadside Assistance • LearnNexus • Parking System</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200 flex items-start gap-3">
              <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-emerald-400 light:text-emerald-700 light:bg-slate-100">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <span className="text-slate-400 uppercase text-[10px] block light:text-slate-600">Professional Experience</span>
                <strong className="text-slate-100 dark:text-slate-100 light:text-slate-900 font-semibold text-xs block">
                  2 Technical Internships
                </strong>
                <span className="text-[11px] text-slate-400 light:text-slate-600">IBM PBEL AI Intern • Unified Mentors Web Intern</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200 flex items-start gap-3">
              <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-emerald-400 light:text-emerald-700 light:bg-slate-100">
                <Radio className="w-4 h-4" />
              </div>
              <div>
                <span className="text-slate-400 uppercase text-[10px] block light:text-slate-600">Core Technologies</span>
                <strong className="text-slate-100 dark:text-slate-100 light:text-slate-900 font-semibold text-xs block">
                  React • Node • Express • MongoDB • SQL
                </strong>
                <span className="text-[11px] text-slate-400 light:text-slate-600">REST APIs • JWT • Socket.io • Java • C++</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
