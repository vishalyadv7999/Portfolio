import { useState } from 'react';
import { projects } from '../data/portfolio';

export function ArchitectureDiagram({ projectId }) {
  const project = projects.find(item => item.id === projectId);
  const [view, setView] = useState('overview');
  if (!project) return null;
  const isRoadside = projectId === 'roadside-assistance';
  const layers = view === 'auth' ? [
    ['Sign in', 'The client submits credentials to the backend.'],
    ['Authenticate', 'The server validates credentials and issues a JWT.'],
    ['Authorize', 'Protected requests require a valid token and permission for the requested action.'],
  ] : view === 'realtime' ? [
    ['Request', 'A driver creates an assistance request.'],
    ['Update', 'A service partner updates the request status.'],
    ['Notify', 'Socket.io communicates status updates to the client.'],
  ] : Object.entries(project.architecture);
  return <div className="space-y-4">
    {isRoadside && <div className="flex flex-wrap gap-2" role="group" aria-label="Architecture views">
      {[['overview','System architecture'],['auth','JWT & roles'],['realtime','Real-time updates']].map(([id,label]) => <button key={id} onClick={() => setView(id)} aria-pressed={view === id} className={`px-3 py-2 text-sm rounded-lg border ${view === id ? 'bg-emerald-500 text-slate-950 border-emerald-500' : 'bg-slate-950 text-slate-300 border-slate-700 light:bg-white light:text-slate-700 light:border-slate-300'}`}>{label}</button>)}
    </div>}
    <ol className="grid gap-3 sm:grid-cols-2" aria-label="Application layers">
      {layers.map(([label,description],index) => <li key={label} className="p-4 rounded-xl bg-slate-950 light:bg-slate-50 border border-slate-800 light:border-slate-200">
        <h4 className="font-semibold text-emerald-300 light:text-emerald-800 capitalize">{index + 1}. {label}</h4>
        <p className="mt-2 text-sm text-slate-300 light:text-slate-700">{description}</p>
      </li>)}
    </ol>
    <p className="text-xs text-slate-400 light:text-slate-600">High-level workflow overview. Source code is linked above.</p>
  </div>;
}
