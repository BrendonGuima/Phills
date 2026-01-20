import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Aperture, Briefcase, Zap } from 'lucide-react';

const services = [
  {
    id: '01',
    title: 'Eventos & Shows',
    category: 'Entertainment',
    description: 'Capturando a eletricidade do palco e a emoção da multidão. Foco em baixa luz, movimento e momentos espontâneos.',
    tags: ['Festivais', 'Backstage', 'Nightlife', 'Artistas'],
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: '02',
    title: 'Corporativo',
    category: 'Branding',
    description: 'Elevando a imagem da sua marca com retratos de poder e cobertura de eventos empresariais com estética editorial.',
    tags: ['Headshots', 'Conferências', 'Branding', 'Linkedin'],
    icon: Briefcase,
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop'
  },
  {
    id: '03',
    title: 'Automotivo',
    category: 'Lifestyle',
    description: 'A união entre engenharia e arte. Ensaios que valorizam as linhas, a velocidade e o design de máquinas incríveis.',
    tags: ['Editorial', 'Track Day', 'Lançamentos', 'Detalhes'],
    icon: Aperture,
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2070&auto=format&fit=crop'
  }
];

const Services: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('01');

  return (
    <section id="services" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="container mx-auto px-4 h-full">
        
        {/* Header Compacto */}
        <div className="mb-12 flex flex-col md:flex-row justify-between items-end border-b border-zinc-800 pb-6 gap-6">
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white uppercase tracking-tighter">
            O Que <span className="text-red-600">Faço</span>
          </h2>
          <p className="text-zinc-500 font-mono text-xs md:text-sm uppercase tracking-widest max-w-md text-right">
             Selecione uma área para ver detalhes
          </p>
        </div>

        {/* Creative Layout: Horizontal Accordion on Desktop / Stack on Mobile */}
        <div className="flex flex-col lg:flex-row gap-4 h-auto lg:h-[600px] w-full">
          {services.map((service) => {
            const isActive = activeId === service.id;
            
            return (
              <motion.div
                key={service.id}
                layout
                onClick={() => setActiveId(service.id)}
                onMouseEnter={() => setActiveId(service.id)}
                className={`relative overflow-hidden rounded-xl cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] 
                  ${isActive ? 'lg:flex-[3] h-[500px] lg:h-auto' : 'lg:flex-[0.5] h-[100px] lg:h-auto bg-zinc-900 border border-zinc-800'}
                `}
              >
                {/* Background Image (Only visible when active) */}
                <AnimatePresence mode="wait">
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.7 }}
                      className="absolute inset-0"
                    >
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover opacity-60"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                      <div className="absolute inset-0 bg-red-900/10 mix-blend-overlay" />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Content Container */}
                <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-between z-10">
                  
                  {/* Top: ID & Icon */}
                  <div className={`flex justify-between items-start transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-50 lg:opacity-100 lg:justify-center lg:items-center lg:h-full lg:rotate-180 lg:[writing-mode:vertical-rl]'}`}>
                    <span className={`font-mono text-xl md:text-2xl font-bold ${isActive ? 'text-red-600' : 'text-zinc-600'}`}>
                      /{service.id}
                    </span>
                    {isActive && (
                      <motion.div
                        initial={{ scale: 0, rotate: -45 }}
                        animate={{ scale: 1, rotate: 0 }}
                        className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center"
                      >
                         <ArrowUpRight className="text-white w-5 h-5" />
                      </motion.div>
                    )}
                  </div>

                  {/* Bottom: Text Content */}
                  <div className={`space-y-4 transition-all duration-500 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 lg:hidden'}`}>
                    
                    <div className="overflow-hidden">
                      <motion.p 
                        initial={{ y: 20 }}
                        animate={{ y: 0 }}
                        className="text-red-500 font-mono text-xs uppercase tracking-widest mb-2"
                      >
                        {service.category}
                      </motion.p>
                      
                      <motion.h3 
                        initial={{ y: 20 }}
                        animate={{ y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-display text-4xl md:text-6xl font-bold text-white leading-none"
                      >
                        {service.title}
                      </motion.h3>
                    </div>

                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-zinc-300 max-w-md text-sm md:text-base font-light leading-relaxed"
                    >
                      {service.description}
                    </motion.p>

                    {/* Tags */}
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="flex flex-wrap gap-2 pt-4"
                    >
                      {service.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 rounded-full border border-white/20 text-xs text-white uppercase tracking-wider bg-black/20 backdrop-blur-sm">
                          {tag}
                        </span>
                      ))}
                    </motion.div>
                  </div>

                  {/* Vertical Title (Inactive State Desktop) */}
                  {!isActive && (
                     <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-180 [writing-mode:vertical-rl] whitespace-nowrap">
                        <span className="font-display text-4xl font-bold text-zinc-700 uppercase tracking-widest hover:text-white transition-colors">
                           {service.title}
                        </span>
                     </div>
                  )}

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;