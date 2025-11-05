import React from 'react';
import { Rocket, User, Settings } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/10 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="absolute inset-0 blur-md rounded-xl bg-gradient-to-tr from-violet-600 via-fuchsia-500 to-cyan-400 opacity-70" />
            <div className="relative bg-white/5 border border-white/10 rounded-xl p-2">
              <Rocket className="w-5 h-5 text-cyan-300" />
            </div>
          </div>
          <span className="text-lg font-semibold tracking-tight">
            <span className="text-white">kin</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400">tai</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
          <a href="#how" className="hover:text-white transition">How it works</a>
          <a href="#donate" className="hover:text-white transition">Donate</a>
          <a href="#faq" className="hover:text-white transition">FAQ</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden md:inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition text-sm">
            <Settings className="w-4 h-4" />
            Creator Portal
          </button>
          <button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-fuchsia-500 hover:from-cyan-400 hover:to-fuchsia-400 transition text-sm">
            <User className="w-4 h-4" />
            Sign in
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
