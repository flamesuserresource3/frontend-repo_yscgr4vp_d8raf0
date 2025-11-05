import React from 'react';
import Spline from '@splinetool/react-spline';
import { Coins, Shield, Gift } from 'lucide-react';

const Card = ({ children }) => (
  <div className="border-2 border-white bg-black p-4 shadow-[6px_6px_0_0_#fff]">{children}</div>
);

const Hero = () => {
  return (
    <section className="relative h-[78vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Jd4wcqFfe70N-TXP/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 h-full flex items-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 border-2 border-white bg-black px-3 py-1 text-xs uppercase tracking-wider mb-5 shadow-[4px_4px_0_0_#fff]">
            Yield-powered donations in 8-bit style
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
            Support streamers.
            <br />
            Grow impact with Kintai.
          </h1>

          <p className="mt-5 text-white/80 text-lg">
            Kintai turns donations into a strategy reserve that earns yield. The rewards are automatically distributed to both the creator and the donor.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-xl">
            <Card>
              <div className="flex items-start gap-3">
                <Coins className="w-5 h-5 mt-1" />
                <div>
                  <p className="font-bold uppercase text-sm">Earn yield</p>
                  <p className="text-sm text-white/70">Funds are deployed to a reserve strategy.</p>
                </div>
              </div>
            </Card>
            <Card>
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 mt-1" />
                <div>
                  <p className="font-bold uppercase text-sm">Secure</p>
                  <p className="text-sm text-white/70">Transparent tracking and safety-first design.</p>
                </div>
              </div>
            </Card>
            <Card>
              <div className="flex items-start gap-3">
                <Gift className="w-5 h-5 mt-1" />
                <div>
                  <p className="font-bold uppercase text-sm">Share upside</p>
                  <p className="text-sm text-white/70">Yield is shared between streamer and donor.</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#donate" className="px-5 py-3 border-2 border-white bg-black shadow-[4px_4px_0_0_#fff] hover:shadow-[2px_2px_0_0_#fff] transition font-bold uppercase tracking-wider">Donate now</a>
            <a href="#how" className="px-5 py-3 border-2 border-white bg-black shadow-[4px_4px_0_0_#fff] hover:shadow-[2px_2px_0_0_#fff] transition font-bold uppercase tracking-wider">How it works</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
