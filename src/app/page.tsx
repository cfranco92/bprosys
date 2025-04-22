import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ProductsSection from '@/components/ProductsSection';
import AboutSection from '@/components/AboutSection';

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <ProductsSection />
      <AboutSection />
      <Footer />
    </main>
  );
}
