import {
  MainLayout,
  HeroSection,
  ProductsSection,
  AboutSection,
} from "@/common/components";
import Link from "next/link";

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 bg-blue-50 rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-2">
            Productos con gráficas de rendimiento:
          </h2>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/product/3"
              className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Fondo Diversificado Global
            </Link>
            <Link
              href="/product/6"
              className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Plan de Pensiones Estable
            </Link>
            <Link
              href="/product/8"
              className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Fondo Tecnológico
            </Link>
            <Link
              href="/product/12"
              className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Plan Inversión Sostenible
            </Link>
          </div>
        </div>
      </div>
      <ProductsSection />
      <AboutSection />
    </MainLayout>
  );
}
