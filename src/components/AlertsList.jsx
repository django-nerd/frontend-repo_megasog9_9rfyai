import React from 'react';
import { AlertTriangle, BellRing } from 'lucide-react';

const AlertItem = ({ tone = 'red', title, time, location }) => {
  const toneMap = {
    red: 'bg-red-50 text-red-700 border-red-100',
    amber: 'bg-amber-50 text-amber-700 border-amber-100',
    orange: 'bg-orange-50 text-orange-700 border-orange-100',
  };

  return (
    <div className={`rounded-xl border p-4 flex items-start gap-3 ${toneMap[tone]}`}>
      <div className="mt-0.5">
        <AlertTriangle className="h-5 w-5" />
      </div>
      <div className="flex-1">
        <p className="font-semibold">{title}</p>
        <p className="text-sm opacity-80">{time} • {location}</p>
      </div>
      <button className="shrink-0 inline-flex items-center gap-1 rounded-lg bg-white/60 hover:bg-white text-current px-3 py-1 text-sm font-medium">
        Resolve
      </button>
    </div>
  );
};

function AlertsList() {
  return (
    <section className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
          <BellRing className="h-5 w-5 text-emerald-600" /> Active Alerts
        </h3>
        <button className="text-sm text-emerald-700 hover:text-emerald-800 font-medium">View all</button>
      </div>
      <div className="space-y-3">
        <AlertItem tone="red" title="SOS Triggered" time="2m ago" location="Maple & 3rd" />
        <AlertItem tone="orange" title="Geofence Breach" time="12m ago" location="Left Home Zone" />
        <AlertItem tone="amber" title="Low Battery" time="35m ago" location="Device at 15%" />
      </div>
    </section>
  );
}

export default AlertsList;
