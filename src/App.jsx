import React, { useState } from 'react';
import SplashLogin from './components/SplashLogin';
import PairDevice from './components/PairDevice';
import HomeDashboard from './components/HomeDashboard';
import BottomTabs from './components/BottomTabs';

function App() {
  const [stage, setStage] = useState('splash'); // 'splash' | 'pair' | 'home'

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Constrain to mobile width for a mobile-app feel */}
      <div className="mx-auto w-full max-w-md">
        {stage === 'splash' && (
          <SplashLogin
            onLogin={() => setStage('pair')}
            onRegister={() => setStage('pair')}
            onGuest={() => setStage('home')}
          />
        )}

        {stage === 'pair' && (
          <div>
            <div className="px-4 pt-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-9 w-9 rounded-xl bg-emerald-500 grid place-items-center text-white font-bold">CL</div>
                  <span className="font-semibold text-gray-900">CareLink</span>
                </div>
                <button className="text-sm text-gray-600 hover:text-gray-800" onClick={() => setStage('home')}>Skip</button>
              </div>
            </div>
            <PairDevice onSuccess={() => setStage('home')} />
          </div>
        )}

        {stage === 'home' && (
          <div className="pb-24">
            <div className="px-4 pt-4">
              <div className="flex items-center gap-2">
                <div className="h-9 w-9 rounded-xl bg-emerald-500 grid place-items-center text-white font-bold">CL</div>
                <span className="font-semibold text-gray-900">CareLink</span>
              </div>
            </div>
            <main className="px-4 py-4">
              <HomeDashboard />
            </main>
            <div className="px-4">
              <BottomTabs current={'home'} onChange={(k)=>{}} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
