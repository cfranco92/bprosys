'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { ProductCardProps } from '@/models';
import Card from '@/common/styled-components/Card';
import Badge from '@/common/styled-components/Badge';
import InfoRow from '@/common/styled-components/InfoRow';

const formatCategoryName = (category: string): string => {
  return category.charAt(0).toUpperCase() + category.slice(1);
};

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
    <Link href={`/product/${id}`} className="no-underline block h-full">
      <Card interactive className="h-full">
        <div className="relative w-full h-[180px] overflow-hidden bg-gray-100">
          <Image
            src={imageUrl}
            alt={name}
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
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <div>Cargando...</div>
            </div>
          )}
          {imageError && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-600 p-4">
              <div>{name}</div>
            </div>
          )}
        </div>
        
        <Card.Body>
          <Badge rounded className="mb-3">
            {formatCategoryName(category)}
          </Badge>
          <h3 className="text-xl font-semibold text-gray-800 mb-2 leading-tight">
            {name}
          </h3>
          <p className="text-sm text-gray-500 mb-4">
            {type}
          </p>
          
          <div className="flex flex-col gap-2 mt-4">
            {interestRate !== undefined && (
              <InfoRow 
                label="Tasa de interés"
                value={`${interestRate}%`}
              />
            )}
            
            {riskLevel && (
              <InfoRow 
                label="Nivel de riesgo"
                value={riskLevel.charAt(0).toUpperCase() + riskLevel.slice(1)}
              />
            )}
            
            {product.minAmount && (
              <InfoRow 
                label="Inversión mínima"
                value={`$${product.minAmount.toLocaleString()}`}
              />
            )}
            
            {product.monthlyFee !== undefined && (
              <InfoRow 
                label="Cuota mensual"
                value={`$${product.monthlyFee.toLocaleString()}`}
              />
            )}
          </div>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default ProductCard; 