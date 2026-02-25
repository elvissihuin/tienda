import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { STORE_INFO } from '../constants';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Catálogo', href: '#catalogo' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Ubicación', href: '#ubicacion' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#inicio" className={`text-2xl font-display font-extrabold tracking-tighter transition-colors ${isScrolled ? 'text-black' : 'text-white'}`}>
          {STORE_INFO.name}
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-semibold uppercase tracking-wider transition-colors ${isScrolled ? 'text-zinc-600 hover:text-accent' : 'text-white/80 hover:text-white'}`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? 'text-black' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-black' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] md:hidden bg-white/95 backdrop-blur-xl"
          >
            <div className="flex flex-col h-full">
              {/* Header with dashed border as requested */}
              <div className="p-6 flex justify-between items-center border-2 border-dashed border-blue-400/50 m-4 rounded-2xl bg-white shadow-sm">
                <span className="text-2xl font-display font-extrabold tracking-tighter text-black">
                  {STORE_INFO.name}
                </span>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 hover:bg-zinc-100 rounded-full transition-colors"
                >
                  <X className="text-black w-6 h-6" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 flex flex-col justify-center px-10 space-y-8">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-4xl font-display font-extrabold text-zinc-900 hover:text-accent transition-colors flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-1 bg-accent mr-0 group-hover:mr-4 transition-all duration-300 rounded-full" />
                    {link.name}
                  </motion.a>
                ))}
              </div>

              {/* Footer decoration */}
              <div className="p-10">
                <div className="h-px w-full bg-zinc-100 mb-8" />
                <p className="text-zinc-400 text-xs font-bold tracking-widest uppercase text-center">
                  Urban Style © {new Date().getFullYear()}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
