'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { ProductCardProps } from '@/types';
import { Card, Badge, InfoRow } from '@/common/styled-components';
import { formatCategoryName, formatCurrency, formatPercentage } from '@/utils';

export const ProductCard = ({ product }: ProductCardProps) => {
  const { 
    id, 
    name, 
    type, 
    category, 
    interestRate, 
    riskLevel, 
    imageUrl 
  } = product;
  
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  return (
    <article>
      <Link href={`/product/${id}`} 
          className="no-underline block h-full"
          aria-labelledby={`product-title-${id}`}
          title={`Ver detalles de ${name}`}>
        <Card interactive className="h-full">
          <div className="relative w-full h-[180px] overflow-hidden bg-gray-100" aria-hidden={imageError}>
            <Image
              src={imageUrl}
              alt={`${name} - ${type}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={`object-cover transition-opacity duration-300 ${imageLoading ? 'opacity-0' : 'opacity-100'}`}
              onLoad={() => setImageLoading(false)}
              onError={() => {
                setImageError(true);
                setImageLoading(false);
              }}
            />
            {imageLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100" aria-live="polite">
                <div role="status">
                  <span className="sr-only">Cargando imagen</span>
                  <div>Cargando...</div>
                </div>
              </div>
            )}
            {imageError && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-600 p-4" aria-live="polite">
                <div>
                  <span className="sr-only">Error al cargar la imagen</span>
                  {name}
                </div>
              </div>
            )}
          </div>
          
          <Card.Body>
            <Badge rounded className="mb-3">
              {formatCategoryName(category)}
            </Badge>
            <h3 id={`product-title-${id}`} className="text-xl font-semibold text-gray-800 mb-2 leading-tight">
              {name}
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              {type}
            </p>
            
            <dl className="flex flex-col gap-2 mt-4">
              {interestRate !== undefined && (
                <InfoRow 
                  label="Tasa de interés"
                  value={formatPercentage(interestRate)}
                />
              )}
              
              {riskLevel && (
                <InfoRow 
                  label="Nivel de riesgo"
                  value={formatCategoryName(riskLevel)}
                />
              )}
              
              {product.minAmount && (
                <InfoRow 
                  label="Inversión mínima"
                  value={formatCurrency(product.minAmount)}
                />
              )}
              
              {product.monthlyFee !== undefined && (
                <InfoRow 
                  label="Cuota mensual"
                  value={formatCurrency(product.monthlyFee)}
                />
              )}
            </dl>
          </Card.Body>
        </Card>
      </Link>
    </article>
  );
};

export default ProductCard; 