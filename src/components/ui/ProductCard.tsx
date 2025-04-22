'use client';

import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { FaChevronRight } from 'react-icons/fa';
import { FinancialProduct } from '@/lib/types';

const Card = styled.div`
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 160px;
  background-color: #f0f4f8;
`;

const CategoryTag = styled.span`
  position: absolute;
  top: 12px;
  left: 12px;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.35rem 0.75rem;
  border-radius: 20px;
  z-index: 1;
`;

const RiskTag = styled.span<{ risk: 'bajo' | 'medio' | 'alto' }>`
  position: absolute;
  top: 12px;
  right: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.35rem 0.75rem;
  border-radius: 20px;
  z-index: 1;
  
  ${({ risk }) => {
    switch (risk) {
      case 'bajo':
        return 'background-color: rgba(37, 160, 91, 0.9); color: white;';
      case 'medio':
        return 'background-color: rgba(246, 173, 85, 0.9); color: white;';
      case 'alto':
        return 'background-color: rgba(223, 71, 89, 0.9); color: white;';
      default:
        return 'background-color: rgba(0, 0, 0, 0.6); color: white;';
    }
  }}
`;

const CardContent = styled.div`
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const ProductName = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  line-height: 1.3;
  color: #1a1a1a;
`;

const ProductDescription = styled.p`
  color: #4a5568;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  flex-grow: 1;
`;

const ProductMeta = styled.div`
  margin-top: auto;
  border-top: 1px solid #e2e8f0;
  padding-top: 1rem;
`;

const MetaRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const MetaLabel = styled.span`
  font-size: 0.75rem;
  color: #718096;
`;

const MetaValue = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  color: #2d3748;
`;

const ViewDetailsLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  margin-top: 1rem;
  padding: 0.75rem;
  background-color: #0056b3;
  color: white;
  font-weight: 600;
  font-size: 0.875rem;
  border-radius: 6px;
  text-align: center;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #003d82;
  }
`;

export const ProductCard = ({ product }: { product: FinancialProduct }) => {
  const formatCategoryName = (category: string): string => {
    const formattedCategory = category.charAt(0).toUpperCase() + category.slice(1);
    
    switch (category) {
      case 'préstamo':
        return 'Préstamo';
      case 'inversión':
        return 'Inversión';
      case 'tarjeta':
        return 'Tarjeta';
      case 'cuenta':
        return 'Cuenta';
      case 'fondo':
        return 'Fondo';
      case 'seguro':
        return 'Seguro';
      default:
        return formattedCategory;
    }
  };

  return (
    <Card>
      <ImageContainer>
        <CategoryTag>
          {formatCategoryName(product.category)}
        </CategoryTag>
        
        {product.riskLevel && (
          <RiskTag risk={product.riskLevel}>
            Riesgo {product.riskLevel.charAt(0).toUpperCase() + product.riskLevel.slice(1)}
          </RiskTag>
        )}
        
        <Image
          src={product.imageUrl || '/images/default-product.jpg'}
          alt={product.name}
          fill
          style={{ objectFit: 'cover' }}
        />
      </ImageContainer>
      
      <CardContent>
        <ProductName>{product.name}</ProductName>
        <ProductDescription>
          {product.description.length > 120
            ? `${product.description.substring(0, 120)}...`
            : product.description}
        </ProductDescription>
        
        <ProductMeta>
          {product.interestRate !== undefined && (
            <MetaRow>
              <MetaLabel>Tasa de interés</MetaLabel>
              <MetaValue>{product.interestRate}%</MetaValue>
            </MetaRow>
          )}
          
          {product.monthlyFee !== undefined && (
            <MetaRow>
              <MetaLabel>Cuota mensual</MetaLabel>
              <MetaValue>${product.monthlyFee.toLocaleString('es-ES')}</MetaValue>
            </MetaRow>
          )}
          
          {product.minAmount !== undefined && (
            <MetaRow>
              <MetaLabel>Inversión mínima</MetaLabel>
              <MetaValue>${product.minAmount.toLocaleString('es-ES')}</MetaValue>
            </MetaRow>
          )}
        </ProductMeta>
        
        <ViewDetailsLink href={`/product/${product.id}`}>
          Ver detalles <FaChevronRight size={12} />
        </ViewDetailsLink>
      </CardContent>
    </Card>
  );
};

export default ProductCard; 