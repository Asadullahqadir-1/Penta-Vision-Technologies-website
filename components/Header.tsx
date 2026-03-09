
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50 px-4 py-6 md:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between border border-white/10 rounded-full bg-black/40 backdrop-blur-md px-6 py-2 shadow-xl">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center bg-black overflow-hidden">
            <img
              src="/images/logo.png"
              alt="Penta Vision logo"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-white font-bold text-base tracking-tight">Penta Vision</span>
        </div>
        
        <nav className="hidden lg:flex items-center space-x-8">
          <a href="#" className="text-white text-xs font-medium hover:text-red-500 transition-colors">Home</a>
          <a href="#about" className="text-white text-xs font-medium hover:text-red-500 transition-colors">About</a>
          <a href="#services" className="text-white text-xs font-medium hover:text-red-500 transition-colors">Practice Areas</a>
          <a href="mailto:pentavisiontechnologies@gmail.com" className="text-white text-xs font-medium hover:text-red-500 transition-colors">Contact us</a>
        </nav>

        <div>
          <a href="tel:+923554795952" className="bg-white text-black px-5 py-2 rounded-full font-bold text-[13px] hover:bg-red-600 hover:text-white transition-all shadow-lg block">
            +92 3554795952
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
