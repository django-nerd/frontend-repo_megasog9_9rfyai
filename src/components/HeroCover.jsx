import React from 'react';
import Spline from '@splinetool/react-spline';

function HeroCover() {
  return (
    <section className="relative w-full h-[460px] overflow-hidden rounded-2xl bg-gray-900">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient to improve text readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-gray-950/80 via-gray-900/40 to-transparent" />

      <div className="relative z-10 h-full flex items-center px-6 md:px-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-400/10 text-emerald-300 border border-emerald-400/20 px-3 py-1 mb-4">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Live care companion
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            CareLink — peace of mind through real‑time care and safety
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-200">
            Monitor health, location, and alerts for your loved ones from a single, intuitive dashboard.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-5 py-2.5 rounded-lg shadow">
              Open Dashboard
            </button>
            <button className="bg-white/10 hover:bg-white/15 text-white font-medium px-5 py-2.5 rounded-lg border border-white/20">
              View Full Map
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroCover;
