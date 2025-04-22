'use client';

import styled from 'styled-components';
import { ProductCategory } from '@/lib/types';

interface CategoryTabsProps {
  categories: ProductCategory[];
  selectedCategory: ProductCategory | 'all';
  onSelectCategory: (category: ProductCategory | 'all') => void;
}

const TabsContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  gap: 0.5rem;
  padding: 0.5rem 0 1.5rem 0;
  margin-bottom: 2rem;
  
  @media (min-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
  
  &::-webkit-scrollbar {
    height: 4px;
  }
  
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 10px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: #a1a1a1;
  }
`;

interface TabProps {
  active: boolean;
}

const Tab = styled.button<TabProps>`
  padding: 0.75rem 1.25rem;
  border-radius: 2rem;
  background-color: ${props => props.active ? '#0056b3' : '#e9ecef'};
  color: ${props => props.active ? 'white' : '#495057'};
  font-weight: 600;
  font-size: 0.875rem;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.active ? '#003d82' : '#dee2e6'};
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 86, 179, 0.25);
  }
`;

const formatCategoryName = (category: string): string => {
  const formattedCategory = category.charAt(0).toUpperCase() + category.slice(1);
  
  switch (category) {
    case 'préstamo':
      return 'Préstamos';
    case 'inversión':
      return 'Inversiones';
    case 'tarjeta':
      return 'Tarjetas';
    case 'cuenta':
      return 'Cuentas';
    case 'fondo':
      return 'Fondos';
    case 'seguro':
      return 'Seguros';
    case 'all':
      return 'Todos';
    default:
      return formattedCategory;
  }
};

export const CategoryTabs = ({ 
  categories, 
  selectedCategory, 
  onSelectCategory 
}: CategoryTabsProps) => {
  return (
    <TabsContainer>
      <Tab 
        active={selectedCategory === 'all'}
        onClick={() => onSelectCategory('all')}
      >
        Todos
      </Tab>
      
      {categories.map((category) => (
        <Tab
          key={category}
          active={selectedCategory === category}
          onClick={() => onSelectCategory(category)}
        >
          {formatCategoryName(category)}
        </Tab>
      ))}
    </TabsContainer>
  );
};

export default CategoryTabs; 