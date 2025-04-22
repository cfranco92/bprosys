'use client';

import { FinancialProduct } from '@/lib/types';
import Card from '@/components/ui/Card';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

interface ProductCardProps {
  product: FinancialProduct;
}

const ProductImage = styled.div`
  position: relative;
  width: 100%;
  height: 180px;
  overflow: hidden;
  background-color: #f8f9fa;
`;

const CategoryBadge = styled.span`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 600;
  background-color: #e9ecef;
  color: #495057;
  margin-bottom: 0.75rem;
`;

const ProductTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #212529;
  margin-bottom: 0.5rem;
  line-height: 1.4;
`;

const ProductType = styled.p`
  font-size: 0.875rem;
  color: #6c757d;
  margin-bottom: 1rem;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px dashed #e9ecef;
  
  &:last-child {
    border-bottom: none;
  }
`;

const InfoLabel = styled.span`
  font-size: 0.875rem;
  color: #6c757d;
`;

const InfoValue = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  color: #212529;
`;

const formatCategoryName = (category: string): string => {
  return category.charAt(0).toUpperCase() + category.slice(1);
};

const StyledLink = styled(Link)`
  text-decoration: none;
  display: block;
  height: 100%;
`;

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
    <StyledLink href={`/product/${id}`}>
      <Card interactive className="h-full">
        <ProductImage>
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
        </ProductImage>
        
        <Card.Body>
          <CategoryBadge>{formatCategoryName(category)}</CategoryBadge>
          <ProductTitle>{name}</ProductTitle>
          <ProductType>{type}</ProductType>
          
          <ProductInfo>
            {interestRate !== undefined && (
              <InfoRow>
                <InfoLabel>Tasa de interés</InfoLabel>
                <InfoValue>{interestRate}%</InfoValue>
              </InfoRow>
            )}
            
            {riskLevel && (
              <InfoRow>
                <InfoLabel>Nivel de riesgo</InfoLabel>
                <InfoValue>{riskLevel.charAt(0).toUpperCase() + riskLevel.slice(1)}</InfoValue>
              </InfoRow>
            )}
            
            {product.minAmount && (
              <InfoRow>
                <InfoLabel>Inversión mínima</InfoLabel>
                <InfoValue>${product.minAmount.toLocaleString()}</InfoValue>
              </InfoRow>
            )}
            
            {product.monthlyFee !== undefined && (
              <InfoRow>
                <InfoLabel>Cuota mensual</InfoLabel>
                <InfoValue>${product.monthlyFee.toLocaleString()}</InfoValue>
              </InfoRow>
            )}
          </ProductInfo>
        </Card.Body>
      </Card>
    </StyledLink>
  );
};

export default ProductCard; 