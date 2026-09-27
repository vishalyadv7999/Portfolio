import React, { useState } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Github } from './SocialIcons';
import { projects } from '../data/portfolio';
import { CaseStudyModal } from './CaseStudyModal';

export const FeaturedProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const roadside = projects.find(p => p.id === 'roadside-assistance');
  const learnnexus = projects.find(p => p.id === 'learn-nexus');
  const parking = projects.find(p => p.id === 'parking-management');

  return (
    <section id="projects" className="py-16 md:py-24 border-t border-slate-900 dark:border-slate-900 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-medium text-brand-400 bg-brand-950/40 border border-brand-800/40 mb-3">
            <span>SELECTED ENGINEERING WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
            Production-Style Applications
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400 dark:text-slate-400 light:text-slate-600">
            Real systems built with modular RESTful APIs, JWT token security, role-based authorization, MongoDB/MySQL data modeling, and real-time Socket.io state dispatch.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* FLAGSHIP PROJECT #1: ROADSIDE ASSISTANCE PLATFORM */}
        {/* ========================================================================= */}
        {roadside && (
          <div className="rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-slate-950/90 dark:from-slate-900/90 dark:via-slate-900/80 dark:to-slate-950/90 light:bg-white border border-brand-500/40 dark:border-brand-500/40 light:border-brand-300 shadow-2xl space-y-8">
            
            {/* Top Bar Badge */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 dark:border-slate-800/80 light:border-slate-100 pb-4">
              <div className="flex items-center gap-2.5">
                <span className="px-3 py-1 text-xs font-mono font-bold rounded-md bg-brand-600 text-white">
                  FLAGSHIP PROJECT #1
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {roadside.duration}
                </span>
              </div>
              <span className="text-xs font-mono text-emerald-400 font-medium">
                ● Active Codebase
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Scope, Description, 7 Workflows */}
              <div className="lg:col-span-7 space-y-5">
                <div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900">
                    {roadside.title}
                  </h3>
                  <p className="text-sm sm:text-base font-mono text-brand-400 font-semibold mt-1">
                    {roadside.subtitle}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
                  {roadside.tagline}
                </p>

                {/* 7 Workflows Visual Badge Grid */}
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                    7 Assistance Workflows Supported:
                  </span>
                  <div className="flex flex-wrap gap-1.5 text-xs font-mono">
                    {roadside.workflows.map((wf, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded bg-slate-950 dark:bg-slate-950 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 border border-slate-800 dark:border-slate-800 light:border-slate-200">
                        {wf.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {roadside.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-brand-950/60 dark:bg-brand-950/60 light:bg-brand-50 text-brand-300 dark:text-brand-300 light:text-brand-700 border border-brand-800/50 dark:border-brand-800/50 light:border-brand-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-3">
                  <button
                    onClick={() => setSelectedProject(roadside)}
                    className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold rounded-lg bg-brand-600 hover:bg-brand-500 text-white shadow-sm hover:shadow-glow-sm transition-all group"
                  >
                    <span>View In-Depth Case Study</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>

                  <a
                    href={roadside.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-3 text-xs sm:text-sm font-mono font-medium rounded-lg bg-slate-800 dark:bg-slate-800 light:bg-slate-100 hover:bg-slate-700 dark:hover:bg-slate-700 light:hover:bg-slate-200 text-slate-200 dark:text-slate-200 light:text-slate-800 border border-slate-700 dark:border-slate-700 light:border-slate-300 transition-colors"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={roadside.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-3 text-xs sm:text-sm font-mono font-medium rounded-lg bg-slate-800 dark:bg-slate-800 light:bg-slate-100 hover:bg-slate-700 dark:hover:bg-slate-700 light:hover:bg-slate-200 text-slate-200 dark:text-slate-200 light:text-slate-800 border border-slate-700 dark:border-slate-700 light:border-slate-300 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                </div>

              </div>

              {/* Right Column: Architectural Highlights & Mini-Visual */}
              <div className="lg:col-span-5 space-y-4">
                <div className="p-5 rounded-2xl bg-slate-950 dark:bg-slate-950 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200 space-y-4 font-mono text-xs">
                  <div className="flex items-center justify-between border-b border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 pb-2">
                    <span className="text-brand-400 font-bold uppercase tracking-wider">
                      Backend Architecture
                    </span>
                    <span className="text-slate-500">6 Backend Modules</span>
                  </div>

                  <div className="space-y-2 text-slate-300 dark:text-slate-300 light:text-slate-700">
                    <div className="p-2.5 rounded bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200">
                      <strong className="text-slate-100 dark:text-slate-100 light:text-slate-900 block mb-0.5 font-sans">
                        Multi-Role RBAC Authorization
                      </strong>
                      <p className="text-[11px] text-slate-400">
                        Isolates permissions for <strong>User</strong> (request bookings), <strong>Partner</strong> (accept jobs), and <strong>Admin</strong> (verify partners & inspect disputes).
                      </p>
                    </div>

                    <div className="p-2.5 rounded bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200">
                      <strong className="text-slate-100 dark:text-slate-100 light:text-slate-900 block mb-0.5 font-sans">
                        Socket.io Live Dispatch Tracking
                      </strong>
                      <p className="text-[11px] text-slate-400">
                        Event-driven WebSocket room channels broadcasting real-time status transitions (ACCEPTED → ON_WAY → ARRIVED → COMPLETED).
                      </p>
                    </div>

                    <div className="p-2.5 rounded bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200">
                      <strong className="text-slate-100 dark:text-slate-100 light:text-slate-900 block mb-0.5 font-sans">
                        Indexed MongoDB Data Models
                      </strong>
                      <p className="text-[11px] text-slate-400">
                        Normalized Mongoose collections with compound indexes for rapid geospatial and status lookups.
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedProject(roadside)}
                    className="w-full py-2.5 text-xs font-mono text-center rounded-lg bg-slate-900 dark:bg-slate-900 light:bg-white hover:bg-slate-800 text-brand-400 border border-slate-800 dark:border-slate-800 light:border-slate-200 transition-colors"
                  >
                    Open System Diagram & JWT Flow →
                  </button>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* ========================================================================= */}
        {/* FLAGSHIP PROJECT #2: LEARNNEXUS */}
        {/* ========================================================================= */}
        {learnnexus && (
          <div className="rounded-3xl p-6 sm:p-10 bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 shadow-xl space-y-8">
            
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 dark:border-slate-800/80 light:border-slate-100 pb-4">
              <div className="flex items-center gap-2.5">
                <span className="px-3 py-1 text-xs font-mono font-bold rounded-md bg-cyan-900 text-cyan-200 border border-cyan-700">
                  FLAGSHIP PROJECT #2
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {learnnexus.duration}
                </span>
              </div>
              <span className="text-xs font-mono text-slate-400 font-medium">
                Completed Platform
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: 5 Entities & Architectural Data Grid */}
              <div className="lg:col-span-5 space-y-4 order-2 lg:order-1">
                <div className="p-5 rounded-2xl bg-slate-950 dark:bg-slate-950 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200 space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between border-b border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 pb-2">
                    <span className="text-cyan-400 font-bold uppercase tracking-wider">
                      5 MongoDB Entities
                    </span>
                    <span className="text-slate-500">Mongoose Relational Refs</span>
                  </div>

                  <div className="grid grid-cols-1 gap-2 text-slate-300 dark:text-slate-300 light:text-slate-700">
                    <div className="p-2 bg-slate-900 dark:bg-slate-900 light:bg-white rounded border border-slate-800 dark:border-slate-800 light:border-slate-200">
                      <span className="text-slate-100 dark:text-slate-100 light:text-slate-900 font-bold block">1. Users</span>
                      <span className="text-[11px] text-slate-400">Learner profile, preferences, and session context.</span>
                    </div>
                    <div className="p-2 bg-slate-900 dark:bg-slate-900 light:bg-white rounded border border-slate-800 dark:border-slate-800 light:border-slate-200">
                      <span className="text-slate-100 dark:text-slate-100 light:text-slate-900 font-bold block">2. Learning Activities & 3. Tasks</span>
                      <span className="text-[11px] text-slate-400">Time-stamped study logs and actionable milestone scheduling.</span>
                    </div>
                    <div className="p-2 bg-slate-900 dark:bg-slate-900 light:bg-white rounded border border-slate-800 dark:border-slate-800 light:border-slate-200">
                      <span className="text-slate-100 dark:text-slate-100 light:text-slate-900 font-bold block">4. Resources & 5. Progress Tracking</span>
                      <span className="text-[11px] text-slate-400">Curated materials + dynamic velocity metrics calculation.</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedProject(learnnexus)}
                    className="w-full py-2.5 text-xs font-mono text-center rounded-lg bg-slate-900 dark:bg-slate-900 light:bg-white hover:bg-slate-800 text-cyan-400 border border-slate-800 dark:border-slate-800 light:border-slate-200 transition-colors"
                  >
                    Inspect LearnNexus Case Study →
                  </button>
                </div>
              </div>

              {/* Right Column: Title, 4 Core Modules, Actions */}
              <div className="lg:col-span-7 space-y-5 order-1 lg:order-2">
                <div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900">
                    {learnnexus.title}
                  </h3>
                  <p className="text-sm sm:text-base font-mono text-cyan-400 font-semibold mt-1">
                    {learnnexus.subtitle}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
                  {learnnexus.tagline}
                </p>

                {/* 4 Core Modules */}
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                    Core Application Modules:
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                    {learnnexus.coreModules.slice(0, 4).map((m, idx) => (
                      <div key={idx} className="p-2.5 rounded bg-slate-950 dark:bg-slate-950 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-200">
                        <span className="font-bold text-slate-200 dark:text-slate-200 light:text-slate-800 block">{m.name}</span>
                        <span className="text-[11px] text-slate-400">{m.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {learnnexus.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-slate-950 dark:bg-slate-950 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 border border-slate-800 dark:border-slate-800 light:border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-3">
                  <button
                    onClick={() => setSelectedProject(learnnexus)}
                    className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold rounded-lg bg-brand-600 hover:bg-brand-500 text-white shadow-sm hover:shadow-glow-sm transition-all group"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>

                  <a
                    href={learnnexus.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-3 text-xs sm:text-sm font-mono font-medium rounded-lg bg-slate-800 dark:bg-slate-800 light:bg-slate-100 hover:bg-slate-700 dark:hover:bg-slate-700 light:hover:bg-slate-200 text-slate-200 dark:text-slate-200 light:text-slate-800 border border-slate-700 dark:border-slate-700 light:border-slate-300 transition-colors"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={learnnexus.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-3 text-xs sm:text-sm font-mono font-medium rounded-lg bg-slate-800 dark:bg-slate-800 light:bg-slate-100 hover:bg-slate-700 dark:hover:bg-slate-700 light:hover:bg-slate-200 text-slate-200 dark:text-slate-200 light:text-slate-800 border border-slate-700 dark:border-slate-700 light:border-slate-300 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                </div>

              </div>

            </div>

          </div>
        )}

        {/* ========================================================================= */}
        {/* SUPPORTING PROJECT #3: ONLINE PARKING MANAGEMENT SYSTEM */}
        {/* ========================================================================= */}
        {parking && (
          <div className="rounded-3xl p-6 sm:p-8 bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 shadow-md space-y-6">
            
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 dark:border-slate-800/80 light:border-slate-100 pb-3">
              <div className="flex items-center gap-2.5">
                <span className="px-3 py-1 text-xs font-mono font-bold rounded-md bg-slate-800 text-slate-300">
                  SUPPORTING PROJECT #3
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {parking.duration}
                </span>
              </div>
              <span className="text-xs font-mono text-amber-400 font-medium">
                PHP & MySQL Web Architecture
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-8 space-y-3">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                  {parking.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
                  {parking.tagline}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {parking.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-xs font-mono rounded bg-slate-950 dark:bg-slate-950 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 border border-slate-800 dark:border-slate-800 light:border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-wrap lg:justify-end gap-2.5">
                <button
                  onClick={() => setSelectedProject(parking)}
                  className="px-4 py-2.5 text-xs font-semibold rounded-lg bg-brand-600 hover:bg-brand-500 text-white transition-colors"
                >
                  View Case Study
                </button>
                <a
                  href={parking.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 text-xs font-mono font-medium rounded-lg bg-slate-800 dark:bg-slate-800 light:bg-slate-100 hover:bg-slate-700 text-slate-200 dark:text-slate-200 light:text-slate-800 border border-slate-700 transition-colors inline-flex items-center gap-1.5"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

          </div>
        )}

        {/* Modal Case Study Viewer */}
        {selectedProject && (
          <CaseStudyModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

      </div>
    </section>
  );
};

export default FeaturedProjects;
