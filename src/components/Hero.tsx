import React from 'react';
import { StarBorder } from '../components/ui/star-border';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ihr Partner für professionelle Schienenfahrzeug-Instandhaltung
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Qualität, Zuverlässigkeit und Expertise in der Wartung und Reparatur von Schienenfahrzeugen
            </p>
            <StarBorder
              as="a"
              href="#contact"
              color="white"
              className="hover:bg-black/80 transition-colors duration-200"
            >
              Kontakt aufnehmen
            </StarBorder>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;