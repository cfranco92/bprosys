import MainLayout from '@/common/components/templates/MainLayout';
import HeroSection from '@/common/components/HeroSection';
import ProductsSection from '@/common/components/ProductsSection';
import AboutSection from '@/common/components/AboutSection';

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <ProductsSection />
      <AboutSection />
    </MainLayout>
  );
}
