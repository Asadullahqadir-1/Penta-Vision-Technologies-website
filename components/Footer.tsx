
import React from 'react';
import { Facebook, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { Icon: Facebook, href: "https://www.facebook.com/share/1AapsVsDZs/?mibextid=wwXIfr" },
    { Icon: Linkedin, href: "https://www.linkedin.com/company/pentavisiontechonogy/" }
  ];

  return (
    <footer className="bg-black text-white py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Precision grid pattern background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
        <div className="col-span-1 lg:col-span-1">
          <div className="flex items-center space-x-3 mb-10">
            <div className="w-12 h-12 rounded-2xl border-2 border-red-600 flex items-center justify-center bg-white p-1 overflow-hidden">
              <img
                src="/images/logo.png"
                alt="Penta Vision logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-white font-[900] text-2xl uppercase tracking-tighter leading-none">Penta Vision<br/><span className="text-xs tracking-[0.3em] font-bold text-red-600">Technologies</span></span>
          </div>
          <p className="text-gray-400 font-medium leading-relaxed mb-8 text-sm md:text-base">
            Empowering global brands with cutting-edge digital transformation, AI-driven solutions, and world-class design standards.
          </p>
          
          <div className="mb-8 group">
            <a href="mailto:pentavisiontechnologies@gmail.com" className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
              <div className="w-10 h-10 bg-gray-900 border border-white/10 rounded-xl flex items-center justify-center group-hover:bg-red-600 transition-all">
                <Mail className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-bold lowercase tracking-wide">pentavisiontechnologies@gmail.com</span>
            </a>
          </div>

          <div className="flex space-x-5">
            {socialLinks.map(({ Icon, href }, idx) => (
              <a key={idx} href={href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-900 border border-white/10 rounded-2xl flex items-center justify-center hover:bg-red-600 hover:scale-110 hover:shadow-[0_10px_20px_rgba(220,38,38,0.4)] transition-all">
                <Icon className="w-5 h-5 text-white" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-black mb-10 uppercase tracking-[0.4em] text-red-600">Company</h4>
          <ul className="space-y-5 text-gray-400 font-bold text-sm uppercase tracking-widest">
            <li><a href="#about" className="hover:text-white transition-colors">Our Members</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Career Hub</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
            <li><a href="#" className="hover:text-white transition-colors">News Room</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-black mb-10 uppercase tracking-[0.4em] text-red-600">Support</h4>
          <ul className="space-y-5 text-gray-400 font-bold text-sm uppercase tracking-widest">
            <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Trust & Safety</a></li>
            <li><a href="#" className="hover:text-white transition-colors">API Docs</a></li>
            <li><a href="#" className="hover:text-white transition-colors">System Status</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-black mb-10 uppercase tracking-[0.4em] text-red-600">Legal</h4>
          <ul className="space-y-5 text-gray-400 font-bold text-sm uppercase tracking-widest">
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Trademark Info</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-gray-600 font-bold text-[10px] uppercase tracking-[0.5em]">
        <p>© {new Date().getFullYear()} Penta Vision Technologies. All rights reserved.</p>
        <div className="mt-4 md:mt-0 flex space-x-8">
            <span className="cursor-pointer hover:text-white">Security</span>
            <span className="cursor-pointer hover:text-white">Sitemap</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
