import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StrategyReserve from './components/StrategyReserve';
import DonationWidget from './components/DonationWidget';

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navbar />
      <Hero />

      <main className="relative z-10">
        <section className="max-w-7xl mx-auto px-6 md:px-8">
          <StrategyReserve />
        </section>

        <section className="max-w-7xl mx-auto px-6 md:px-8 py-16">
          <DonationWidget />
        </section>
      </main>

      <footer className="border-t-2 border-white mt-8">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-10 text-sm text-white/70">
          <p>
            © {new Date().getFullYear()} Kintai — yield-powered donations for creators and their communities.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
