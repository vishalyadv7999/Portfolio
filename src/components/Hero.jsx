import React from 'react';
import { ArrowRight, FileText, Mail, MapPin, CheckCircle2 } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';
import { personalInfo } from '../data/portfolio';
import { HeroArchitectureVisual } from './HeroArchitectureVisual';

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-grid-pattern">
      {/* Subtle background ambient light */}
      <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-emerald-500/5 dark:bg-emerald-500/5 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Personal Positioning & Intentional Typography */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 light:text-emerald-700">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>SOFTWARE DEVELOPER</span>
            </div>

            {/* Display Headline */}
            <div className="space-y-3">
              <div className="flex items-center gap-4 sm:gap-5">
                <img
                  src={personalInfo.photoPath}
                  alt="Portrait of Vishal Yadav"
                  width="900"
                  height="957"
                  fetchPriority="high"
                  decoding="async"
                  className="w-20 h-20 sm:w-28 sm:h-28 shrink-0 rounded-full object-cover object-[50%_25%] border-2 border-emerald-500/40 p-1 bg-slate-900 light:bg-white shadow-lg"
                />
                <h1 className="min-w-0 text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-900 leading-[1.08]">
                  {personalInfo.name}
                </h1>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-400 dark:text-slate-400 light:text-slate-600 font-sans tracking-tight">
                Full-stack developer focused on backend engineering.
              </h2>
            </div>

            {/* Concise Supporting Narrative */}
            <p className="text-base sm:text-lg text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed max-w-2xl">
              B.Tech CSE student graduating in July 2027. I build React and Node.js applications with authentication, booking workflows, and real-time updates.
            </p>

            {/* Factual Meta Bar */}
            <div className="inline-flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-mono text-slate-400 py-1.5 px-3.5 rounded-lg bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-200 light:text-slate-600">
              <span className="flex items-center gap-1.5 text-slate-200 dark:text-slate-200 light:text-slate-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 light:text-emerald-700" />
                <span>IMS Engineering College • GPA {personalInfo.gpa}</span>
              </span>
              <span aria-hidden="true" className="hidden sm:inline text-slate-600">•</span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 light:text-emerald-700" />
                <span>Delhi NCR, India • IST (UTC+5:30)</span>
              </span>
            </div>

            <p className="text-sm text-slate-300 light:text-slate-700">{personalInfo.availability}. Contact me to discuss start dates and working arrangements.</p>
            {/* Primary & Secondary Actions */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-mono transition-all duration-200 shadow-sm group"
              >
                <span>View Selected Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={personalInfo.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                download="Vishal_Yadav_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg bg-slate-900 dark:bg-slate-900 light:bg-slate-100 text-slate-200 dark:text-slate-200 light:text-slate-800 hover:bg-slate-800 dark:hover:bg-slate-800 light:hover:bg-slate-200 border border-slate-800 dark:border-slate-800 light:border-slate-300 font-mono transition-colors"
              >
                <FileText className="w-4 h-4 text-emerald-400 light:text-emerald-700" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg text-slate-400 hover:text-emerald-400 bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100 hover:bg-slate-800 border border-slate-800 dark:border-slate-800 light:border-slate-300 transition-colors light:text-slate-600"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg text-slate-400 hover:text-emerald-400 bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100 hover:bg-slate-800 border border-slate-800 dark:border-slate-800 light:border-slate-300 transition-colors light:text-slate-600"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-lg text-slate-400 hover:text-emerald-400 bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100 hover:bg-slate-800 border border-slate-800 dark:border-slate-800 light:border-slate-300 transition-colors light:text-slate-600"
                aria-label="Email Vishal"
              >
                <Mail className="w-4 h-4" />
              </a>
              <span className="text-xs font-mono text-slate-400 light:text-slate-600 break-all">
                vishalyadv7999@gmail.com
              </span>
            </div>

          </div>

          {/* Right Column: Clean System Architecture Visualizer */}
          <div className="lg:col-span-5">
            <HeroArchitectureVisual />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
