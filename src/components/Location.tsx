import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import { STORE_INFO } from '../constants';

export default function Location() {
  return (
    <section id="ubicacion" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="bg-black rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row"
        >
          <div className="p-12 lg:p-20 lg:w-1/2 space-y-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white tracking-tighter mb-4">
                VISÍTANOS EN <br /> <span className="text-accent italic">TIENDA</span>
              </h2>
              <p className="text-white/50">
                Ven a probarte tus prendas favoritas y vive la experiencia completa de Urban Style.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-accent/20 p-3 rounded-xl">
                  <MapPin className="text-accent w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Ubicación</h4>
                  <p className="text-white/60">{STORE_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-accent/20 p-3 rounded-xl">
                  <Clock className="text-accent w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Horario de Atención</h4>
                  <p className="text-white/60 leading-relaxed">
                    {STORE_INFO.hours}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-accent/20 p-3 rounded-xl">
                  <Phone className="text-accent w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Contacto</h4>
                  <p className="text-white/60">WhatsApp: +{STORE_INFO.whatsapp}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 h-[400px] lg:h-auto bg-zinc-800 relative">
            {/* Placeholder for Map */}
            <div className="absolute inset-0 flex items-center justify-center text-white/20 p-12 text-center">
              <div className="space-y-4">
                <MapPin className="w-16 h-16 mx-auto opacity-20" />
                <p className="font-mono text-sm uppercase tracking-widest">Google Maps Integration Placeholder</p>
                <p className="text-xs opacity-40">Aquí se mostraría el mapa interactivo de la tienda.</p>
              </div>
            </div>
            {/* In a real app, you'd use an iframe or a map library here */}
            <img 
              src="https://picsum.photos/seed/map-placeholder/1000/1000?grayscale&blur=2" 
              alt="Mapa" 
              className="w-full h-full object-cover opacity-30"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
