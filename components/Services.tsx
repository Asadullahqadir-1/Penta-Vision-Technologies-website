
import React from 'react';
import { Globe, Palette, Settings, BarChart3, Code2, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Website Development",
    desc: "We build custom, responsive, and scalable websites tailored to your business needs.",
    icon: <Globe className="w-8 h-8 text-white" />,
    color: "bg-blue-600"
  },
  {
    title: "Website Designing",
    desc: "Modern, user-friendly, and conversion-focused website designs.",
    icon: <Palette className="w-8 h-8 text-white" />,
    color: "bg-indigo-600"
  },
  {
    title: "WordPress Maintenance",
    desc: "Keep your website secure and up to date with our expert maintenance services.",
    icon: <Settings className="w-8 h-8 text-white" />,
    color: "bg-teal-500"
  },
  {
    title: "SEO Optimization",
    desc: "Increase your online visibility and rank higher on search engines.",
    icon: <BarChart3 className="w-8 h-8 text-white" />,
    color: "bg-purple-600"
  },
  {
    title: "AI Solutions",
    desc: "Harness the power of artificial intelligence to automate processes, uncover insights, and create products.",
    icon: <Code2 className="w-8 h-8 text-white" />,
    color: "bg-cyan-500"
  },
  {
    title: "Digital Transformation",
    desc: "Reimagine your business for the digital age. We guide organizations through end-to-end transformation.",
    icon: <Rocket className="w-8 h-8 text-white" />,
    color: "bg-emerald-500"
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 px-6 red-gradient relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto text-center mb-24 relative z-10">
        <span className="text-white/60 font-black uppercase tracking-[0.5em] text-xs mb-6 block">What We Offer</span>
        <h2 className="text-4xl md:text-6xl font-[900] text-white mb-8 tracking-wide uppercase">
          OUR SERVICES
        </h2>
        <div className="w-24 h-1.5 bg-red-600 mx-auto rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-[3rem] p-12 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)] transition-all group flex flex-col h-full hover:-translate-y-2 border border-transparent hover:border-white/20"
          >
            <div className={`w-20 h-20 ${s.color} rounded-[1.5rem] flex items-center justify-center mb-10 shadow-lg group-hover:rotate-6 transition-transform group-hover:scale-110`}>
              {s.icon}
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-6 uppercase tracking-tight leading-tight">{s.title}</h3>
            <p className="text-gray-600 leading-relaxed font-semibold text-sm md:text-base flex-grow">
              {s.desc}
            </p>
            <div className="mt-8 pt-6 border-t border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-red-600 font-black text-xs uppercase tracking-widest cursor-pointer hover:underline">Read More →</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
