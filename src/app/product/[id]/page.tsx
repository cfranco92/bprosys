import { notFound } from 'next/navigation';
import { MainLayout, ProductDetail } from '@/common/components';
import { getProductById, getProducts } from '@/services/api';

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  
  const { id } = await params;
  const product = await getProductById(id);
  
  if (!product) {
    notFound();
  }
  
  return (
    <MainLayout>
      <ProductDetail product={product} />
    </MainLayout>
  );
} 