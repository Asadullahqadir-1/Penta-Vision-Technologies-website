
import React from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Services from './components/Services.tsx';
import Projects from './components/Projects.tsx';
import Team from './components/Team.tsx';
import CTA from './components/CTA.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden selection:bg-red-500 selection:text-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Team />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;
