import React from 'react';
import { Shield, LineChart, ArrowRight, Wallet } from 'lucide-react';

const Step = ({ icon: Icon, title, desc }) => (
  <div className="border-2 border-white bg-black p-5 shadow-[6px_6px_0_0_#fff]">
    <div className="flex items-start gap-3">
      <div className="border-2 border-white p-2 bg-black">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <p className="font-bold uppercase">{title}</p>
        <p className="text-sm text-white/70">{desc}</p>
      </div>
    </div>
  </div>
);

const StrategyReserve = () => {
  return (
    <section id="how" className="py-16">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">How Kintai's Strategy Reserve Works</h2>
        <p className="text-white/80 mt-2 max-w-2xl">
          Donations are split between an instantly available support pool and a reserve that earns yield. The reserve is diversified and risk-managed.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <Step icon={Wallet} title="Donate" desc="Contribute to your favorite streamer via Kintai." />
        <Step icon={LineChart} title="Earn" desc="A portion is allocated to yield strategies with transparent performance." />
        <Step icon={Shield} title="Distribute" desc="Yield is distributed to both the streamer and the donor at set intervals." />
      </div>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        <div className="border-2 border-white bg-black p-6 shadow-[6px_6px_0_0_#fff]">
          <h3 className="font-bold uppercase mb-3">Smart split</h3>
          <p className="text-sm text-white/80">
            Kintai uses a dynamic split between Immediate Support and Strategy Reserve. Immediate Support boosts creators now, while the Strategy Reserve earns over time.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="border-2 border-white bg-black p-4 text-center shadow-[4px_4px_0_0_#fff]">
              <p className="text-xs uppercase tracking-wide text-white/70">Immediate Support</p>
              <p className="text-2xl font-extrabold">60%</p>
            </div>
            <div className="border-2 border-white bg-black p-4 text-center shadow-[4px_4px_0_0_#fff]">
              <p className="text-xs uppercase tracking-wide text-white/70">Strategy Reserve</p>
              <p className="text-2xl font-extrabold">40%</p>
            </div>
          </div>
        </div>

        <div className="border-2 border-white bg-black p-6 shadow-[6px_6px_0_0_#fff]">
          <h3 className="font-bold uppercase mb-3">Reserve pipeline</h3>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <Box label="Stable Vaults" value="Base yield" />
            <ArrowRight className="hidden sm:block" />
            <Box label="Liquidity Pools" value="Boost" />
            <ArrowRight className="hidden sm:block" />
            <Box label="Rewards" value="Streamer + Donor" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Box = ({ label, value }) => (
  <div className="flex-1 min-w-[220px] border-2 border-white bg-black p-4 text-center shadow-[4px_4px_0_0_#fff]">
    <p className="text-xs uppercase tracking-wide text-white/70">{label}</p>
    <p className="text-lg font-bold">{value}</p>
  </div>
);

export default StrategyReserve;
