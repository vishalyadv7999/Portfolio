import React from 'react';
import { ShieldCheck, Lock, Server, Database, Radio, Cpu, Layout } from 'lucide-react';

export const TechnicalDeepDive = () => {
  const topics = [
    {
      id: 'jwt',
      title: 'JWT Authentication',
      where: 'Roadside Assistance Platform',
      icon: Lock,
      what: 'Stateless JSON Web Tokens signed with secret keys, transmitting authenticated user identity across HTTP requests.',
      why: 'Eliminates server session storage, allowing the Express API to remain stateless while securely asserting user identity across distributed requests.'
    },
    {
      id: 'rbac',
      title: 'Role-Based Access Control (RBAC)',
      where: 'Roadside Assistance (User / Partner / Admin)',
      icon: ShieldCheck,
      what: 'Middleware inspection layer decoding token payloads and enforcing permission boundaries before controller dispatch.',
      why: 'Prevents privilege escalation by ensuring partners cannot access admin audit logs and users cannot accept service requests.'
    },
    {
      id: 'rest',
      title: 'RESTful API Architecture',
      where: '6 Backend Modules in Roadside Assistance & LearnNexus',
      icon: Server,
      what: 'Predictable HTTP verbs (GET, POST, PUT, PATCH, DELETE) mapped to resource endpoints with consistent JSON success/error envelopes.',
      why: 'Decouples backend logic from frontend views, making APIs testable in Postman and scalable for future client integrations.'
    },
    {
      id: 'mongodb',
      title: 'MongoDB Data Modeling & Indexing',
      where: 'LearnNexus (5 Entities) & Roadside Assistance',
      icon: Database,
      what: 'Document schemas with ObjectId referencing and compound indexing on user_id, partner_id, and status keys.',
      why: 'Maintains low query latency across frequent status lookups without loading entire nested structures into memory.'
    },
    {
      id: 'concurrency',
      title: 'MySQL Booking Availability',
      where: 'Online Parking Management System',
      icon: Cpu,
      what: 'Parking slot availability checks and database updates during reservation workflows.',
      why: 'Reduces booking conflicts. Simultaneous booking guarantees require a verified locking strategy and concurrency tests.'
    },
    {
      id: 'socketio',
      title: 'Socket.io Event Dispatch',
      where: 'Roadside Assistance Live Mechanic Tracking',
      icon: Radio,
      what: 'Bi-directional WebSocket event channels isolating room-specific broadcasts for active request lifecycles.',
      why: 'Provides instant visual progress updates (Accepted, On Way, Arrived) without battery-draining client polling.'
    },
    {
      id: 'react',
      title: 'Reusable React Components',
      where: 'LearnNexus & Roadside Assistance Frontends',
      icon: Layout,
      what: 'Stateless UI component hierarchy with props, custom hooks, and centralized state handlers.',
      why: 'Ensures predictable one-way data flow, rapid UI rendering cycles, and less repeated code across complex dashboards.'
    }
  ];

  return (
    <section id="architecture" className="py-20 md:py-28 border-t border-slate-900 dark:border-slate-900 light:border-slate-200 bg-slate-950/40 dark:bg-slate-950/40 light:bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Heading */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="font-mono text-emerald-400 text-sm font-semibold">04.</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
              Engineering Behind the Projects
            </h2>
            <div className="h-[1px] bg-slate-800 dark:bg-slate-800 light:bg-slate-200 flex-1 ml-4 max-w-xs" />
          </div>
          <p className="text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-2xl">
            A technical breakdown of security lifecycles, database indexing, and real-time event mechanisms implemented across my codebases.
          </p>
        </div>

        {/* Technical Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((item) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.id}
                className="p-6 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 hover:border-emerald-500/40 transition-all space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-800/80 dark:border-slate-800/80 light:border-slate-100 pb-3">
                    <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-emerald-400">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                      Technical Spec
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                    {item.title}
                  </h3>
                  <span className="text-xs font-mono text-emerald-400 block font-medium">
                    {item.where}
                  </span>

                  <div className="space-y-2 text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed font-sans">
                    <p>
                      <strong className="text-slate-200 dark:text-slate-200 light:text-slate-800 font-mono text-[11px] block">
                        What It Is:
                      </strong>
                      {item.what}
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-50 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700">
                  <strong className="text-emerald-400 font-mono text-[10px] uppercase block mb-0.5">
                    Why It Matters:
                  </strong>
                  <p className="text-[11px] leading-relaxed">{item.why}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Sub-Section: How My Applications Work (System Diagram) */}
        <div className="pt-8 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 space-y-6">
          <div className="max-w-3xl">
            <h3 className="text-xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
              How My Applications Work
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 mt-1">
              End-to-end data pipelines connecting client interfaces, secure gateway middleware, and persistent storage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 font-mono text-xs">
            <div className="p-4 rounded-2xl bg-slate-950 dark:bg-slate-950 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200 space-y-2">
              <span className="text-emerald-400 font-bold block">01. Frontend Layer</span>
              <strong className="text-slate-100 dark:text-slate-100 light:text-slate-900 text-sm block">React.js Client</strong>
              <p className="text-[11px] text-slate-300 dark:text-slate-300 light:text-slate-600 font-sans leading-relaxed">
                Responsive UI components dispatching authenticated Axios REST requests and subscribing to WebSocket event rooms.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950 dark:bg-slate-950 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200 space-y-2">
              <span className="text-emerald-400 font-bold block">02. Transport Layer</span>
              <strong className="text-slate-100 dark:text-slate-100 light:text-slate-900 text-sm block">REST & Socket.io</strong>
              <p className="text-[11px] text-slate-300 dark:text-slate-300 light:text-slate-600 font-sans leading-relaxed">
                HTTPS REST endpoints for transactional state changes + Socket.io bi-directional streams for real-time live dispatch.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950 dark:bg-slate-950 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200 space-y-2">
              <span className="text-emerald-400 font-bold block">03. Backend & Security</span>
              <strong className="text-slate-100 dark:text-slate-100 light:text-slate-900 text-sm block">Node.js + JWT Guard</strong>
              <p className="text-[11px] text-slate-300 dark:text-slate-300 light:text-slate-600 font-sans leading-relaxed">
                Express gateway verifying bearer tokens, enforcing RBAC authorization boundaries, and delegating to modular controllers.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950 dark:bg-slate-950 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200 space-y-2">
              <span className="text-emerald-400 font-bold block">04. Data Layer</span>
              <strong className="text-slate-100 dark:text-slate-100 light:text-slate-900 text-sm block">MongoDB & MySQL</strong>
              <p className="text-[11px] text-slate-300 dark:text-slate-300 light:text-slate-600 font-sans leading-relaxed">
                Normalized Mongoose document collections with query indexing + relational MySQL schemas with booking availability checks.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TechnicalDeepDive;
