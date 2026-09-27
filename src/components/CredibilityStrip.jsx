import React from 'react';

export const CredibilityStrip = () => {
  const items = [
    { value: "3", label: "Full-Stack Projects", desc: "MERN, Real-Time & SQL" },
    { value: "2", label: "Internships", desc: "IBM PBEL & Unified Mentors" },
    { value: "MERN", label: "Full-Stack Stack", desc: "React, Node, Express, Mongo" },
    { value: "REST APIs", label: "Backend Architecture", desc: "6 Backend Modules" },
    { value: "JWT & RBAC", label: "Security & Auth", desc: "User, Partner & Admin Roles" },
    { value: "Socket.io", label: "Real-Time Systems", desc: "Live Dispatch Tracking" }
  ];

  return (
    <section className="border-y border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 bg-slate-950/70 dark:bg-slate-950/70 light:bg-slate-50/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-4 text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-800/80 dark:divide-slate-800/80 light:divide-slate-200 font-mono">
          {items.map((item, idx) => (
            <div key={idx} className={`space-y-1 ${idx > 0 ? 'pt-4 sm:pt-0' : ''}`}>
              <div className="text-xl sm:text-2xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
                {item.value}
              </div>
              <div className="text-[11px] font-semibold text-emerald-400">
                {item.label}
              </div>
              <div className="text-[10px] text-slate-400 dark:text-slate-400 light:text-slate-500 truncate px-1">
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CredibilityStrip;
