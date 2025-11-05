import React, { useMemo, useState } from 'react';
import { Gift, Coins } from 'lucide-react';

const format = (n) => new Intl.NumberFormat(undefined, { style: 'currency', currency: 'USD', maximumFractionDigits: 2 }).format(n);

const DonationWidget = () => {
  const [amount, setAmount] = useState(50);
  const [reserveSplit, setReserveSplit] = useState(40); // % to reserve earning yield
  const [apy, setApy] = useState(8); // demo APY
  const [share, setShare] = useState(50); // % yield to streamer vs donor

  const calc = useMemo(() => {
    const amt = Number(amount) || 0;
    const resPct = reserveSplit / 100;
    const supportPct = 1 - resPct;

    const toSupport = amt * supportPct;
    const toReserve = amt * resPct;

    const yearlyYield = toReserve * (apy / 100);
    const streamerYield = yearlyYield * (share / 100);
    const donorYield = yearlyYield - streamerYield;

    return { toSupport, toReserve, yearlyYield, streamerYield, donorYield };
  }, [amount, reserveSplit, apy, share]);

  return (
    <section id="donate">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Try the Kintai donation flow</h2>
        <p className="text-white/80 mt-2 max-w-2xl">
          Explore how a contribution is split and how the Strategy Reserve works. Adjust the sliders to see the impact.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="border-2 border-white bg-black p-6 shadow-[6px_6px_0_0_#fff]">
          <div className="flex items-center gap-3 mb-5">
            <div className="border-2 border-white p-2 bg-black">
              <Gift className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold uppercase">Donation setup</p>
              <p className="text-sm text-white/70">Local demo — no wallet needed.</p>
            </div>
          </div>

          <Label>Amount (USD)</Label>
          <div className="flex items-center gap-3">
            <input
              type="range"
              min={5}
              max={1000}
              step={5}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full accent-white"
            />
            <span className="w-28 text-right tabular-nums">{format(amount)}</span>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <Metric label="Immediate support" value={format(calc.toSupport)} hint={`${(100 - reserveSplit).toFixed(0)}%`} />
            <Metric label="Strategy reserve" value={format(calc.toReserve)} hint={`${reserveSplit.toFixed(0)}%`} />
          </div>

          <div className="mt-6">
            <Label>Reserve split</Label>
            <Slider value={reserveSplit} onChange={setReserveSplit} suffix="%" />
          </div>

          <div className="mt-4">
            <Label>Estimated APY</Label>
            <Slider value={apy} onChange={setApy} min={0} max={20} suffix="%" />
          </div>

          <div className="mt-4">
            <Label>Yield share to streamer</Label>
            <Slider value={share} onChange={setShare} min={0} max={100} suffix="%" />
          </div>

          <button className="mt-6 w-full inline-flex items-center justify-center gap-2 px-5 py-3 border-2 border-white bg-black shadow-[4px_4px_0_0_#fff] hover:shadow-[2px_2px_0_0_#fff] transition font-bold uppercase tracking-wider">
            <Coins className="w-4 h-4" />
            Simulate donation
          </button>
        </div>

        <div className="border-2 border-white bg-black p-6 shadow-[6px_6px_0_0_#fff]">
          <p className="font-bold uppercase mb-3">Projected yearly impact</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Stat title="Total yield" value={format(calc.yearlyYield)} />
            <Stat title="To streamer" value={format(calc.streamerYield)} />
            <Stat title="To donor" value={format(calc.donorYield)} />
          </div>

          <div className="mt-8">
            <div className="h-2 w-full border-2 border-white bg-black overflow-hidden">
              <div
                className="h-full bg-white"
                style={{ width: `${Math.min(100, Math.max(0, (calc.streamerYield / (calc.yearlyYield || 1)) * 100))}%` }}
              />
            </div>
            <div className="mt-2 flex justify-between text-xs text-white/70 uppercase">
              <span>Streamer share</span>
              <span>{share.toFixed(0)}%</span>
            </div>
          </div>

          <div className="mt-8 text-sm text-white/70">
            <p>
              Estimates are for demonstration. When live, returns and allocations may change. Kintai focuses on safety-first strategies and transparent reporting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Label = ({ children }) => (
  <p className="text-sm text-white/80 mb-2 uppercase tracking-wider">{children}</p>
);

const Metric = ({ label, value, hint }) => (
  <div className="border-2 border-white bg-black p-4 shadow-[4px_4px_0_0_#fff]">
    <p className="text-xs uppercase tracking-wide text-white/70">{label}</p>
    <p className="text-xl font-extrabold">{value}</p>
    {hint && <p className="text-xs text-white/60 mt-1">{hint}</p>}
  </div>
);

const Slider = ({ value, onChange, min = 0, max = 100, suffix = '' }) => (
  <div className="flex items-center gap-3">
    <input
      type="range"
      min={min}
      max={max}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="w-full accent-white"
    />
    <span className="w-16 text-right tabular-nums">{value.toFixed(0)}{suffix}</span>
  </div>
);

const Stat = ({ title, value }) => (
  <div className="border-2 border-white bg-black p-4">
    <p className="text-sm text-white/70">{title}</p>
    <p className="text-2xl font-extrabold">{value}</p>
  </div>
);

export default DonationWidget;
