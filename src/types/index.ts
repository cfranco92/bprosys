// Domain Models
import { ReactNode } from 'react';
import { ButtonHTMLAttributes } from 'react';
import { ImageProps } from 'next/image';

// Domain Types
export type ProductCategory = 
  | 'cuenta' 
  | 'tarjeta' 
  | 'fondo' 
  | 'seguro' 
  | 'préstamo' 
  | 'inversión';

export type RiskLevel = 'bajo' | 'medio' | 'alto';

// Product Domain Model
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

// Component Props
export interface ProductCardProps {
  product: FinancialProduct;
}

export interface ProductDetailProps {
  product: FinancialProduct;
}

export interface CategoryTabsProps {
  categories: ProductCategory[];
  selectedCategory: ProductCategory | 'all';
  onSelectCategory: (category: ProductCategory | 'all') => void;
}

export interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'info';
  rounded?: boolean;
  className?: string;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  className?: string;
}

export interface CardProps {
  children: ReactNode;
  className?: string;
}

export interface CardBodyProps {
  children: ReactNode;
  className?: string;
}

export interface InfoRowProps {
  label: string;
  value: ReactNode;
  className?: string;
}

export interface SectionProps {
  id?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export interface ImageWithFallbackProps extends Omit<ImageProps, 'onError'> {
  fallbackSrc?: string;
}

export interface MainLayoutProps {
  children: ReactNode;
}

// Context Types
export interface ProductContextType {
  products: FinancialProduct[];
  selectedCategory: ProductCategory | 'all';
  setSelectedCategory: (category: ProductCategory | 'all') => void;
  filteredProducts: FinancialProduct[];
  categories: ProductCategory[];
  loading: boolean;
} 