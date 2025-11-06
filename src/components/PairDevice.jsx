import React, { useState } from 'react';
import { QrCode, Smartphone, CheckCircle2, Loader2 } from 'lucide-react';

function StepIndicator({ status }) {
  const steps = [
    { key: 'searching', label: 'Searching' },
    { key: 'connecting', label: 'Connecting' },
    { key: 'confirmed', label: 'Confirmed' },
  ];
  const currentIndex = steps.findIndex(s => s.key === status);
  return (
    <div className="flex items-center justify-center gap-3 text-sm">
      {steps.map((s, idx) => (
        <div key={s.key} className="flex items-center gap-2">
          <div className={`h-6 w-6 grid place-items-center rounded-full border ${idx <= currentIndex ? 'bg-emerald-500 text-white border-emerald-500' : 'bg-white text-gray-400 border-gray-200'}`}>
            {idx < currentIndex ? <CheckCircle2 className="h-4 w-4" /> : idx === currentIndex ? <Loader2 className="h-4 w-4 animate-spin" /> : idx+1}
          </div>
          <span className={`${idx <= currentIndex ? 'text-emerald-600' : 'text-gray-500'}`}>{s.label}</span>
          {idx < steps.length - 1 && <div className="w-8 h-px bg-gray-200" />}
        </div>
      ))}
    </div>
  );
}

function PairDevice({ onSuccess }) {
  const [mode, setMode] = useState(null); // 'qr' | 'id'
  const [status, setStatus] = useState('searching');
  const [deviceId, setDeviceId] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  const startPairing = async () => {
    setStatus('searching');
    setConfirmed(false);
    await new Promise(r => setTimeout(r, 800));
    setStatus('connecting');
    await new Promise(r => setTimeout(r, 800));
    setStatus('confirmed');
    setConfirmed(true);
    setTimeout(() => {
      onSuccess?.({ deviceId: deviceId || 'SIM-1234-5678' });
    }, 800);
  };

  return (
    <div className="min-h-[70vh] grid place-items-center py-10">
      <div className="w-full max-w-2xl bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Pair Your Companion's Device</h2>
            <p className="mt-1 text-gray-600">Connect using the QR code on their device or packaging.</p>
          </div>
          {confirmed && <CheckCircle2 className="h-8 w-8 text-emerald-500" />}
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <button onClick={() => setMode('qr')} className={`rounded-xl border p-4 flex items-center gap-3 text-left ${mode==='qr' ? 'border-emerald-300 bg-emerald-50' : 'border-gray-200 hover:border-gray-300'}`}>
            <div className="h-10 w-10 grid place-items-center rounded-lg bg-emerald-100 text-emerald-700"><QrCode className="h-5 w-5" /></div>
            <div>
              <p className="font-semibold text-gray-900">Scan QR Code</p>
              <p className="text-sm text-gray-600">Use camera to scan QR</p>
            </div>
          </button>
          <button onClick={() => setMode('id')} className={`rounded-xl border p-4 flex items-center gap-3 text-left ${mode==='id' ? 'border-emerald-300 bg-emerald-50' : 'border-gray-200 hover:border-gray-300'}`}>
            <div className="h-10 w-10 grid place-items-center rounded-lg bg-emerald-100 text-emerald-700"><Smartphone className="h-5 w-5" /></div>
            <div>
              <p className="font-semibold text-gray-900">Enter IMEI / Device ID</p>
              <p className="text-sm text-gray-600">Type the unique identifier</p>
            </div>
          </button>
        </div>

        {mode === 'id' && (
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Device ID</label>
            <input value={deviceId} onChange={e=>setDeviceId(e.target.value)} placeholder="e.g., 356938035643809" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400" />
          </div>
        )}

        {mode === 'qr' && (
          <div className="mt-4 aspect-video rounded-xl bg-gray-50 border border-dashed border-gray-300 grid place-items-center text-gray-500">
            Camera overlay preview
          </div>
        )}

        <div className="mt-6 flex flex-col items-center gap-4">
          <StepIndicator status={status} />
          {!confirmed ? (
            <button onClick={startPairing} className="rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-5 py-2.5">Start Pairing</button>
          ) : (
            <div className="flex items-center gap-2 text-emerald-700 font-medium">
              <CheckCircle2 className="h-5 w-5" /> Device paired successfully!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PairDevice;
