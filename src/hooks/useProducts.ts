import { useState, useMemo } from 'react';
import { FinancialProduct, ProductCategory } from '@/types';
import { mockProducts } from '../data/mock-products';

export const useProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'all'>('all');
  const [products] = useState<FinancialProduct[]>(mockProducts);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'all') {
      return products;
    }
    
    return products.filter(product => product.category === selectedCategory);
  }, [products, selectedCategory]);

  const categories = useMemo(() => {
    const uniqueCategories = new Set<ProductCategory>();
    
    products.forEach(product => {
      uniqueCategories.add(product.category);
    });
    
    return Array.from(uniqueCategories);
  }, [products]);

  const getProductById = (id: string): FinancialProduct | undefined => {
    return products.find(product => product.id === id);
  };

  return {
    products: filteredProducts,
    categories,
    selectedCategory,
    setSelectedCategory,
    getProductById,
  };
}; 