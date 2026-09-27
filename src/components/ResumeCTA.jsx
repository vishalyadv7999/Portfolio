import React from 'react';
import { FileText, ArrowRight, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export const ResumeCTA = () => {
  return (
    <section className="py-16 md:py-20 border-t border-slate-900 dark:border-slate-900 light:border-slate-200 bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border border-emerald-500/30 dark:border-emerald-500/30 light:border-emerald-200 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Left: Text */}
          <div className="space-y-2 text-left max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-medium text-emerald-400 bg-emerald-950/40 border border-emerald-800/40">
              <FileText className="w-3.5 h-3.5" />
              <span>OFFICIAL PROFILE</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
              Want the Complete Profile?
            </h3>
            <p className="text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed font-sans">
              Read my experience, education and projects in a downloadable PDF resume.
            </p>
          </div>

          {/* Right: Actions */}
          <div className="flex flex-wrap items-center gap-3.5 font-mono text-xs sm:text-sm shrink-0">
            <a
              href={personalInfo.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-950 dark:bg-slate-950 light:bg-slate-100 hover:bg-slate-800 text-slate-200 dark:text-slate-200 light:text-slate-800 border border-slate-800 transition-colors"
            >
              <span>View Resume</span>
              <ArrowRight className="w-4 h-4 text-emerald-400" />
            </a>

            <a
              href={personalInfo.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              download="Vishal_Yadav_Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold transition-all shadow-sm"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ResumeCTA;
