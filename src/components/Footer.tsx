import React from 'react';
import { Instagram, Facebook, Twitter, Smartphone as TikTok } from 'lucide-react';
import { STORE_INFO } from '../constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-display font-extrabold tracking-tighter">
              {STORE_INFO.name}
            </h3>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              Tu destino número uno para la moda urbana y juvenil. Estilo, calidad y autenticidad en cada prenda.
            </p>
            <div className="flex items-center space-x-4">
              <a href={STORE_INFO.socials.instagram} className="text-zinc-400 hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href={STORE_INFO.socials.facebook} className="text-zinc-400 hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href={STORE_INFO.socials.tiktok} className="text-zinc-400 hover:text-accent transition-colors">
                <TikTok size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-4 text-zinc-500 text-sm">
              <li><a href="#inicio" className="hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#catalogo" className="hover:text-white transition-colors">Catálogo</a></li>
              <li><a href="#nosotros" className="hover:text-white transition-colors">Nosotros</a></li>
              <li><a href="#ubicacion" className="hover:text-white transition-colors">Ubicación</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Categorías</h4>
            <ul className="space-y-4 text-zinc-500 text-sm">
              <li><a href="#catalogo" className="hover:text-white transition-colors">Polos</a></li>
              <li><a href="#catalogo" className="hover:text-white transition-colors">Jeans</a></li>
              <li><a href="#catalogo" className="hover:text-white transition-colors">Casacas</a></li>
              <li><a href="#catalogo" className="hover:text-white transition-colors">Accesorios</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-zinc-500 text-sm mb-4">Suscríbete para recibir ofertas exclusivas y lanzamientos.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Tu email" 
                className="bg-zinc-900 border-none rounded-lg px-4 py-2 text-sm w-full focus:ring-1 focus:ring-accent outline-none"
              />
              <button className="bg-accent text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-white hover:text-black transition-all">
                OK
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-600 text-xs uppercase tracking-widest font-bold">
          <p>© {currentYear} {STORE_INFO.name}. TODOS LOS DERECHOS RESERVADOS.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-zinc-400 transition-colors">Privacidad</a>
            <a href="#" className="hover:text-zinc-400 transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
