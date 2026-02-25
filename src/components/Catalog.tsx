import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PRODUCTS } from '../constants';
import ProductCard from './ProductCard';

export default function Catalog() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const categories = ['Todos', ...new Set(PRODUCTS.map(p => p.category))];

  const filteredProducts = activeCategory === 'Todos' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <section id="catalogo" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-extrabold tracking-tighter mb-4">
              NUESTRO <span className="text-accent italic">CATÁLOGO</span>
            </h2>
            <p className="text-zinc-500 max-w-md">
              Explora nuestra selección cuidadosamente curada de prendas urbanas de alta calidad.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 backdrop-blur-md ${
                  activeCategory === cat 
                    ? 'bg-black text-white shadow-lg shadow-black/20' 
                    : 'bg-white/50 text-zinc-500 border border-zinc-200 hover:bg-white hover:text-black'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.12,
                delayChildren: 0.1
              }
            }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
        >
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
