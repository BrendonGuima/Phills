import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Category } from '../types';
import { portfolioItems } from '../portfolioData'; // Importando do seu "local storage"

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');

  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 relative z-10">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Minimalist Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
              <h2 className="font-display text-4xl md:text-6xl font-bold text-white">PORTFOLIO</h2>
              <div className="h-1 w-24 bg-red-600 mt-2"></div>
          </div>
          
          {/* Filters */}
          <div className="flex flex-wrap gap-6 md:gap-8">
            {['All', ...Object.values(Category)].map((cat) => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat as Category | 'All')}
                className={`text-sm font-bold uppercase tracking-widest transition-all duration-300 relative ${activeCategory === cat ? 'text-white' : 'text-zinc-600 hover:text-zinc-400'}`}
              >
                {cat === 'All' ? 'Todos' : cat}
                {activeCategory === cat && (
                    <motion.div layoutId="underline" className="absolute -bottom-2 left-0 right-0 h-[2px] bg-red-600" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* 
          Grid inteligente com 'grid-flow-dense' 
          Isso preenche os buracos automaticamente puxando itens menores para cima 
        */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[350px] grid-flow-dense"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "circOut" }}
                className={`group relative overflow-hidden bg-zinc-900 rounded-sm
                  ${item.gridSpan === 'col-span-2' ? 'md:col-span-2' : 'col-span-1'}
                `}
              >
                <div className="w-full h-full overflow-hidden">
                    <img 
                        src={item.imageUrl} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 grayscale group-hover:grayscale-0"
                    />
                </div>
                
                {/* Overlay Content */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-6">
                    <span className="text-red-600 text-xs font-bold uppercase tracking-[0.2em] mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                        {item.category}
                    </span>
                    <h3 className="text-3xl font-display font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                        {item.title}
                    </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-16 text-center">
            <a href="#" className="inline-block border-b border-zinc-700 pb-1 text-zinc-500 hover:text-white hover:border-white transition-all text-sm uppercase tracking-widest">
                Ver Galeria Completa
            </a>
        </div>
        
      </div>
    </section>
  );
};

export default Portfolio;