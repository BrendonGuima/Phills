import React from 'react';
import { Mail, MessageCircle, MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 md:py-32 relative z-10 bg-black border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Info - Slide from left */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-between"
          >
            <div>
              <h2 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                VAMOS <br />
                <span className="text-red-600">CONVERSAR.</span>
              </h2>
              <p className="text-zinc-400 text-lg mb-12 max-w-md font-light leading-relaxed">
                Estou pronto para transformar sua visão em realidade. Seja um evento, um ensaio corporativo ou automotivo, vamos criar algo único.
              </p>

              <div className="space-y-8">
                {[
                  { icon: Mail, title: "Email", value: "contato@phills.com" },
                  { icon: MessageCircle, title: "WhatsApp", value: "+55 (31) 99342-5864" },
                  { icon: MapPin, title: "Localização", value: "Belo Horizonte, MG - Brasil" }
                ].map((item, index) => (
                    <motion.div 
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + (index * 0.1), duration: 0.5 }}
                      className="flex items-start gap-4 group cursor-pointer"
                    >
                      <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-red-600 group-hover:bg-red-600/10 transition-colors">
                        <item.icon className="w-5 h-5 text-zinc-300 group-hover:text-red-500 transition-colors" />
                      </div>
                      <div>
                        <h3 className="text-white font-display font-bold text-lg">{item.title}</h3>
                        <p className="text-zinc-500 group-hover:text-white transition-colors">{item.value}</p>
                      </div>
                    </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-16 lg:mt-0 pt-8 border-t border-white/5">
                <div className="flex gap-6">
                    <a href="#" className="text-zinc-500 hover:text-red-600 transition-colors uppercase tracking-widest text-xs font-bold">Instagram</a>
                    <a href="#" className="text-zinc-500 hover:text-red-600 transition-colors uppercase tracking-widest text-xs font-bold">LinkedIn</a>
                    <a href="#" className="text-zinc-500 hover:text-red-600 transition-colors uppercase tracking-widest text-xs font-bold">Behance</a>
                </div>
            </div>
          </motion.div>

          {/* Right Column: Form - Slide Up/Fade */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-zinc-900/30 p-8 md:p-10 rounded-2xl border border-white/5 backdrop-blur-sm"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Nome</label>
                        <input type="text" className="w-full bg-black/50 border border-white/10 rounded-lg p-4 text-white focus:border-red-600 focus:outline-none transition-colors" placeholder="Seu nome" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Empresa</label>
                        <input type="text" className="w-full bg-black/50 border border-white/10 rounded-lg p-4 text-white focus:border-red-600 focus:outline-none transition-colors" placeholder="Nome da empresa (opcional)" />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Email</label>
                    <input type="email" className="w-full bg-black/50 border border-white/10 rounded-lg p-4 text-white focus:border-red-600 focus:outline-none transition-colors" placeholder="seu@email.com" />
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Sobre o Projeto</label>
                    <textarea rows={4} className="w-full bg-black/50 border border-white/10 rounded-lg p-4 text-white focus:border-red-600 focus:outline-none transition-colors" placeholder="Conte detalhes sobre o evento ou ensaio..." />
                </div>

                <button className="w-full bg-white text-black font-display font-bold text-lg py-5 rounded-lg hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 group">
                    <span>ENVIAR MENSAGEM</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;