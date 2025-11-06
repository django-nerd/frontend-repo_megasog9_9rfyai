import React from 'react';
import { MapPin, ShieldCheck, Signal, Activity } from 'lucide-react';

function StatCard({ icon: Icon, label, value, badge }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100 flex items-center gap-4">
      <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
        <Icon className="h-5 w-5" />
      </div>
      <div className="flex-1">
        <p className="text-sm text-gray-500">{label}</p>
        <p className="text-lg font-semibold text-gray-900">{value}</p>
      </div>
      {badge && (
        <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600">{badge}</span>
      )}
    </div>
  );
}

function DashboardOverview() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard icon={Signal} label="Connection" value="Online" badge="Companion" />
      <StatCard icon={MapPin} label="Status" value="At Home" badge="Safe Zone" />
      <StatCard icon={ShieldCheck} label="Geofence" value="Active" badge="2 zones" />
      <StatCard icon={Activity} label="Today" value="3 alerts" badge="View" />
    </section>
  );
}

export default DashboardOverview;
