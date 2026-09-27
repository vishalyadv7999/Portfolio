import React, { useEffect, useRef, useState } from 'react';
import { Mail, Copy, Check, Send, ExternalLink, MessageSquare } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';
import { personalInfo } from '../data/portfolio';

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [roleType, setRoleType] = useState('Software Engineering Internship');
  const [recruiterMessage, setRecruiterMessage] = useState('');

  const [copyError, setCopyError] = useState('');
  const copyTimer = useRef(null);
  useEffect(() => () => clearTimeout(copyTimer.current), []);
  const copyEmail = async () => {
    clearTimeout(copyTimer.current);
    setCopied(false);
    setCopyError('');
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      copyTimer.current = setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopyError('Copy unavailable. Select the email address above or use Send Mail.');
    }
  };

  const handleComposeMail = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Software Engineering Opportunity: ${roleType}`);
    const body = encodeURIComponent(
      recruiterMessage 
        ? `${recruiterMessage}\n\nCandidate: ${personalInfo.name}`
        : `Hi Vishal,\n\nI reviewed your portfolio and would like to discuss an opportunity regarding a ${roleType} role.\n\nBest regards,`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-slate-900 dark:border-slate-900 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Heading */}
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-3">
            <span className="font-mono text-emerald-400 text-sm font-semibold light:text-emerald-700">06.</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
              Let's Connect.
            </h2>
            <div className="h-[1px] bg-slate-800 dark:bg-slate-800 light:bg-slate-200 flex-1 ml-4 max-w-xs" />
          </div>
          <p className="text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600">
            Interested in software engineering internships and graduate opportunities in India and internationally. Share the role, location or remote arrangement, and expected start date so we can discuss the fit.
          </p>
          <dl className="grid gap-4 sm:grid-cols-3 text-sm">
            <div><dt className="text-slate-400 light:text-slate-600">Based in</dt><dd className="mt-1 text-slate-100 light:text-slate-900">{personalInfo.location}</dd></div>
            <div><dt className="text-slate-400 light:text-slate-600">Time zone</dt><dd className="mt-1 text-slate-100 light:text-slate-900">{personalInfo.timezone}</dd></div>
            <div><dt className="text-slate-400 light:text-slate-600">Graduation</dt><dd className="mt-1 text-slate-100 light:text-slate-900">{personalInfo.graduation}</dd></div>
          </dl>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Email, Socials (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Primary Email Card */}
            <div className="p-6 rounded-2xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border border-emerald-500/40 dark:border-emerald-500/40 light:border-emerald-300 shadow-lg space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-emerald-400 light:text-emerald-700 light:bg-slate-100">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block light:text-slate-600">
                    Direct Email
                  </span>
                  <span className="text-sm sm:text-base font-mono font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 break-all">
                    {personalInfo.email}
                  </span>
                </div>
              </div>

              <div className="flex gap-2 font-mono text-xs">
                <button
                  onClick={copyEmail}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-slate-950 dark:bg-slate-950 light:bg-slate-100 hover:bg-slate-800 text-slate-200 dark:text-slate-200 light:text-slate-800 border border-slate-800 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400 light:text-emerald-700" />
                      <span className="text-emerald-400 light:text-emerald-700">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Mail</span>
                </a>
              </div>
            </div>

            <p role="status" aria-live="polite" className="text-sm text-slate-300 light:text-slate-700">{copyError || (copied ? "Email copied." : "")}</p>
            {/* Social Profile Cards */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 hover:border-emerald-500/40 transition-colors flex items-center justify-between group"
              >
                <div className="flex items-center gap-2.5">
                  <Linkedin className="w-4 h-4 text-emerald-400 light:text-emerald-700" />
                  <span className="text-xs font-bold text-slate-200 dark:text-slate-200 light:text-slate-800">LinkedIn</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400 transition-colors light:text-slate-600" />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 hover:border-emerald-500/40 transition-colors flex items-center justify-between group"
              >
                <div className="flex items-center gap-2.5">
                  <Github className="w-4 h-4 text-slate-200 light:text-slate-800" />
                  <span className="text-xs font-bold text-slate-200 dark:text-slate-200 light:text-slate-800">GitHub</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400 transition-colors light:text-slate-600" />
              </a>
            </div>

          </div>

          {/* Right Column: Pre-Configured Recruiter Composer (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 space-y-4">
            <div className="flex items-center gap-2 border-b border-slate-800/80 dark:border-slate-800/80 light:border-slate-100 pb-3">
              <MessageSquare className="w-4 h-4 text-emerald-400 light:text-emerald-700" />
              <h3 className="text-sm sm:text-base font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                Quick Recruiter / Hiring Message Drafter
              </h3>
            </div>

            <form onSubmit={handleComposeMail} className="space-y-4 text-xs font-mono">
              <div>
                <label htmlFor="opportunity-focus" className="block text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1.5 font-semibold">
                  Opportunity Focus
                </label>
                <select id="opportunity-focus"
                  value={roleType}
                  onChange={(e) => setRoleType(e.target.value)}
                  className="w-full p-2.5 rounded-lg bg-slate-950 dark:bg-slate-950 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-300 text-slate-200 dark:text-slate-200 light:text-slate-800 focus:outline-none focus:border-emerald-500 font-sans"
                >
                  <option value="Full-Time Software Engineer">Full-Time Software Engineer</option>
                  <option value="Full-Stack Developer">Full-Stack Developer</option>
                  <option value="Backend Developer">Backend Developer</option>
                  <option value="Software Engineering Internship">Software Engineering Internship</option>
                  <option value="Technical Collaboration">Technical Collaboration</option>
                </select>
              </div>

              <div>
                <label htmlFor="recruiter-message" className="block text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1.5 font-semibold">
                  Message / Introduction (Optional)
                </label>
                <textarea id="recruiter-message"
                  rows="4"
                  value={recruiterMessage}
                  onChange={(e) => setRecruiterMessage(e.target.value)}
                  placeholder="Hi Vishal, we reviewed your projects and would like to schedule an introductory technical interview..."
                  className="w-full p-3 rounded-lg bg-slate-950 dark:bg-slate-950 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-300 text-slate-200 dark:text-slate-200 light:text-slate-800 focus:outline-none focus:border-emerald-500 font-sans text-xs sm:text-sm placeholder:text-slate-600"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-sans font-semibold text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Launch Email Client with Pre-filled Subject</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
