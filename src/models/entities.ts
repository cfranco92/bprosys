import { ProductCategory, RiskLevel } from './domain-types';

export interface FinancialProduct {
  id: string;
  name: string;
  type: string;
  category: ProductCategory;
  description: string;
  interestRate?: number;
  riskLevel?: RiskLevel;
  benefits: string[];
  imageUrl: string;
  minAmount?: number;
  term?: string;
  monthlyFee?: number;
  annualFee?: number;
  performance?: number[];
} 