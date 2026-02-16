
import React from 'react';
import { motion } from 'framer-motion';

const team = [
  { name: "EJAZ", role: "CEO & Founder", initial: "E", color: "bg-red-600" },
  { name: "DANIYAL", role: "CTO", initial: "D", color: "bg-gray-800" },
  { name: "ATIF", role: "Head Designer", initial: "A", color: "bg-red-700" },
  { name: "ASAD", role: "Full Stack Developer", initial: "A", color: "bg-gray-900" },
  { name: "ALIZA", role: "Developers", initial: "A", color: "bg-red-500" },
  { name: "EMAN", role: "Seo Specialist", initial: "E", color: "bg-black" },
  { name: "ASIMA", role: "UX UI Designer", initial: "A", color: "bg-red-800" },
  { name: "AKBAR", role: "Front End Developer", initial: "A", color: "bg-gray-700" }
];

const Team: React.FC = () => {
  return (
    <section className="py-32 px-6 red-gradient relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      
      <div className="max-w-7xl mx-auto text-center mb-24 relative z-10">
        <span className="text-white/50 font-black uppercase tracking-[0.5em] text-xs mb-6 block">Our Experts</span>
        <h2 className="text-4xl md:text-6xl font-[900] text-white mb-12 tracking-tight uppercase">
          MEET OUR TEAM
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
        {team.map((member, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            viewport={{ once: true }}
            className="bg-white rounded-[2.5rem] p-10 text-center hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.4)] transition-all border-t-8 border-red-600 group hover:-translate-y-3"
          >
            <div className={`w-28 h-28 ${member.color} rounded-full mx-auto mb-8 shadow-2xl flex items-center justify-center text-white text-4xl font-black border-4 border-gray-50 group-hover:scale-110 transition-transform`}>
              {member.initial}
            </div>
            <h3 className="text-2xl font-[900] text-gray-900 mb-2 tracking-tighter uppercase">{member.name}</h3>
            <span className="text-red-700 font-black text-xs uppercase mb-6 block tracking-widest">{member.role}</span>
            <p className="text-gray-500 text-sm leading-relaxed font-bold px-2">
              Visionary expert with years of experience in digital excellence and innovation.
            </p>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center mt-20 relative z-10">
        <button className="bg-white text-red-900 px-14 py-5 rounded-full font-black text-sm uppercase tracking-[0.3em] hover:bg-gray-100 transition-all shadow-2xl active:scale-95">
          See More Team Members
        </button>
      </div>
    </section>
  );
};

export default Team;
