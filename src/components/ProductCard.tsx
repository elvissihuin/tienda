import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { Product } from '../types';
import { STORE_INFO } from '../constants';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const whatsappMessage = encodeURIComponent(`Hola, quiero información sobre este producto: ${product.name} - Precio: $${product.price.toFixed(2)}`);
  const whatsappUrl = `https://wa.me/${STORE_INFO.whatsapp}?text=${whatsappMessage}`;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
      }}
      transition={{ 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] // Custom "quintic" ease-out for a more premium feel
      }}
      className="group"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-zinc-100 rounded-2xl mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/40 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-black shadow-sm">
            {product.category}
          </span>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-lg text-zinc-800 leading-tight group-hover:text-accent transition-colors">
            {product.name}
          </h3>
          <span className="font-display font-bold text-xl">
            ${product.price.toFixed(2)}
          </span>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {product.sizes.map((size) => (
            <span key={size} className="text-[11px] font-medium border border-zinc-200 px-2 py-0.5 rounded text-zinc-500">
              {size}
            </span>
          ))}
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 bg-black text-white py-3 rounded-xl font-bold hover:bg-accent transition-colors duration-300"
        >
          <MessageCircle className="w-5 h-5" />
          Comprar por WhatsApp
        </a>
      </div>
    </motion.div>
  );
};

export default ProductCard;
