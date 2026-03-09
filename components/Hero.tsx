
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero: React.FC = () => {
  const industries = ['E-COMMERCE', 'EDUCATION', 'HEALTHCARE', 'BUSINESS', 'TECHNOLOGY', 'FINANCE'];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % industries.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[95vh] pt-32 pb-40 red-gradient overflow-hidden flex items-center">
      {/* Dynamic Background Effects matching the image's subtle glows */}
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-red-800/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] left-[-5%] w-[300px] h-[300px] bg-black/40 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center space-x-2 bg-white px-3 py-1.5 rounded-full mb-8 shadow-md">
            <span className="flex h-2 w-2 rounded-full bg-red-600"></span>
            <span className="text-[10px] font-bold text-gray-800 tracking-wide">Now accepting new projects</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-[68px] font-extrabold text-white leading-[1.05] mb-6 tracking-tight">
            WE BRING DEAD WEBSITES BACK TO LIFE FOR{' '}
            <span className="inline-block relative">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-[#00FF00] inline-block"
                >
                  {industries[currentIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>

          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-10 max-w-xl font-normal opacity-90">
            Don't let an outdated website hold your business back. We bring dead websites back to life with stunning design, powerful functionality, improved speed, advanced security, and smart optimization strategies.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white text-[#600000] px-8 py-4 rounded-lg font-bold text-sm hover:bg-gray-100 transition-all shadow-xl">
              Book A Consultation
            </button>
            <a href="mailto:pentavisiontechnologies@gmail.com" className="border border-white/40 text-white px-8 py-4 rounded-lg font-bold text-sm hover:bg-white/10 transition-all text-center">
              Contact Us
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-[2rem] p-8 md:p-10 shadow-2xl relative max-w-lg mx-auto lg:ml-auto w-full"
        >
          <h2 className="text-2xl font-extrabold text-[#C00000] text-center mb-8 tracking-wide">CONTACT FORM</h2>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="text" 
              placeholder="Name" 
              className="w-full px-6 py-4 bg-[#F5F5F5] border-none rounded-xl focus:ring-2 focus:ring-red-500 text-gray-800 placeholder-gray-400 font-medium transition-all"
            />
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full px-6 py-4 bg-[#F5F5F5] border-none rounded-xl focus:ring-2 focus:ring-red-500 text-gray-800 placeholder-gray-400 font-medium transition-all"
            />
            <input 
              type="tel" 
              placeholder="Telephone" 
              className="w-full px-6 py-4 bg-[#F5F5F5] border-none rounded-xl focus:ring-2 focus:ring-red-500 text-gray-800 placeholder-gray-400 font-medium transition-all"
            />
            <input 
              type="text" 
              placeholder="Subject" 
              className="w-full px-6 py-4 bg-[#F5F5F5] border-none rounded-xl focus:ring-2 focus:ring-red-500 text-gray-800 placeholder-gray-400 font-medium transition-all"
            />
            <textarea 
              placeholder="Message" 
              rows={4}
              className="w-full px-6 py-4 bg-[#F5F5F5] border-none rounded-xl focus:ring-2 focus:ring-red-500 text-gray-800 placeholder-gray-400 font-medium resize-none transition-all"
            ></textarea>
            <button className="w-full bg-[#E00000] text-white py-4 rounded-xl font-bold text-sm hover:bg-red-700 transition-all shadow-lg mt-2 uppercase tracking-wider">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>

      {/* Refined Asymmetric Wavy Divider to match the image precisely */}
      <div className="absolute bottom-[-2px] left-0 w-full overflow-hidden leading-[0] z-20">
        <svg className="relative block w-full h-[120px] md:h-[180px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V120H1200V0C1100,60 900,120 600,80C300,40 100,10 0,0Z" fill="#FFFFFF"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
