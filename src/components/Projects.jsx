import React, { useState } from 'react';
import { ExternalLink, ArrowRight, CheckCircle } from 'lucide-react';
import { Github } from './SocialIcons';
import { projects } from '../data/portfolio';
import { CaseStudyModal } from './CaseStudyModal';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-16 md:py-24 border-t border-slate-900 dark:border-slate-900 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-medium text-brand-400 bg-brand-950/40 border border-brand-800/40 mb-3">
            <span>FEATURED PROJECTS & CASE STUDIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
            Production-Style Software Systems
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400 dark:text-slate-400 light:text-slate-600">
            Real applications built with authentic full-stack workflows, authentication lifecycles, database modeling, and real-time state synchronization.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="space-y-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`rounded-2xl p-6 sm:p-8 transition-all border ${
                project.rank === 1
                  ? 'bg-slate-900/90 dark:bg-slate-900/90 light:bg-white border-brand-500/40 dark:border-brand-500/40 light:border-brand-300 shadow-glow-sm'
                  : 'bg-slate-900/70 dark:bg-slate-900/70 light:bg-white border-slate-800 dark:border-slate-800 light:border-slate-200 hover:border-slate-700'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Column: Metadata, Title, Description, Actions */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`px-2.5 py-0.5 text-xs font-mono font-bold rounded-md ${
                      project.rank === 1
                        ? 'bg-brand-600 text-white'
                        : project.rank === 2
                        ? 'bg-cyan-900 text-cyan-200 border border-cyan-700'
                        : 'bg-slate-800 text-slate-300'
                    }`}>
                      {project.rank === 1 ? 'FLAGSHIP PROJECT #1' : project.rank === 2 ? 'FLAGSHIP PROJECT #2' : 'SUPPORTING PROJECT #3'}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {project.duration}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base font-mono text-brand-400 dark:text-brand-400 light:text-brand-600 mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
                    {project.tagline}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-mono rounded-md bg-slate-950 dark:bg-slate-950 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 border border-slate-800 dark:border-slate-800 light:border-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Primary & Secondary Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-lg bg-brand-600 hover:bg-brand-500 text-white shadow-sm hover:shadow-glow-sm transition-all group"
                    >
                      <span>View Technical Case Study</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </button>

                    {project.hasLiveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs sm:text-sm font-mono font-medium rounded-lg bg-slate-800 dark:bg-slate-800 light:bg-slate-100 hover:bg-slate-700 dark:hover:bg-slate-700 light:hover:bg-slate-200 text-slate-200 dark:text-slate-200 light:text-slate-800 border border-slate-700 dark:border-slate-700 light:border-slate-300 transition-colors"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}

                    {project.hasGithub && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs sm:text-sm font-mono font-medium rounded-lg bg-slate-800 dark:bg-slate-800 light:bg-slate-100 hover:bg-slate-700 dark:hover:bg-slate-700 light:hover:bg-slate-200 text-slate-200 dark:text-slate-200 light:text-slate-800 border border-slate-700 dark:border-slate-700 light:border-slate-300 transition-colors"
                        aria-label={`${project.title} GitHub repository`}
                      >
                        <Github className="w-4 h-4" />
                        <span>GitHub</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Column: Key Architectural Highlights Card */}
                <div className="lg:col-span-5 p-5 rounded-xl bg-slate-950 dark:bg-slate-950 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 pb-2.5">
                    <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                      Engineering Highlights
                    </span>
                    <span className="text-[11px] font-mono text-brand-400">
                      Verified Implementation
                    </span>
                  </div>

                  <ul className="space-y-3 text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700">
                    {project.rank === 1 && (
                      <>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                          <span><strong>Multi-Role RBAC:</strong> JWT authentication & role-based middleware separating User, Partner, and Admin permissions.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span><strong>6 Backend Areas:</strong> Dedicated controller and route modules for vehicles, bookings, locations, invoices, and reviews.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span><strong>Socket.io Real-Time:</strong> Event-driven live mechanic dispatch & request progress tracking without polling.</span>
                        </li>
                      </>
                    )}

                    {project.rank === 2 && (
                      <>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                          <span><strong>5 Structured Entities:</strong> MongoDB models for Users, Learning Activities, Tasks, Resources, and Progress Tracking.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span><strong>Progress Velocity Engine:</strong> Dynamic calculation of completed milestones and real-time streak analytics.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span><strong>Modular React Architecture:</strong> Reusable roadmap timelines, task managers, and resource catalogs.</span>
                        </li>
                      </>
                    )}

                    {project.rank === 3 && (
                      <>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                          <span><strong>Availability Checks:</strong> Parking availability checks and database updates to reduce booking conflicts.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                          <span><strong>Location & Maps Integration:</strong> Geographic coordinate storage with Google Maps navigation links.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span><strong>PHP Backend Pipeline:</strong> Structured server-side validation and file uploads for vehicle space categories.</span>
                        </li>
                      </>
                    )}
                  </ul>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full py-2 text-xs font-mono text-center rounded-lg bg-slate-900 dark:bg-slate-900 light:bg-white hover:bg-slate-800 text-slate-300 dark:text-slate-300 light:text-slate-700 border border-slate-800 dark:border-slate-800 light:border-slate-200 transition-colors"
                  >
                    Inspect Architecture & "How It Works" →
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Modal Viewer */}
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

export default Projects;
