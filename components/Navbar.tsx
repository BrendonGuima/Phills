import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Serviços', href: '#services' },
    { label: 'Sobre', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-black/80 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* Logo Icon Only on Scroll, Full on Top (optional, keeping icon consistent for now) */}
        <a href="#" className="h-8 relative z-50">
           <Logo className="h-full" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="px-6 py-2 bg-white text-black hover:bg-zinc-200 transition-colors rounded-sm text-xs font-bold uppercase tracking-[0.2em]">
            Contato
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center gap-8"
          >
             {navLinks.map((link) => (
               <a 
                 key={link.label} 
                 href={link.href}
                 onClick={() => setMobileMenuOpen(false)}
                 className="text-4xl font-display font-bold text-white uppercase tracking-wider hover:text-red-600 transition-colors"
               >
                 {link.label}
               </a>
             ))}
             <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="mt-8 text-sm font-mono text-zinc-500">
                FALE COMIGO
             </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;