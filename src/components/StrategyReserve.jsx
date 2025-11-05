import React from 'react';
import { Shield, LineChart, ArrowRight, Wallet } from 'lucide-react';

const Step = ({ icon: Icon, title, desc }) => (
  <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-5">
    <div className="flex items-start gap-3">
      <div className="bg-white/5 border border-white/10 rounded-xl p-2">
        <Icon className="w-5 h-5 text-cyan-300" />
      </div>
      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-sm text-white/60">{desc}</p>
      </div>
    </div>
  </div>
);

const StrategyReserve = () => {
  return (
    <section id="how" className="py-16">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">How Kintai's Strategy Reserve Works</h2>
        <p className="text-white/70 mt-2 max-w-2xl">
          Donations are split between an instantly available support pool and a reserve that earns yield. The reserve is diversified and risk-managed to keep the experience smooth for creators and donors.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <Step
          icon={Wallet}
          title="Donate"
          desc="Contribute to your favorite streamer via Kintai. Funds enter the reserve pipeline."
        />
        <Step
          icon={LineChart}
          title="Earn"
          desc="A portion is allocated to yield strategies with transparent performance."
        />
        <Step
          icon={Shield}
          title="Distribute"
          desc="Yield is distributed to both the streamer and the donor at set intervals."
        />
      </div>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="font-semibold mb-3">Smart split</h3>
          <p className="text-sm text-white/70">
            Kintai uses a dynamic split between Immediate Support and Strategy Reserve. Immediate Support boosts creators now, while the Strategy Reserve earns over time. The default split adapts to market conditions and campaign goals.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="rounded-xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-cyan-400/5 p-4">
              <p className="text-sm text-white/60">Immediate Support</p>
              <p className="text-2xl font-bold">60%</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-gradient-to-br from-fuchsia-500/10 to-fuchsia-400/5 p-4">
              <p className="text-sm text-white/60">Strategy Reserve</p>
              <p className="text-2xl font-bold">40%</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="font-semibold mb-3">Reserve pipeline</h3>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <Box label="Stable Vaults" value="Base yield" color="from-cyan-400/30" />
            <ArrowRight className="hidden sm:block text-white/50" />
            <Box label="Liquidity Pools" value="Boost" color="from-violet-400/30" />
            <ArrowRight className="hidden sm:block text-white/50" />
            <Box label="Rewards" value="Streamer + Donor" color="from-fuchsia-400/30" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Box = ({ label, value, color }) => (
  <div className={`flex-1 min-w-[220px] rounded-xl border border-white/10 bg-gradient-to-br ${color} to-transparent p-4 text-center`}>
    <p className="text-xs uppercase tracking-wide text-white/60">{label}</p>
    <p className="text-lg font-semibold">{value}</p>
  </div>
);

export default StrategyReserve;
