'use client';

import 'chart.js/auto';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';

import { ProductDetailProps } from '@/models';
import { Button } from '@/common/styled-components/Button';
import Badge from '@/common/styled-components/Badge';
import InfoRow from '@/common/styled-components/InfoRow';

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

const formatCategoryName = (category: string): string => {
  return category.charAt(0).toUpperCase() + category.slice(1);
};

const getPerformanceTitle = (category: string): string => {
  switch(category) {
    case 'fondo':
    case 'inversión':
      return 'Rendimiento histórico';
    case 'cuenta':
      return 'Interés acumulado';
    case 'tarjeta':
      return 'Beneficios mensuales';
    case 'préstamo':
      return 'Comparativa de tasas';
    case 'seguro':
      return 'Índice de satisfacción';
    default:
      return 'Rendimiento histórico';
  }
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
        label: `${getPerformanceTitle(category)} (%)`,
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
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
      <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 mb-6 hover:text-blue-700">
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Volver al catálogo
      </Link>
      
      <div className="mb-8">
        <Badge rounded className="uppercase mb-3 tracking-wider">
          {formatCategoryName(category)}
        </Badge>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          {name}
        </h1>
        <div className="text-lg text-gray-600 mb-6">
          {type}
        </div>
      </div>
      
      <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden mb-8">
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
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="text-lg leading-relaxed text-gray-800 mb-8">
            {description}
          </div>
          
          <h2 className="text-xl font-semibold mb-4">Beneficios principales</h2>
          <ul className="pl-6 mb-10 list-disc marker:text-blue-700">
            {benefits.map((benefit: string, index: number) => (
              <li key={index} className="mb-3 leading-relaxed">
                {benefit}
              </li>
            ))}
          </ul>
          
          {performance && performance.length > 0 ? (
            <div className="mt-8 bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">
                {getPerformanceTitle(category)}
              </h3>
              <Chart data={chartData} options={chartOptions} />
              
              <div className="mt-4 pt-4 border-t border-gray-100 text-sm text-gray-500">
                <p>Los datos mostrados corresponden a los últimos 6 meses. El rendimiento pasado no garantiza resultados futuros.</p>
              </div>
            </div>
          ) : (
            <div className="mt-4 p-4 bg-gray-100 rounded-lg">
              <p className="text-gray-600">Este producto no tiene datos de rendimiento histórico.</p>
            </div>
          )}
        </div>
        
        <div>
          <div className="bg-gray-100 rounded-2xl p-6 sticky top-24">
            <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
              <div className="flex items-center gap-2 text-lg font-semibold text-gray-800 mb-4">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Información clave
              </div>
              
              <div className="space-y-1">
                {interestRate !== undefined && (
                  <InfoRow
                    label="Tasa de interés"
                    value={`${interestRate}%`}
                  />
                )}
                
                {riskLevel && (
                  <InfoRow
                    label="Nivel de riesgo"
                    value={
                      <span className={`
                        ${riskLevel === 'bajo' ? 'text-green-600' : ''}
                        ${riskLevel === 'medio' ? 'text-orange-500' : ''}
                        ${riskLevel === 'alto' ? 'text-red-600' : ''}
                      `}>
                        {riskLevel.charAt(0).toUpperCase() + riskLevel.slice(1)}
                      </span>
                    }
                  />
                )}
                
                {minAmount && (
                  <InfoRow
                    label="Inversión mínima"
                    value={`$${minAmount.toLocaleString()}`}
                  />
                )}
                
                {term && (
                  <InfoRow
                    label="Plazo"
                    value={term}
                  />
                )}
                
                {monthlyFee !== undefined && (
                  <InfoRow
                    label="Cuota mensual"
                    value={`$${monthlyFee.toLocaleString()}`}
                  />
                )}
                
                {annualFee !== undefined && (
                  <InfoRow
                    label="Cuota anual"
                    value={`$${annualFee.toLocaleString()}`}
                  />
                )}
              </div>
            </div>
            
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
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 