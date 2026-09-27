import { useState } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Github } from './SocialIcons';
import { projects } from '../data/portfolio';
import { CaseStudyModal } from './CaseStudyModal';

export function SelectedWork() {
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <section id="work" className="py-16 md:py-24 border-t border-slate-800 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="space-y-3 max-w-2xl">
          <p className="font-mono text-emerald-400 light:text-emerald-700 text-sm">01. SELECTED WORK</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 light:text-slate-900">Applications I've built</h2>
          <p className="text-slate-400 light:text-slate-600">Explore the products, inspect the code, and read how the main workflows fit together.</p>
        </div>
        <div className="grid gap-8">
          {projects.map((project) => (
            <article key={project.id} className="overflow-hidden rounded-2xl border border-slate-800 light:border-slate-200 bg-slate-900/60 light:bg-white">
              <div className={`grid ${project.preview ? 'lg:grid-cols-2' : ''}`}>
                {project.preview && (
                  <figure className="min-w-0 bg-slate-950 light:bg-slate-100 p-4 sm:p-6 flex flex-col justify-center gap-3">
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} live application`}>
                      <img src={project.preview} alt={project.previewAlt} width="1440" height="900" loading="lazy" decoding="async" className="w-full aspect-[16/10] object-cover object-top rounded-lg border border-slate-700 light:border-slate-300" />
                    </a>
                    <figcaption className="text-xs text-slate-400 light:text-slate-600">{project.previewCaption}</figcaption>
                  </figure>
                )}
                <div className="p-6 sm:p-8 space-y-5 min-w-0">
                  <div className="flex flex-wrap justify-between gap-2 text-xs font-mono text-slate-400 light:text-slate-600"><span>{project.duration}</span><span>{project.status}</span></div>
                  <h3 className="text-2xl font-bold text-slate-100 light:text-slate-900">{project.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-300 light:text-slate-700">{project.tagline}</p>
                  <ul className="flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
                    {project.techStack.map((tech) => <li key={tech} className="text-xs px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-300 light:text-emerald-800">{tech}</li>)}
                  </ul>
                  {project.backendModules && <p className="text-sm text-slate-400 light:text-slate-600">{project.backendModules.length} backend areas · {project.roles.length} roles · {project.workflows.length} assistance workflows</p>}
                  {project.repositoryOwner && <p className="text-sm text-slate-400 light:text-slate-600">Project repository hosted by {project.repositoryOwner}.</p>}
                  <div className="flex flex-wrap gap-3">
                    <button onClick={() => setSelectedProject(project)} aria-label={`Read ${project.title} case study`} className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold bg-emerald-500 text-slate-950 hover:bg-emerald-400">Read case study <ArrowRight size={16} /></button>
                    {project.hasLiveDemo && <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-slate-700 light:border-slate-300 px-4 py-2.5 text-sm text-slate-200 light:text-slate-800">Live demo <ExternalLink size={16} /></a>}
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-slate-700 light:border-slate-300 px-4 py-2.5 text-sm text-slate-200 light:text-slate-800"><Github className="w-4 h-4" /> Source code</a>
                  </div>
                  {!project.hasLiveDemo && <p className="text-xs text-slate-400 light:text-slate-600">Source code available; public demo not linked.</p>}
                  {project.hasLiveDemo && <p className="text-xs text-slate-400 light:text-slate-600">{project.limitations} The case study can be read without signing in.</p>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      {selectedProject && <CaseStudyModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </section>
  );
}
