import React, { useState } from 'react';
import { ShieldCheck, Radio, Database, Server, Cpu } from 'lucide-react';

export const SystemDeepDives = () => {
  const [activeTab, setActiveTab] = useState('auth');

  const topics = [
    { id: 'auth', label: 'JWT & RBAC Security', icon: ShieldCheck },
    { id: 'realtime', label: 'Socket.io Event Dispatch', icon: Radio },
    { id: 'database', label: 'MongoDB Data Modeling', icon: Database },
    { id: 'concurrency', label: 'MySQL Concurrency Control', icon: Server }
  ];

  return (
    <section id="architecture" className="py-16 md:py-24 border-t border-slate-900 dark:border-slate-900 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-medium text-brand-400 bg-brand-950/40 border border-brand-800/40 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL ARCHITECTURE DEEP DIVE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
            How My Applications Work
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400 dark:text-slate-400 light:text-slate-600">
            A technical breakdown of security workflows, real-time event loops, database indexing, and relational conflict handling.
          </p>
        </div>

        {/* Topic Selector Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-slate-800 dark:border-slate-800 light:border-slate-200 pb-3 font-mono text-xs">
          {topics.map((t) => {
            const IconComp = t.icon;
            const isSelected = activeTab === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all ${
                  isSelected
                    ? 'bg-brand-600 text-white font-semibold shadow-glow-sm'
                    : 'bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100 text-slate-400 dark:text-slate-400 light:text-slate-700 hover:text-slate-200 border border-slate-800 dark:border-slate-800 light:border-slate-200'
                }`}
              >
                <IconComp className="w-4 h-4" />
                <span>{t.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab 1: JWT & RBAC Lifecycle */}
        {activeTab === 'auth' && (
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/70 dark:bg-slate-900/70 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 space-y-6">
            <div>
              <h3 className="text-xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                JWT Authentication & Role-Based Access Control (RBAC) Flow
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 mt-1 font-mono">
                Stateless token lifecycle used in Roadside Assistance Platform
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs">
              <div className="p-4 rounded-xl bg-slate-950 dark:bg-slate-950 light:bg-slate-50 border border-slate-800 space-y-2">
                <span className="text-brand-400 font-bold block">1. Authentication</span>
                <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 text-[11px] leading-relaxed">
                  User/Partner submits credentials $\rightarrow$ Server verifies bcrypt hash $\rightarrow$ Issues signed JWT containing <code>{`{ id, role }`}</code>.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 dark:bg-slate-950 light:bg-slate-50 border border-slate-800 space-y-2">
                <span className="text-cyan-400 font-bold block">2. Client Storage</span>
                <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 text-[11px] leading-relaxed">
                  Frontend attaches token to protected HTTP calls via standard header: <code>Authorization: Bearer &lt;token&gt;</code>.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 dark:bg-slate-950 light:bg-slate-50 border border-slate-800 space-y-2">
                <span className="text-amber-400 font-bold block">3. Auth Middleware</span>
                <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 text-[11px] leading-relaxed">
                  <code>authMiddleware</code> intercepts request, verifies token signature with secret, decodes payload, and attaches to <code>req.user</code>.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 dark:bg-slate-950 light:bg-slate-50 border border-slate-800 space-y-2">
                <span className="text-emerald-400 font-bold block">4. RBAC Gate</span>
                <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 text-[11px] leading-relaxed">
                  <code>requireRole(['partner', 'admin'])</code> inspects <code>req.user.role</code>. Blocks unauthorized access with HTTP 403 Forbidden.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Socket.io Real-Time Dispatch */}
        {activeTab === 'realtime' && (
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/70 dark:bg-slate-900/70 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 space-y-6">
            <div>
              <h3 className="text-xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                Socket.io Bi-Directional Event Dispatch Pipeline
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 mt-1 font-mono">
                Live mechanic tracking and instant request state updates without client polling
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
              <div className="p-4 rounded-xl bg-slate-950 dark:bg-slate-950 light:bg-slate-50 border border-slate-800 space-y-2">
                <span className="text-cyan-400 font-bold block">1. Dynamic Room Allocation</span>
                <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 text-[11px] leading-relaxed">
                  When a vehicle owner submits an assistance booking, the WebSocket server isolates a dedicated room: <code>room_request_ID</code>.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 dark:bg-slate-950 light:bg-slate-50 border border-slate-800 space-y-2">
                <span className="text-brand-400 font-bold block">2. Status State Machine</span>
                <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 text-[11px] leading-relaxed">
                  When partner clicks "Accept" or "On the Way", partner client emits <code>update_status</code> $\rightarrow$ Server persists in MongoDB.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 dark:bg-slate-950 light:bg-slate-50 border border-slate-800 space-y-2">
                <span className="text-emerald-400 font-bold block">3. Room Broadcast</span>
                <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 text-[11px] leading-relaxed">
                  Server triggers <code>io.to(room).emit('status_changed')</code>, immediately updating the driver's UI in real time.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: MongoDB Normalization & Indexing */}
        {activeTab === 'database' && (
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/70 dark:bg-slate-900/70 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 space-y-6">
            <div>
              <h3 className="text-xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                MongoDB Schemas, Document Normalization & Indexing
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 mt-1 font-mono">
                Structuring scalable document schemas across Roadside Assistance & LearnNexus
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
              <div className="p-4 rounded-xl bg-slate-950 dark:bg-slate-950 light:bg-slate-50 border border-slate-800 space-y-2">
                <span className="text-emerald-400 font-bold block">Relational Object References</span>
                <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 text-[11px] leading-relaxed">
                  Mongoose models utilize <code>ObjectId</code> references to link <code>ServiceRequests</code> with <code>Users</code>, <code>Partners</code>, and <code>Vehicles</code>, avoiding unbounded document growth.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 dark:bg-slate-950 light:bg-slate-50 border border-slate-800 space-y-2">
                <span className="text-cyan-400 font-bold block">Targeted Query Indexing</span>
                <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 text-[11px] leading-relaxed">
                  Indexes on high-frequency filters: <code>{`{ user_id: 1 }`}</code>, <code>{`{ partner_id: 1 }`}</code>, and <code>{`{ status: 1 }`}</code> to ensure sub-millisecond query latency.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: MySQL Concurrency Control */}
        {activeTab === 'concurrency' && (
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/70 dark:bg-slate-900/70 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 space-y-6">
            <div>
              <h3 className="text-xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                MySQL Concurrency & Double-Booking Prevention
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 mt-1 font-mono">
                Transactional state integrity in Online Parking Management System
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 dark:bg-slate-950 light:bg-slate-50 border border-slate-800 space-y-2 font-mono text-xs">
              <span className="text-amber-400 font-bold block">Pre-Insert Overlap Validation Query</span>
              <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 text-[11px] leading-relaxed">
                Before recording a reservation, the PHP backend queries MySQL checking if an existing booking overlaps:
                <br />
                <code>SELECT COUNT(*) FROM reservations WHERE listing_id = ? AND NOT (end_time &lt;= ? OR start_time &gt;= ?)</code>
                <br />
                The reservation transaction is committed only if conflict count equals 0.
              </p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default SystemDeepDives;
