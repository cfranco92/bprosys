'use client';

import styled from 'styled-components';
import ProductCard from '@/common/components/ProductCard';
import CategoryTabs from '@/common/styled-components/CategoryTabs';
import { useProducts } from '@/hooks/useProducts';
import { ProductCategory } from '@/types';

const SectionContainer = styled.section`
  padding: 4rem 1rem;
  
  @media (min-width: 768px) {
    padding: 5rem 2rem;
  }
`;

const SectionContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  margin-bottom: 2rem;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #212529;
  margin-bottom: 1rem;
  
  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const SectionDescription = styled.p`
  font-size: 1.125rem;
  color: #6c757d;
  max-width: 800px;
  margin: 0 auto;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ProductsSection = () => {
  const { 
    products, 
    categories, 
    selectedCategory, 
    setSelectedCategory 
  } = useProducts();

  const handleCategoryChange = (category: ProductCategory | 'all') => {
    setSelectedCategory(category);
  };

  return (
    <SectionContainer id="productos">
      <SectionContent>
        <SectionHeader>
          <SectionTitle>Nuestros productos financieros</SectionTitle>
          <SectionDescription>
            Encuentra la solución que mejor se adapte a tus necesidades con nuestra amplia gama de productos financieros diseñados para cada tipo de cliente.
          </SectionDescription>
        </SectionHeader>
        
        <CategoryTabs 
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategoryChange}
        />
        
        <ProductsGrid>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductsGrid>
      </SectionContent>
    </SectionContainer>
  );
};

export default ProductsSection; 