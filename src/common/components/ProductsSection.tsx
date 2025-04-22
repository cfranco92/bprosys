'use client';

import ProductCard from '@/common/components/ProductCard';
import CategoryTabs from '@/common/styled-components/CategoryTabs';
import Section from '@/common/styled-components/Section';
import { useProducts } from '@/hooks/useProducts';
import { ProductCategory } from '@/models';

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
    <Section 
      id="productos"
      title="Nuestros productos financieros"
      description="Encuentra la solución que mejor se adapte a tus necesidades con nuestra amplia gama de productos financieros diseñados para cada tipo de cliente."
    >
      <CategoryTabs 
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategoryChange}
      />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Section>
  );
};

export default ProductsSection; 