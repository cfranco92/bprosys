import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductDetail from '@/components/ProductDetail';
import { mockProducts } from '@/lib/data/mock-products';


export async function generateStaticParams() {
  return mockProducts.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  
  const { id } = await params;
  const product = mockProducts.find((p) => p.id === id);
  
  
  if (!product) {
    notFound();
  }
  
  return (
    <main>
      <Header />
      <ProductDetail product={product} />
      <Footer />
    </main>
  );
} 