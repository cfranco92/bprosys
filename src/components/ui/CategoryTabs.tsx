'use client';

import styled from 'styled-components';
import { ProductCategory } from '@/lib/types';

interface CategoryTabsProps {
  categories: ProductCategory[];
  selectedCategory: ProductCategory | 'all';
  onSelectCategory: (category: ProductCategory | 'all') => void;
}

const TabContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  gap: 0.5rem;
  padding: 0.5rem 0;
  scrollbar-width: none;
  -ms-overflow-style: none;
  
  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 640px) {
    gap: 1rem;
  }
`;

const Tab = styled.button<{ $active: boolean }>`
  padding: 0.75rem 1.25rem;
  border-radius: 2rem;
  font-weight: 500;
  white-space: nowrap;
  transition: all 0.2s ease;
  outline: none;

  ${props => props.$active
    ? `
      background-color: #0056b3;
      color: white;
      box-shadow: 0 4px 6px rgba(0, 86, 179, 0.25);
    `
    : `
      background-color: #f8f9fa;
      color: #495057;
      border: 1px solid #dee2e6;
      
      &:hover {
        background-color: #e9ecef;
      }
    `
  }

  &:focus-visible {
    box-shadow: 0 0 0 3px rgba(0, 86, 179, 0.4);
  }
`;

const getDisplayName = (category: ProductCategory | 'all'): string => {
  if (category === 'all') return 'Todos';
  
  
  return category.charAt(0).toUpperCase() + category.slice(1);
};

export const CategoryTabs = ({ 
  categories, 
  selectedCategory, 
  onSelectCategory 
}: CategoryTabsProps) => {
  return (
    <TabContainer className="mb-6">
      <Tab
        $active={selectedCategory === 'all'}
        onClick={() => onSelectCategory('all')}
        aria-label="Ver todos los productos"
        aria-selected={selectedCategory === 'all'}
        role="tab"
      >
        Todos
      </Tab>
      
      {categories.map((category) => (
        <Tab
          key={category}
          $active={selectedCategory === category}
          onClick={() => onSelectCategory(category)}
          aria-label={`Ver productos de categoría ${getDisplayName(category)}`}
          aria-selected={selectedCategory === category}
          role="tab"
        >
          {getDisplayName(category)}
        </Tab>
      ))}
    </TabContainer>
  );
};

export default CategoryTabs; 