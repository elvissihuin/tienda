import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative h-screen w-full overflow-hidden flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/fashion-hero/1920/1080?grayscale"
          alt="Banner Principal"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl p-8 md:p-12 rounded-[2rem] bg-white/5 backdrop-blur-md border border-white/10"
        >
          <span className="inline-block text-accent font-bold tracking-widest uppercase text-sm mb-4">
            Temporada 2024
          </span>
          <h1 className="text-5xl md:text-8xl font-display font-extrabold text-white leading-[0.9] mb-8">
            NUEVA COLECCIÓN <br />
            <span className="text-accent">DISPONIBLE</span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl mb-10 max-w-lg">
            Descubre las últimas tendencias en moda urbana. Diseños exclusivos pensados para tu estilo diario.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#catalogo"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-bold rounded-full hover:bg-white hover:text-black transition-all duration-300 group"
            >
              Ver catálogo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 hidden md:block"
      >
        <div className="w-[1px] h-12 bg-white/30 mx-auto" />
      </motion.div>
    </section>
  );
}
