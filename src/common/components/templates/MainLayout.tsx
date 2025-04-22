'use client';

import { MainLayoutProps } from '@/types';
import Header from '@/common/components/Header';
import Footer from '@/common/components/Footer';
import { ProductProvider } from '@/context/ProductContext';

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <ProductProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </ProductProvider>
  );
};

export default MainLayout; 