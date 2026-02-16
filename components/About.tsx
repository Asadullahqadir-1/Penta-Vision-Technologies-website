
import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-red-600 font-bold uppercase tracking-[0.3em] text-[11px] mb-4 block">About Us</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-[1.1] uppercase tracking-tight">
            WHO <span className="text-red-700">WE ARE</span>
          </h2>
          
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-10 font-normal">
            Penta Vision Technologies is a professional digital agency dedicated to helping businesses build a strong and successful online presence. We combine creativity, technology, and strategy to deliver results-driven digital solutions.
          </p>

          <div className="space-y-6 mb-12">
            <h3 className="text-xl font-bold text-gray-900 uppercase tracking-tight">Why Choose Us?</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Client-focused approach",
                "Modern and innovative designs",
                "Secure and scalable systems",
                "Fast loading performance",
                "100% customer satisfaction",
                "Expert strategy team"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center space-x-3 group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center group-hover:bg-red-600 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-red-600 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-gray-700 font-semibold text-sm tracking-wide">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <button className="bg-red-800 text-white px-10 py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-red-900 transition-all shadow-lg">
            Book A Consultation
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Abstract background elements */}
          <div className="absolute top-[-40px] right-[-20px] w-64 h-64 bg-red-50 rounded-full blur-[80px] -z-10"></div>
          
          <div className="relative z-10 wavy-border overflow-hidden shadow-2xl bg-gray-100 aspect-square group">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
              alt="Our creative team" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Removed Play Button Overlay as requested */}

            {/* Performance Metric Overlay */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-8 right-8 bg-white p-6 rounded-2xl shadow-2xl hidden md:block w-64 border border-gray-100"
            >
               <h4 className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-3">Client Success</h4>
               <div className="space-y-4">
                  <div>
                    <span className="block text-gray-900 text-2xl font-extrabold tracking-tight">98% Satisfaction</span>
                    <div className="mt-2 flex items-center space-x-2">
                        <span className="bg-green-50 text-green-600 text-[10px] px-2 py-0.5 rounded-full font-bold">Industry Leader</span>
                    </div>
                  </div>
                  <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-red-600 w-[92%] rounded-full"></div>
                  </div>
               </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
