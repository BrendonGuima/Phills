import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Logo from './Logo';

const Hero: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden">
      
      <div className="relative z-20 container mx-auto px-4 flex flex-col items-center justify-center h-full">
        
        {/* Animated Reveal with Parallax */}
        <motion.div
          style={{ y, opacity }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-4xl mx-auto flex flex-col items-center"
        >
           {/* Big Impact Logo */}
           <div className="transform hover:scale-105 transition-transform duration-700 ease-out cursor-none">
             <Logo variant="full" className="h-24 md:h-40" />
           </div>

           {/* Slogan / Statement */}
           <div className="mt-12 text-center space-y-4">
              <h1 className="font-display text-4xl md:text-6xl font-bold text-white tracking-tight leading-none">
                CAPTURE O <span className="text-red-600 italic">EXTRAORDINÁRIO</span>
              </h1>
              <p className="font-sans text-zinc-400 text-sm md:text-lg uppercase tracking-[0.2em] max-w-2xl mx-auto">
                Fotografia de Alta Performance
              </p>
           </div>
        </motion.div>

        {/* Floating Scroll Indicator - Fades out quickly on scroll */}
        <motion.div
          style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-0 w-full flex justify-between items-end px-8 md:px-16"
        >
            <div className="hidden md:block text-xs text-zinc-600 font-mono">
                EST. 2024
            </div>
            
            <div className="flex flex-col items-center gap-2">
                <div className="w-[1px] h-16 bg-gradient-to-b from-red-600 to-transparent"></div>
                <span className="text-[10px] uppercase tracking-widest text-zinc-500">Scroll</span>
            </div>

            <div className="hidden md:block text-xs text-zinc-600 font-mono text-right">
                BRASIL
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;