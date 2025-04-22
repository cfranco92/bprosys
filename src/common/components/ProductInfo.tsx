'use client';

import { InfoRow } from '@/common/styled-components';
import { ProductInfoProps } from '@/types';
import { formatCurrency, formatPercentage, formatCategoryName } from '@/utils';

export const ProductInfo = ({ product }: ProductInfoProps) => {
  const {
    interestRate,
    riskLevel,
    minAmount,
    term,
    monthlyFee,
    annualFee
  } = product;

  return (
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
            value={formatPercentage(interestRate)}
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
                {formatCategoryName(riskLevel)}
              </span>
            }
          />
        )}
        
        {minAmount && (
          <InfoRow
            label="Inversión mínima"
            value={formatCurrency(minAmount)}
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
            value={formatCurrency(monthlyFee)}
          />
        )}
        
        {annualFee !== undefined && (
          <InfoRow
            label="Cuota anual"
            value={formatCurrency(annualFee)}
          />
        )}
      </div>
    </div>
  );
};

export default ProductInfo; 