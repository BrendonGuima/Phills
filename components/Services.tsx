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
    image: 'https://photos.smugmug.com/Eventos-2026/Jan03-Mixed-By-Mixed-Areia-2025-Dia-5/i-wr8jRx3/0/Lf6CpFCm7vKrD699GqsSJBzH7TBrwcJMNDmRCFVxq/X3/Foto-53-X3.jpg'
  },
  {
    id: '02',
    title: 'Corporativo',
    category: 'Branding',
    description: 'Elevando a imagem da sua marca com retratos de poder e cobertura de eventos empresariais com estética editorial.',
    tags: ['Headshots', 'Conferências', 'Branding', 'Linkedin'],
    icon: Briefcase,
    image: 'https://photos.smugmug.com/Corporativo/Web-Summit-Rio-2023-Portfolio/i-FSBnWSv/0/LR7ZbHHcw2dsDb6bTvpDnw65Pw3RpGV46PxHrCjfh/X2/PHIL3806-X2.jpg'
  },
  {
    id: '03',
    title: 'Automotivo',
    category: 'Lifestyle',
    description: 'A união entre engenharia e arte. Ensaios que valorizam as linhas, a velocidade e o design de máquinas incríveis.',
    tags: ['Editorial', 'Track Day', 'Lançamentos', 'Detalhes'],
    icon: Aperture,
    image: 'https://photos.smugmug.com/Esportes-Carros/Porsche-Experience-Curvelo/i-zFvw934/0/MGqJN645DZzGs6bG7rZTDRKsbvn8KgQ4gX44Q3cGf/X3/foto-71-X3.jpg'
  }
];

const Services: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('01');

  return (
    <section id="services" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="container mx-auto px-4 h-full">
        
        {/* Header Compacto - Slide Up on Scroll */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-12 flex flex-col md:flex-row justify-between items-end border-b border-zinc-800 pb-6 gap-6"
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white uppercase tracking-tighter">
            O Que <span className="text-red-600">Faço</span>
          </h2>
          <p className="text-zinc-500 font-mono text-xs md:text-sm uppercase tracking-widest max-w-md text-right">
             Selecione uma área para ver detalhes
          </p>
        </motion.div>

        {/* Creative Layout: Horizontal Accordion - Fade In on Scroll */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col lg:flex-row gap-4 h-auto lg:h-[600px] w-full"
        >
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
                  
                  {/* MOBILE: Inactive View (Title Only) */}
                  {!isActive && (
                    <div className="lg:hidden absolute inset-0 flex items-center px-6">
                        <div className="flex items-center gap-4 w-full">
                            <span className="text-zinc-500 font-mono text-xl">/{service.id}</span>
                            <span className="font-display text-2xl font-bold text-white uppercase tracking-wider">{service.title}</span>
                        </div>
                    </div>
                  )}

                  {/* Top: ID & Icon (Visible on Desktop always, Mobile only when active) */}
                  <div className={`flex justify-between items-start transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-0 hidden lg:flex lg:opacity-0'}`}>
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
        </motion.div>
      </div>
    </section>
  );
};

export default Services;