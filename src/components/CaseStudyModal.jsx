import React, { useEffect, useRef, useState } from 'react';
import { X, ExternalLink, CheckCircle2, ChevronDown, ChevronUp, Layers, Server, ShieldCheck, Database, Wrench, AlertTriangle, HelpCircle } from 'lucide-react';
import { createPortal } from 'react-dom';
import { Github } from './SocialIcons';
import { ArchitectureDiagram } from './ArchitectureDiagram';

export const CaseStudyModal = ({ project, onClose }) => {
  const [expandedInterview, setExpandedInterview] = useState(0);

  const dialogRef = useRef(null);
  const titleRef = useRef(null);
  useEffect(() => {
    if (!project) return;
    const dialog = dialogRef.current;
    const trigger = document.activeElement;
    const oldOverflow = document.body.style.overflow;
    dialog.showModal();
    titleRef.current?.focus();
    document.body.style.overflow = 'hidden';
    return () => {
      dialog.close();
      document.body.style.overflow = oldOverflow;
      if (trigger instanceof HTMLElement && trigger.isConnected) trigger.focus();
    };
  }, [project]);

  if (!project) return null;

  const containFocus = (event) => {
    if (event.key !== 'Tab') return;
    const controls = [...dialogRef.current.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex="0"]')]
      .filter(element => element.getClientRects().length > 0);
    const first = controls[0];
    const last = controls[controls.length - 1];
    if (event.shiftKey && (document.activeElement === first || document.activeElement === titleRef.current)) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first?.focus();
    }
  };

  return createPortal(
    <dialog ref={dialogRef} className="case-study" aria-modal="true" aria-labelledby="case-study-title" onKeyDown={containFocus}
      onCancel={(event) => { event.preventDefault(); onClose(); }}
      onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl bg-slate-900 dark:bg-slate-900 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 shadow-2xl p-6 sm:p-8 space-y-8 text-slate-200 dark:text-slate-200 light:text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Case Study"
          className="absolute top-5 right-5 p-2 rounded-lg bg-slate-800 dark:bg-slate-800 light:bg-slate-100 text-slate-400 hover:text-white dark:hover:text-white light:hover:text-slate-900 transition-colors light:text-slate-600"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-3 pr-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-1 text-xs font-mono font-bold rounded-md bg-brand-950 text-brand-400 border border-brand-800/60 light:text-brand-700 light:bg-brand-50">
              PROJECT CASE STUDY
            </span>
            <span className="text-xs font-mono text-slate-400 light:text-slate-600">
              {project.duration}
            </span>
          </div>

          <h2 id="case-study-title" ref={titleRef} tabIndex={-1} className="text-2xl sm:text-3xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
            {project.title}
          </h2>
          <p className="text-base text-brand-400 font-medium font-mono light:text-brand-700">
            {project.subtitle}
          </p>
          <p className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
            {project.tagline}
          </p>

          {/* Action links */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {project.hasGithub && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-mono font-semibold rounded-lg bg-slate-800 dark:bg-slate-800 light:bg-slate-100 hover:bg-slate-700 dark:hover:bg-slate-700 light:hover:bg-slate-200 text-slate-100 dark:text-slate-100 light:text-slate-800 border border-slate-700 dark:border-slate-700 light:border-slate-300 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View Source Code</span>
                <ExternalLink className="w-3 h-3 text-slate-400 light:text-slate-600" />
              </a>
            )}
            {project.hasLiveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-mono font-semibold rounded-lg bg-brand-600 hover:bg-brand-500 text-white shadow-sm transition-all"
              >
                <span>Launch Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

        {/* Problem & Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl bg-slate-950/70 dark:bg-slate-950/70 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200 space-y-2">
            <div className="flex items-center gap-2 text-red-400 font-bold text-sm light:text-red-700">
              <AlertTriangle className="w-4 h-4" />
              <span>The Problem</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
              {project.summary.problem}
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-950/70 dark:bg-slate-950/70 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200 space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm light:text-emerald-700">
              <CheckCircle2 className="w-4 h-4" />
              <span>The Solution</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
              {project.summary.solution}
            </p>
          </div>
        </div>

        {project.walkthrough && <section className="space-y-3">
          <h3 className="text-lg font-bold">Explore the project</h3>
          <ol className="list-decimal pl-5 space-y-2 text-sm text-slate-300 light:text-slate-700">
            {project.walkthrough.map(step => <li key={step}>{step}</li>)}
          </ol>
          <p className="text-sm text-slate-400 light:text-slate-600">{project.limitations}</p>
          {project.repositoryOwner && <p className="text-sm text-slate-400 light:text-slate-600">Repository hosted by {project.repositoryOwner}.</p>}
        </section>}
        {/* Workflows / Modules Section */}
        {project.workflows && (
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 flex items-center gap-2">
              <Wrench className="w-4 h-4 text-brand-400 light:text-brand-700" />
              <span>{project.workflows.length} Assistance Workflows</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {project.workflows.map((wf, i) => (
                <div key={i} className="p-3 rounded-lg bg-slate-950 dark:bg-slate-950 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200">
                  <span className="text-xs font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 block mb-0.5">
                    {wf.name}
                  </span>
                  <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">
                    {wf.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {project.coreModules && (
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 flex items-center gap-2">
              <Layers className="w-4 h-4 text-brand-400 light:text-brand-700" />
              <span>Core Application Modules</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.coreModules.map((m, i) => (
                <div key={i} className="p-3 rounded-lg bg-slate-950 dark:bg-slate-950 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200">
                  <span className="text-xs font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 block mb-0.5">
                    {m.name}
                  </span>
                  <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* System Architecture Diagram Component */}
        <div className="space-y-3">
          <h3 className="text-lg font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 flex items-center gap-2">
            <Server className="w-4 h-4 text-brand-400 light:text-brand-700" />
            <span>Interactive Architecture & Flow Visualizer</span>
          </h3>
          <ArchitectureDiagram projectId={project.id} />
        </div>

        {/* Backend API Modules (for Roadside Assistance) */}
        {project.backendModules && (
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 flex items-center gap-2">
              <Database className="w-4 h-4 text-brand-400 light:text-brand-700" />
              <span>Backend Modules Documented Here ({project.backendModules.length})</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {project.backendModules.map((mod, i) => (
                <div key={i} className="p-3 rounded-lg bg-slate-950 dark:bg-slate-950 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200">
                  <span className="text-xs font-mono font-bold text-brand-400 block mb-0.5 light:text-brand-700">
                    {mod.name}
                  </span>
                  <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">
                    {mod.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technical Interview Mode: "How It Works" */}
        {project.interviewPoints && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-cyan-400 light:text-cyan-700" />
                <span>Implementation Notes</span>
              </h3>
              <span className="text-xs font-mono text-slate-400 light:text-slate-600">Explore the implementation</span>
            </div>

            <div className="space-y-2">
              {project.interviewPoints.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-xl bg-slate-950 dark:bg-slate-950 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200 overflow-hidden"
                >
                  <button
                    aria-expanded={expandedInterview === idx}
                    aria-controls={`implementation-${project.id}-${idx}`}
                    onClick={() => setExpandedInterview(expandedInterview === idx ? null : idx)}
                    className="w-full text-left p-4 flex items-center justify-between gap-3 text-sm font-semibold text-slate-100 dark:text-slate-100 light:text-slate-900 hover:bg-slate-900/50 dark:hover:bg-slate-900/50 light:hover:bg-slate-100"
                  >
                    <span>{item.question}</span>
                    {expandedInterview === idx ? (
                      <ChevronUp className="w-4 h-4 text-brand-400 shrink-0 light:text-brand-700" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 shrink-0 light:text-slate-600" />
                    )}
                  </button>

                    <div hidden={expandedInterview !== idx} id={`implementation-${project.id}-${idx}`} className="px-4 pb-4 pt-1 text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 font-mono">
                      {item.answer}
                    </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Engineering Challenges */}
        {project.challenges && (
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-400 light:text-amber-700" />
              <span>Engineering Challenges</span>
            </h3>
            <ul className="space-y-2">
              {project.challenges.map((c, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Modal Footer Close CTA */}
        <div className="pt-4 border-t border-slate-800 dark:border-slate-800 light:border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-sm font-semibold rounded-lg bg-slate-800 dark:bg-slate-800 light:bg-slate-100 hover:bg-slate-700 dark:hover:bg-slate-700 light:hover:bg-slate-200 text-slate-100 dark:text-slate-100 light:text-slate-900 transition-colors"
          >
            Close Case Study
          </button>
        </div>

      </div>
    </dialog>,
    document.body
  );
};

export default CaseStudyModal;
