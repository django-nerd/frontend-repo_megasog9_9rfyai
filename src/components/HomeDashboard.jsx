import React from 'react';
import { Bell, MapPin, Shield, HeartPulse, Footprints, Moon, Battery, Plus, Map, Users } from 'lucide-react';

function Stat({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
      <div className="h-10 w-10 grid place-items-center rounded-lg bg-emerald-50 text-emerald-600"><Icon className="h-5 w-5" /></div>
      <div>
        <p className="text-xs text-gray-500">{label}</p>
        <p className="text-lg font-semibold text-gray-900">{value}</p>
      </div>
    </div>
  );
}

function AlertCard({ tone = 'red', title, meta }) {
  const toneMap = {
    red: 'border-red-100 bg-red-50 text-red-700',
    yellow: 'border-amber-100 bg-amber-50 text-amber-700',
    orange: 'border-orange-100 bg-orange-50 text-orange-700',
  };
  return (
    <div className={`rounded-xl border p-4 ${toneMap[tone]}`}>
      <p className="font-semibold">{title}</p>
      <p className="text-sm opacity-80">{meta}</p>
    </div>
  );
}

function HomeDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Good Morning, Ayesha!</h2>
          <p className="text-gray-600">All systems connected.</p>
        </div>
        <button className="rounded-full bg-white p-2 shadow-sm border border-gray-200 text-gray-700 hover:bg-gray-50"><Bell className="h-5 w-5" /></button>
      </div>

      <div className="rounded-2xl overflow-hidden border border-gray-100 bg-white">
        <div className="h-56 w-full bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjIzNTg2NzV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center" />
        <div className="p-4 flex items-center justify-between">
          <div>
            <p className="font-semibold text-gray-900 flex items-center gap-2"><MapPin className="h-4 w-4 text-emerald-600" /> Ahmed is currently at Home</p>
            <p className="text-sm text-gray-600">Safe Zone: Home Area 🏠</p>
          </div>
          <button className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm hover:bg-gray-50"><Map className="h-4 w-4" /> Open Map</button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Stat icon={HeartPulse} label="Heart Rate" value="78 bpm" />
        <Stat icon={Footprints} label="Steps" value="3,540" />
        <Stat icon={Moon} label="Sleep" value="7h 20m" />
        <Stat icon={Battery} label="Battery" value="92%" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="space-y-3 lg:col-span-2">
          <AlertCard tone="red" title="SOS Alert" meta="Triggered 10:43 AM – Main Street" />
          <AlertCard tone="yellow" title="Geofence Breach" meta="Left Home Zone 9:20 AM" />
          <AlertCard tone="orange" title="Battery Low" meta="Device at 15% – Connect to charger" />
        </div>
        <div className="space-y-3">
          <button className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-4 py-3"><Plus className="h-5 w-5" /> Add Reminder</button>
          <button className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 font-semibold px-4 py-3"><Shield className="h-5 w-5" /> Manage Safe Zones</button>
          <button className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 font-semibold px-4 py-3"><Users className="h-5 w-5" /> Invite Care Person</button>
        </div>
      </div>

      <div className="rounded-2xl border border-gray-100 bg-white p-4">
        <div className="flex items-center justify-between">
          <p className="font-semibold text-gray-900">Care Circle</p>
          <button className="text-sm text-emerald-700 hover:text-emerald-800 font-medium">View All</button>
        </div>
        <div className="mt-3 flex -space-x-3">
          <img className="h-10 w-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1667804534540-43f5153561cc?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBaG1lZHxlbnwwfDB8fHwxNzYyNDE1OTY0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Ahmed" />
          <img className="h-10 w-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1731055018837-08f15da1c712?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTYXJhaHxlbnwwfDB8fHwxNzYyNDE1OTc5fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Sarah" />
          <img className="h-10 w-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1549317079-75d70028e3a5?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBeWVzaGF8ZW58MHwwfHx8MTc2MjQxNTk3OXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Ayesha" />
          <div className="h-10 w-10 grid place-items-center rounded-full border-2 border-white bg-gray-100 text-gray-600 text-sm">+3</div>
        </div>
      </div>
    </div>
  );
}

export default HomeDashboard;
