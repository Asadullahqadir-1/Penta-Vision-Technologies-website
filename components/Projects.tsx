
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Trustpilot",
    image: "/images/trust pilot.jpeg",
    category: "Review Platform",
    link: "https://www.trustpilot.com/"
  },
  {
    id: 2,
    title: "Avvo",
    image: "/images/avvo.jpeg",
    category: "Legal Services",
    link: "https://www.avvo.com/"
  },
  {
    id: 3,
    title: "RHL Law",
    image: "/images/rhllaw.jpeg",
    category: "Law Firm",
    link: "https://rhllaw.com/"
  },
  {
    id: 4,
    title: "Fashion E-commerce",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
    category: "Online Shop"
  }
];

const Projects: React.FC = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % projects.length);
  const prev = () => setIndex((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section id="projects" className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <span className="text-gray-500 font-black uppercase tracking-[0.5em] text-xs mb-6 block">Our Portfolio</span>
        <h2 className="text-4xl md:text-6xl font-[900] text-gray-900 mb-8 tracking-tighter uppercase">
          OUR RECENT <span className="text-red-700">PROJECTS</span>
        </h2>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="flex items-center justify-between absolute top-1/2 -translate-y-1/2 -left-6 -right-6 md:-left-12 md:-right-12 z-30 pointer-events-none">
          <button onClick={prev} className="w-14 h-14 bg-white shadow-2xl rounded-full flex items-center justify-center text-gray-800 hover:bg-red-600 hover:text-white transition-all pointer-events-auto active:scale-90 border border-gray-100">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button onClick={next} className="w-14 h-14 bg-white shadow-2xl rounded-full flex items-center justify-center text-gray-800 hover:bg-red-600 hover:text-white transition-all pointer-events-auto active:scale-90 border border-gray-100">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="overflow-visible py-10">
          <AnimatePresence mode="wait">
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6, ease: "circOut" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-10"
            >
              {[0, 1, 2].map((offset) => {
                const project = projects[(index + offset) % projects.length];
                return (
                  <div 
                    key={project.id} 
                    className="relative group cursor-pointer"
                    onClick={() => project.link && window.open(project.link, '_blank')}
                  >
                    <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] bg-gray-100 mb-8">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                      />
                      <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl">
                          <ExternalLink className="w-6 h-6 text-red-600" />
                        </div>
                      </div>
                    </div>
                    <div className="text-center px-4">
                        <span className="text-red-600 font-black text-[10px] uppercase tracking-widest block mb-2">{project.category}</span>
                        <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight">{project.title}</h3>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Precision Thumbnails Film-strip */}
        <div className="mt-20 flex justify-center space-x-4 overflow-x-auto hide-scrollbar pb-4 max-w-4xl mx-auto px-4">
           {Array.from({length: 10}).map((_, i) => (
             <motion.div 
              whileHover={{ y: -5 }}
              key={i} 
              className="flex-shrink-0 w-32 aspect-video rounded-xl bg-gray-50 overflow-hidden border-2 border-transparent hover:border-red-500 transition-all cursor-pointer shadow-md"
             >
               <img src={`/images/slide ${i + 1}.jpeg`} className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-all" alt={`Slide ${i + 1}`} />
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
