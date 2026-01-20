import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AbstractBackground from './components/AbstractBackground';

const App: React.FC = () => {
  return (
    <main className="bg-black min-h-screen text-white selection:bg-red-600 selection:text-white relative">
      {/* Global Background - Fixed position */}
      <AbstractBackground />
      
      {/* Content wrapper with z-index to sit above background */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Portfolio />
        <Services />
        <Contact />
        <Footer />
      </div>
    </main>
  );
};

export default App;