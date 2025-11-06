import React from 'react';
import { HeartPulse, Footprints, Bed, Battery } from 'lucide-react';

const Card = ({ title, value, unit, Icon, color }) => (
  <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="mt-1 text-2xl font-bold text-gray-900">
          {value}
          {unit && <span className="ml-1 text-base text-gray-500">{unit}</span>}
        </p>
      </div>
      <div className={`h-10 w-10 flex items-center justify-center rounded-lg ${color}`}>
        <Icon className="h-5 w-5" />
      </div>
    </div>
  </div>
);

function HealthCards() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card title="Heart Rate" value="76" unit="bpm" Icon={HeartPulse} color="bg-rose-50 text-rose-600" />
      <Card title="Steps" value="6,842" unit="" Icon={Footprints} color="bg-emerald-50 text-emerald-600" />
      <Card title="Sleep" value="7.2" unit="hrs" Icon={Bed} color="bg-indigo-50 text-indigo-600" />
      <Card title="Battery" value="82%" unit="" Icon={Battery} color="bg-amber-50 text-amber-600" />
    </section>
  );
}

export default HealthCards;
