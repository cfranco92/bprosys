'use client';

import Link from 'next/link';
import Header from '@/common/components/Header';
import Footer from '@/common/components/Footer';
import { Button } from '@/common/styled-components/Button';

export default function NotFound() {
  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto py-16 px-4 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <div className="text-8xl font-bold text-blue-700 leading-none">
          404
        </div>
        <h1 className="text-3xl font-semibold my-6">
          Página no encontrada
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto mb-8">
          Lo sentimos, la página que estás buscando no existe o ha sido movida.
        </p>
        <Link href="/" className="no-underline">
          <Button size="large">
            Volver al inicio
          </Button>
        </Link>
      </div>
      <Footer />
    </>
  );
} 