import React from 'react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="nosotros" className="py-24 bg-zinc-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://files.catbox.moe/kxkp1g.jpeg"
                alt="Sobre Nosotros"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-accent p-8 rounded-3xl shadow-xl hidden md:block">
              <span className="text-white font-display font-extrabold text-4xl leading-none">
                EST. <br /> 2020
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-display font-extrabold tracking-tighter">
              MODA QUE <br /> <span className="text-accent">DEFINE TU ESTILO</span>
            </h2>
            <div className="space-y-4 text-zinc-600 text-lg leading-relaxed">
              <p>
                En Urban Style, no solo vendemos ropa; ofrecemos una forma de expresión. Nacimos con la visión de traer las tendencias más frescas de la cultura urbana directamente a tu armario.
              </p>
              <p>
                Cada pieza en nuestra colección es seleccionada por su calidad, comodidad y diseño único. Creemos que la ropa juvenil debe ser audaz, versátil y, sobre todo, auténtica.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div>
                <h4 className="font-bold text-black text-xl mb-2">+5000</h4>
                <p className="text-zinc-500 text-sm uppercase tracking-wider font-bold">Clientes Felices</p>
              </div>
              <div>
                <h4 className="font-bold text-black text-xl mb-2">100%</h4>
                <p className="text-zinc-500 text-sm uppercase tracking-wider font-bold">Calidad Urbana</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
