'use client';

import 'chart.js/auto';
import Link from 'next/link';

import { ProductDetailProps } from '@/models';
import { Button, Badge } from '@/common/styled-components';
import { formatCategoryName } from '@/utils';
import ProductImage from './ProductImage';
import ProductChart from './ProductChart';
import ProductInfo from './ProductInfo';

export const ProductDetail = ({ product }: ProductDetailProps) => {
  const {
    name,
    type,
    category,
    description,
    benefits,
    imageUrl,
    performance
  } = product;

  return (
    <main className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
      <nav aria-label="Navegación de regreso">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 mb-6 hover:text-blue-700">
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Volver al catálogo</span>
        </Link>
      </nav>
      
      <article>
        <header className="mb-8">
          <Badge rounded className="uppercase mb-3 tracking-wider">
            {formatCategoryName(category)}
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            {name}
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            {type}
          </p>
        </header>
        
        <ProductImage 
          imageUrl={imageUrl}
          name={name}
          type={type}
          className="w-full h-[300px] md:h-[400px] mb-8"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <section className="lg:col-span-2">
            <div className="text-lg leading-relaxed text-gray-800 mb-8">
              {description}
            </div>
            
            <section aria-labelledby="beneficios-title">
              <h2 id="beneficios-title" className="text-xl font-semibold mb-4">Beneficios principales</h2>
              <ul className="pl-6 mb-10 list-disc marker:text-blue-700">
                {benefits.map((benefit: string, index: number) => (
                  <li key={index} className="mb-3 leading-relaxed">
                    {benefit}
                  </li>
                ))}
              </ul>
            </section>
            
            <section aria-labelledby="rendimiento-title">
              <h2 id="rendimiento-title" className="sr-only">Rendimiento histórico</h2>
              {performance && performance.length > 0 ? (
                <ProductChart category={category} performance={performance} />
              ) : (
                <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                  <p className="text-gray-600">Este producto no tiene datos de rendimiento histórico.</p>
                </div>
              )}
            </section>
          </section>
          
          <aside>
            <div className="bg-gray-100 rounded-2xl p-6 sticky top-24">
              <ProductInfo product={product} />
              
              <Button fullWidth size="large">
                Solicitar este producto
              </Button>
              
              <div className="mt-4">
                <Button variant="secondary" fullWidth>
                  Hablar con un asesor
                </Button>
              </div>
              
              <div className="mt-8 text-sm text-gray-500 text-center">
                <p>¿Necesitas más información?</p>
                <p className="mt-1">Llámanos al 900 123 456</p>
              </div>
            </div>
          </aside>
        </div>
      </article>
    </main>
  );
};

export default ProductDetail; 