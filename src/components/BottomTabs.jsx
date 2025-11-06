import React from 'react';
import { Home, HeartPulse, BellRing, Users2, Settings } from 'lucide-react';

function TabButton({ icon: Icon, label, active, onClick }) {
  return (
    <button onClick={onClick} className={`flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-xl ${active ? 'text-emerald-600 bg-emerald-50' : 'text-gray-600 hover:bg-gray-50'}`}>
      <Icon className="h-5 w-5" />
      <span className="text-[11px] font-medium">{label}</span>
    </button>
  );
}

function BottomTabs({ current, onChange }) {
  const tabs = [
    { key: 'home', label: 'Home', icon: Home },
    { key: 'health', label: 'Health', icon: HeartPulse },
    { key: 'alerts', label: 'Alerts', icon: BellRing },
    { key: 'circle', label: 'Circle', icon: Users2 },
    { key: 'settings', label: 'Settings', icon: Settings },
  ];
  return (
    <nav className="sticky bottom-4 z-30">
      <div className="mx-auto max-w-md rounded-2xl border border-gray-200 bg-white/90 backdrop-blur px-2 py-2 shadow-lg">
        <div className="grid grid-cols-5 gap-1">
          {tabs.map(t => (
            <TabButton key={t.key} icon={t.icon} label={t.label} active={current===t.key} onClick={() => onChange(t.key)} />
          ))}
        </div>
      </div>
    </nav>
  );
}

export default BottomTabs;
