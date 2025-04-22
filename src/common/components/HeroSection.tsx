'use client';

import { Button } from '@/common/styled-components/Button';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export const HeroSection = () => {
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);
  
  return (
    <section className="bg-gradient-to-br from-[#0056b3] to-[#003580] text-white py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 lg:flex-row lg:items-center">
        <div className="flex-1 lg:max-w-[50%]">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Soluciones financieras para un futuro sin límites
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90 leading-relaxed">
            Descubre nuestros productos financieros diseñados para impulsar tus metas personales y empresariales con la tecnología más avanzada del mercado.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link href="#productos" className="no-underline">
              <Button size="large">
                Ver productos
              </Button>
            </Link>
            <Link href="#contacto" className="no-underline">
              <Button 
                size="large" 
                variant="outline"
                className="bg-white/15 text-white border-2 border-white hover:bg-white/25 focus:shadow-[0_0_0_3px_rgba(255,255,255,0.4)]"
              >
                Contactar asesor
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="flex-1 relative rounded-2xl overflow-hidden shadow-2xl" style={{ height: '400px', minHeight: '400px' }}>
          <Image
            src="/images/hero-image.jpg"
            alt="Tecnología financiera de última generación"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
            className={`object-cover transition-opacity duration-300 ${imageLoading ? 'opacity-0' : 'opacity-100'}`}
            onLoad={() => setImageLoading(false)}
            onError={() => {
              setImageError(true);
              setImageLoading(false);
            }}
          />
          {imageLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-blue-800 text-white">
              <div>Cargando...</div>
            </div>
          )}
          {imageError && (
            <div className="absolute inset-0 flex items-center justify-center bg-blue-800 text-white text-center p-8">
              <div>
                <h2 className="text-4xl font-bold mb-4">Tecnología financiera de última generación</h2>
                <p className="text-xl">Impulsando el futuro de las finanzas</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 