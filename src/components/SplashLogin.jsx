import React from 'react';
import Spline from '@splinetool/react-spline';

function SplashLogin({ onLogin, onRegister, onGuest }) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-emerald-50 to-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-white/0" />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-between py-10 px-6">
        <div className="h-6" />

        <div className="text-center">
          <div className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-2xl bg-emerald-500 text-white text-2xl font-extrabold shadow-lg">CL</div>
          <h1 className="text-white text-3xl md:text-5xl font-extrabold tracking-tight drop-shadow">CareLink Companion</h1>
          <p className="mt-2 text-emerald-100 text-sm md:text-base">Connecting Care with Compassion.</p>

          <div className="mt-8 flex flex-col items-stretch gap-3 w-full max-w-xs mx-auto">
            <button onClick={onLogin} className="w-full rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 shadow">
              Login
            </button>
            <button onClick={onRegister} className="w-full rounded-xl border border-white/50 bg-white/10 hover:bg-white/20 text-white font-semibold py-3 backdrop-blur">
              Register
            </button>
          </div>
        </div>

        <button onClick={onGuest} className="text-sm text-white/80 hover:text-white underline underline-offset-4">Continue as Guest</button>
      </div>
    </div>
  );
}

export default SplashLogin;
