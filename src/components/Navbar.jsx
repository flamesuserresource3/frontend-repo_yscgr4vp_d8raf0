import React from 'react';
import { Rocket, User, Settings } from 'lucide-react';

const PixelBtn = ({ children, className = '', ...props }) => (
  <button
    className={`inline-flex items-center gap-2 px-4 py-2 uppercase tracking-wider text-xs bg-black border-2 border-white active:translate-y-[1px] transition shadow-[4px_4px_0_0_#fff] hover:shadow-[2px_2px_0_0_#fff] ${className}`}
    {...props}
  >
    {children}
  </button>
);

const Navbar = () => {
  return (
    <header className="sticky top-0 z-30 bg-black/90 backdrop-blur border-b-2 border-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="border-2 border-white p-2 bg-black shadow-[4px_4px_0_0_#fff]">
            <Rocket className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg font-extrabold leading-none">
            <span className="">KIN</span>
            <span className="">TAI</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-wider">
          <a href="#how" className="hover:underline">How it works</a>
          <a href="#donate" className="hover:underline">Donate</a>
          <a href="#faq" className="hover:underline">FAQ</a>
        </nav>

        <div className="flex items-center gap-3">
          <PixelBtn className="hidden md:inline-flex">
            <Settings className="w-4 h-4" /> Creator Portal
          </PixelBtn>
          <PixelBtn>
            <User className="w-4 h-4" /> Sign in
          </PixelBtn>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
