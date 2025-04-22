'use client';

import { createContext, useContext, ReactNode } from 'react';
import { FinancialProduct, ProductCategory } from '@/types';
import { useProducts } from '@/hooks/useProducts';

interface ProductContextType {
  products: FinancialProduct[];
  categories: ProductCategory[];
  selectedCategory: ProductCategory | 'all';
  setSelectedCategory: (category: ProductCategory | 'all') => void;
  getProductById: (id: string) => FinancialProduct | undefined;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const productData = useProducts();
  
  return (
    <ProductContext.Provider value={productData}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = (): ProductContextType => {
  const context = useContext(ProductContext);
  
  if (context === undefined) {
    throw new Error('useProductContext debe usarse dentro de un ProductProvider');
  }
  
  return context;
}; 