import React from 'react';


export const ProjectMatrix = () => {
  const matrixData = [
    {
      name: "Roadside Assistance",
      role: "Flagship #1",
      frontend: "React.js + Tailwind CSS",
      backend: "Node.js + Express.js",
      database: "MongoDB (Mongoose)",
      auth: "JWT + RBAC (3 Roles)",
      realtime: "Socket.io Live Dispatch",
      architecture: "6 Backend Modules"
    },
    {
      name: "LearnNexus",
      role: "Flagship #2",
      frontend: "React.js + Component Tree",
      backend: "Node.js + Express.js",
      database: "MongoDB (5 Data Entities)",
      auth: "Session / REST Auth",
      realtime: "REST Progress Recalculation",
      architecture: "Roadmaps & Study Plans"
    },
    {
      name: "Parking Management",
      role: "Supporting #3",
      frontend: "HTML5 + CSS3 + JS",
      backend: "PHP Scripts",
      database: "MySQL Relational Engine",
      auth: "Form & Session Auth",
      realtime: "Live Slot Availability Updates",
      architecture: "Google Maps & GPS Integration"
    }
  ];

  return (
    <section id="matrix" className="py-16 md:py-24 border-t border-slate-900 dark:border-slate-900 light:border-slate-200 bg-slate-950/30 dark:bg-slate-950/30 light:bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-medium text-purple-400 bg-purple-950/40 border border-purple-800/40 mb-3">
            <span>TECHNICAL COMPARISON</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
            Cross-Project Architecture Matrix
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400 dark:text-slate-400 light:text-slate-600">
            A quick-scan engineering comparison of stacks, architectural layers, and security mechanisms across all built applications.
          </p>
        </div>

        {/* Matrix Table */}
        <div className="overflow-x-auto rounded-xl border border-slate-800 dark:border-slate-800 light:border-slate-200 shadow-sm bg-slate-900/60 dark:bg-slate-900/60 light:bg-white">
          <table className="w-full text-left text-xs sm:text-sm font-mono border-collapse">
            <thead>
              <tr className="bg-slate-950 dark:bg-slate-950 light:bg-slate-100 border-b border-slate-800 dark:border-slate-800 light:border-slate-200 text-slate-400 dark:text-slate-400 light:text-slate-600 uppercase text-[11px]">
                <th className="py-3.5 px-4 font-semibold">Project</th>
                <th className="py-3.5 px-4 font-semibold">Frontend</th>
                <th className="py-3.5 px-4 font-semibold">Backend</th>
                <th className="py-3.5 px-4 font-semibold">Database</th>
                <th className="py-3.5 px-4 font-semibold">Auth & Security</th>
                <th className="py-3.5 px-4 font-semibold">Real-Time / Sync</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/70 dark:divide-slate-800/70 light:divide-slate-200 text-slate-200 dark:text-slate-200 light:text-slate-800">
              {matrixData.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-800/40 dark:hover:bg-slate-800/40 light:hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-4 font-sans font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                    <span className="block">{row.name}</span>
                    <span className="text-[11px] font-mono text-brand-400 font-normal">{row.role}</span>
                  </td>
                  <td className="py-4 px-4 text-slate-300 dark:text-slate-300 light:text-slate-700">{row.frontend}</td>
                  <td className="py-4 px-4 text-slate-300 dark:text-slate-300 light:text-slate-700">{row.backend}</td>
                  <td className="py-4 px-4 text-emerald-400 font-semibold">{row.database}</td>
                  <td className="py-4 px-4 text-amber-400">{row.auth}</td>
                  <td className="py-4 px-4 text-cyan-400">{row.realtime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};

export default ProjectMatrix;
