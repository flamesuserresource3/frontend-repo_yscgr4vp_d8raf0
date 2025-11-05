import React from 'react';
import Spline from '@splinetool/react-spline';
import { Coins, Shield, Gift } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-[78vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4B1mPpWmhdW3nY7l/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-[#0b0d13] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 h-full flex items-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 mb-5">
            <span className="inline-block size-2 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-400" />
            Yield-powered donations for gamers & creators
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
            Support streamers.
            <br />
            Grow impact with <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400">Kintai</span>.
          </h1>

          <p className="mt-5 text-white/70 text-lg">
            Kintai turns donations into a strategy reserve that earns yield. The rewards are automatically distributed to both the creator and the donor — amplifying every contribution.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-xl">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 flex items-start gap-3">
              <Coins className="w-5 h-5 text-cyan-300 mt-1" />
              <div>
                <p className="font-medium">Earn yield</p>
                <p className="text-sm text-white/60">Funds are deployed to a diversified reserve strategy.</p>
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 flex items-start gap-3">
              <Shield className="w-5 h-5 text-violet-300 mt-1" />
              <div>
                <p className="font-medium">Transparent & secure</p>
                <p className="text-sm text-white/60">Real-time tracking and non-custodial flows.</p>
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 flex items-start gap-3">
              <Gift className="w-5 h-5 text-fuchsia-300 mt-1" />
              <div>
                <p className="font-medium">Share the upside</p>
                <p className="text-sm text-white/60">Yield is shared between streamer and donor.</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#donate" className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 hover:from-cyan-400 hover:to-fuchsia-400 transition font-medium">Donate now</a>
            <a href="#how" className="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition font-medium">How it works</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
