import React from 'react';
import HeroCover from './components/HeroCover';
import DashboardOverview from './components/DashboardOverview';
import HealthCards from './components/HealthCards';
import AlertsList from './components/AlertsList';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <header className="mx-auto max-w-7xl px-6 md:px-10 pt-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-emerald-500 grid place-items-center text-white font-bold">CL</div>
            <span className="font-semibold text-gray-900">CareLink</span>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <button className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100">Docs</button>
            <button className="px-4 py-2 rounded-lg text-sm font-medium bg-gray-900 text-white hover:bg-black">Sign in</button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 md:px-10 py-8 space-y-8">
        <HeroCover />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <DashboardOverview />
            <HealthCards />
          </div>
          <div className="lg:col-span-1">
            <AlertsList />
          </div>
        </div>
      </main>

      <footer className="border-t mt-10">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-6 text-sm text-gray-500 flex items-center justify-between">
          <p>© {new Date().getFullYear()} CareLink. All rights reserved.</p>
          <p className="text-gray-400">Built for caregivers and families.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
