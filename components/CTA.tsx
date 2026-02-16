
import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-6 red-gradient border-b border-white/10 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="w-20 h-20 bg-white rounded-[2rem] flex items-center justify-center mx-auto mb-12 shadow-2xl rotate-3">
          <Mail className="w-10 h-10 text-red-700" />
        </div>
        
        <h2 className="text-4xl md:text-7xl font-[900] text-white mb-8 leading-tight tracking-tighter uppercase">
          READY TO <span className="text-red-500">TRANSFORM</span> YOUR BUSINESS?
        </h2>
        <p className="text-white/70 text-lg md:text-xl mb-16 max-w-2xl mx-auto font-medium">
          Join 500+ successful companies that scaled their digital presence with Penta Vision. Let's build something extraordinary together.
        </p>

        <div className="max-w-2xl mx-auto relative group">
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-0 relative">
            <input 
              type="email" 
              placeholder="Enter your professional email" 
              className="w-full bg-white/10 border-2 border-white/20 rounded-full px-10 py-6 text-white placeholder-white/40 focus:outline-none focus:ring-4 focus:ring-red-500/30 transition-all backdrop-blur-md text-lg font-bold"
            />
            <button className="w-full sm:w-auto bg-red-600 sm:absolute sm:right-2 sm:top-2 sm:bottom-2 text-white px-12 py-4 rounded-full font-black text-sm uppercase tracking-[0.2em] hover:bg-red-700 transition-all flex items-center justify-center space-x-3 shadow-xl active:scale-95 group">
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-center space-x-8 opacity-40">
            <span className="text-white text-[10px] font-black uppercase tracking-[0.3em]">No Credit Card Required</span>
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <span className="text-white text-[10px] font-black uppercase tracking-[0.3em]">Cancel Anytime</span>
        </div>
      </div>
    </section>
  );
};

export default CTA;
