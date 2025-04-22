"use client";

import dynamic from "next/dynamic";
import { useChartData } from "@/hooks/useChartData";
import { ProductChartProps } from "@/types";

// Importando Chart.js de manera dinámica para evitar problemas de SSR
const Chart = dynamic(() => import("react-chartjs-2").then((mod) => mod.Line), {
  ssr: false,
  loading: () => (
    <div className="h-64 bg-gray-100 rounded-lg animate-pulse">
      <div className="flex h-full items-center justify-center text-gray-500">
        Cargando gráfica...
      </div>
    </div>
  ),
});

// Registrar los componentes necesarios de Chart.js solo una vez
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Registrar solo los componentes necesarios
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export const ProductChart = ({ category, performance }: ProductChartProps) => {
  const { chartData, chartOptions, chartTitle } = useChartData({
    category,
    performance,
  });

  return (
    <div className="mt-8 bg-white rounded-2xl p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-gray-800 mb-6">{chartTitle}</h3>
      <div className="h-64">
        <Chart data={chartData} options={chartOptions} />
      </div>

      <div className="mt-4 pt-4 border-t border-gray-100 text-sm text-gray-500">
        <p>
          Los datos mostrados corresponden a los últimos 6 meses. El rendimiento
          pasado no garantiza resultados futuros.
        </p>
      </div>
    </div>
  );
};

export default ProductChart;
