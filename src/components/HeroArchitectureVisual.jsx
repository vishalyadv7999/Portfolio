import React, { useState } from 'react';
import { Terminal, ArrowRight } from 'lucide-react';

export const HeroArchitectureVisual = () => {
  const [activeNode, setActiveNode] = useState('server');

  const nodes = [
    {
      id: 'client',
      label: 'React.js Client',
      role: 'Frontend UI & Component State',
      type: 'Layer 01',
      details: 'Modular responsive React UI consuming REST APIs and listening to Socket.io event rooms.'
    },
    {
      id: 'api',
      label: 'REST APIs & Socket.io',
      role: 'Transport & Event Streaming',
      type: 'Layer 02',
      details: 'Stateless HTTPS endpoints + WebSocket bi-directional channels for real-time dispatch updates.'
    },
    {
      id: 'server',
      label: 'Node.js & Express',
      role: 'JWT Security & RBAC Middleware',
      type: 'Layer 03',
      details: 'Modular backend routes, bcrypt hashing, stateless JWT issuance, and role-based permissions.'
    },
    {
      id: 'database',
      label: 'MongoDB & MySQL',
      role: 'Document Store & Relational Schemas',
      type: 'Layer 04',
      details: 'Normalized MongoDB document schemas with query indexing + MySQL tables with booking availability checks.'
    }
  ];

  const active = nodes.find(n => n.id === activeNode) || nodes[2];

  return (
    <div className="relative w-full max-w-md mx-auto lg:max-w-none rounded-2xl bg-slate-950/90 dark:bg-slate-950/90 light:bg-white border border-slate-800/90 dark:border-slate-800/90 light:border-slate-200 p-5 sm:p-6 shadow-2xl backdrop-blur-md space-y-4 font-mono text-xs">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800/80 dark:border-slate-800/80 light:border-slate-100 pb-3">
        <div className="flex items-center gap-2 text-slate-300 dark:text-slate-300 light:text-slate-700">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-semibold uppercase tracking-wider text-[11px]">System Architecture</span>
        </div>
        <span className="text-[10px] text-slate-400 light:text-slate-600">Interactive Inspector</span>
      </div>

      {/* Vertical Pipeline Nodes */}
      <div className="space-y-2">
        {nodes.map((node, i) => {
          const isSelected = activeNode === node.id;
          return (
            <div key={node.id}>
              <button
                type="button"
                onMouseEnter={() => setActiveNode(node.id)}
                onClick={() => setActiveNode(node.id)}
                aria-pressed={isSelected}
                className={`w-full text-left p-3 rounded-xl transition-all flex items-center justify-between border ${
                  isSelected
                    ? 'bg-slate-900 dark:bg-slate-900 light:bg-emerald-50/60 border-emerald-500/50 dark:border-emerald-500/50 light:border-emerald-300 shadow-sm'
                    : 'bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50 border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-emerald-400 font-bold light:text-emerald-700">{node.type}</span>
                    <span className="font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 text-xs">
                      {node.label}
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-500 block mt-0.5">
                    {node.role}
                  </span>
                </div>
                <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'text-emerald-400 translate-x-1' : 'text-slate-600'}`} />
              </button>

              {/* Connecting line */}
              {i < nodes.length - 1 && (
                <div className="flex justify-center my-0.5">
                  <div className="w-[1px] h-2 bg-slate-800 dark:bg-slate-800 light:bg-slate-300" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Live Node Inspection Panel */}
      <div className="p-3.5 rounded-xl bg-slate-900/90 dark:bg-slate-900/90 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200 space-y-1">
        <div className="flex items-center justify-between text-[11px]">
          <span className="text-emerald-400 font-semibold flex items-center gap-1.5 light:text-emerald-700">
            <Terminal className="w-3.5 h-3.5" />
            {active.label}
          </span>
          <span className="text-slate-400 text-[10px] light:text-slate-600">Implementation</span>
        </div>
        <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-700 font-sans leading-relaxed pt-1">
          {active.details}
        </p>
      </div>

    </div>
  );
};

export default HeroArchitectureVisual;
