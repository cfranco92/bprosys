'use client';

import 'chart.js/auto';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import styled from 'styled-components';

import { FinancialProduct } from '@/types';
import { Button } from '@/common/styled-components/Button';

const Chart = dynamic(
  () => import('react-chartjs-2').then((mod) => mod.Line),
  {
    ssr: false,
    loading: () => (
      <div className="h-64 bg-gray-100 rounded-lg animate-pulse">
        <div className="flex h-full items-center justify-center text-gray-500">
          Cargando gráfica...
        </div>
      </div>
    ),
  }
);

interface ProductDetailProps {
  product: FinancialProduct;
}

const DetailContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem 1rem;
  
  @media (min-width: 768px) {
    padding: 3rem 2rem;
  }
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #6c757d;
  margin-bottom: 1.5rem;
  
  &:hover {
    color: #0056b3;
  }
`;

const ProductHeader = styled.div`
  margin-bottom: 2rem;
`;

const CategoryLabel = styled.span`
  display: inline-block;
  background-color: #e9ecef;
  color: #495057;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  margin-bottom: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const ProductTitle = styled.h1`
  font-size: 2.25rem;
  font-weight: 700;
  color: #212529;
  margin-bottom: 0.5rem;
  
  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const ProductType = styled.div`
  font-size: 1.125rem;
  color: #6c757d;
  margin-bottom: 1.5rem;
`;

const ProductImage = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  border-radius: 1rem;
  overflow: hidden;
  margin-bottom: 2rem;
  
  @media (min-width: 768px) {
    height: 400px;
  }
`;

const ContentLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 1024px) {
    grid-template-columns: 2fr 1fr;
  }
`;

const MainContent = styled.div`
  
`;

const Description = styled.div`
  font-size: 1.125rem;
  line-height: 1.7;
  color: #343a40;
  margin-bottom: 2rem;
`;

const SideContent = styled.div`
  background-color: #f8f9fa;
  border-radius: 1rem;
  padding: 1.5rem;
  height: fit-content;
`;

const InfoCard = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const InfoTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #212529;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const InfoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const InfoItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 0;
  border-bottom: 1px solid #e9ecef;
  
  &:last-child {
    border-bottom: none;
  }
`;

const InfoLabel = styled.span`
  color: #6c757d;
`;

const InfoValue = styled.span`
  font-weight: 600;
  color: #212529;
`;

const BenefitsList = styled.ul`
  padding-left: 1.5rem;
  margin-bottom: 2.5rem;
`;

const BenefitItem = styled.li`
  margin-bottom: 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  
  &::marker {
    color: #0056b3;
  }
`;

const ChartContainer = styled.div`
  margin-top: 2rem;
  background-color: white;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const ChartTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #212529;
  margin-bottom: 1.5rem;
`;

const formatCategoryName = (category: string): string => {
  return category.charAt(0).toUpperCase() + category.slice(1);
};

export const ProductDetail = ({ product }: ProductDetailProps) => {
  const {
    name,
    type,
    category,
    description,
    interestRate,
    riskLevel,
    benefits,
    imageUrl,
    minAmount,
    term,
    monthlyFee,
    annualFee,
    performance
  } = product;
  
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  const chartData = {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Rendimiento (%)',
        data: Array.isArray(performance) ? performance : [0, 0, 0, 0, 0, 0],
        borderColor: '#0056b3',
        backgroundColor: 'rgba(0, 86, 179, 0.1)',
        tension: 0.4,
        fill: true,
      },
    ],
  };
  
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: true,
        position: 'top' as const,
      },
      tooltip: {
        mode: 'index' as const,
        intersect: false,
      },
    },
    scales: {
      y: {
        ticks: {
          callback: function(value: number | string) {
            return value + '%';
          },
        },
      },
    },
  };

  return (
    <DetailContainer>
      <BackLink href="/">
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Volver al catálogo
      </BackLink>
      
      <ProductHeader>
        <CategoryLabel>{formatCategoryName(category)}</CategoryLabel>
        <ProductTitle>{name}</ProductTitle>
        <ProductType>{type}</ProductType>
      </ProductHeader>
      
      <ProductImage>
        <Image
          src={imageUrl}
          alt={name}
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          className={`object-cover transition-opacity duration-300 ${imageLoading ? 'opacity-0' : 'opacity-100'}`}
          onLoad={() => setImageLoading(false)}
          onError={() => {
            setImageError(true);
            setImageLoading(false);
          }}
        />
        {imageLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div>Cargando imagen...</div>
          </div>
        )}
        {imageError && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-600">
            <div>
              <p className="font-bold mb-2">{name}</p>
              <p>{type}</p>
            </div>
          </div>
        )}
      </ProductImage>
      
      <ContentLayout>
        <MainContent>
          <Description>{description}</Description>
          
          <h2 className="text-xl font-semibold mb-4">Beneficios principales</h2>
          <BenefitsList>
            {benefits.map((benefit, index) => (
              <BenefitItem key={index}>{benefit}</BenefitItem>
            ))}
          </BenefitsList>
          
          {performance && performance.length > 0 ? (
            <ChartContainer>
              <ChartTitle>Rendimiento histórico</ChartTitle>
              <Chart data={chartData} options={chartOptions} />
            </ChartContainer>
          ) : (
            <div className="mt-4 p-4 bg-gray-100 rounded-lg">
              <p className="text-gray-600">Este producto no tiene datos de rendimiento histórico.</p>
            </div>
          )}
        </MainContent>
        
        <SideContent>
          <InfoCard>
            <InfoTitle>
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Información clave
            </InfoTitle>
            <InfoList>
              {interestRate !== undefined && (
                <InfoItem>
                  <InfoLabel>Tasa de interés</InfoLabel>
                  <InfoValue>{interestRate}%</InfoValue>
                </InfoItem>
              )}
              {riskLevel && (
                <InfoItem>
                  <InfoLabel>Nivel de riesgo</InfoLabel>
                  <InfoValue className={`
                    ${riskLevel === 'bajo' ? 'text-green-600' : ''}
                    ${riskLevel === 'medio' ? 'text-orange-500' : ''}
                    ${riskLevel === 'alto' ? 'text-red-600' : ''}
                  `}>
                    {riskLevel.charAt(0).toUpperCase() + riskLevel.slice(1)}
                  </InfoValue>
                </InfoItem>
              )}
              {minAmount && (
                <InfoItem>
                  <InfoLabel>Inversión mínima</InfoLabel>
                  <InfoValue>${minAmount.toLocaleString()}</InfoValue>
                </InfoItem>
              )}
              {term && (
                <InfoItem>
                  <InfoLabel>Plazo</InfoLabel>
                  <InfoValue>{term}</InfoValue>
                </InfoItem>
              )}
              {monthlyFee !== undefined && (
                <InfoItem>
                  <InfoLabel>Cuota mensual</InfoLabel>
                  <InfoValue>${monthlyFee.toLocaleString()}</InfoValue>
                </InfoItem>
              )}
              {annualFee !== undefined && (
                <InfoItem>
                  <InfoLabel>Cuota anual</InfoLabel>
                  <InfoValue>${annualFee.toLocaleString()}</InfoValue>
                </InfoItem>
              )}
            </InfoList>
          </InfoCard>
          
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
        </SideContent>
      </ContentLayout>
    </DetailContainer>
  );
};

export default ProductDetail; 