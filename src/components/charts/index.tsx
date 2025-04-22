import dynamic from 'next/dynamic';
import { 
  UseChartDataProps, 
  UseChartDataResult, 
  ChartLegendPosition, 
  ChartTooltipMode 
} from '@/models/charts';

export const LineChart = dynamic(
  () => import('react-chartjs-2').then(mod => mod.Line),
  {
    ssr: false,
    loading: () => <div className="animate-pulse bg-gray-200 rounded-md h-64 w-full"></div>
  }
);

export function getChartTitle(category: string): string {
  switch (category.toLowerCase()) {
    case 'fondo':
      return 'Rendimiento Histórico del Fondo';
    case 'inversión':
    case 'inversion':
      return 'Rendimiento de la Inversión';
    case 'cuenta':
      return 'Historial de Balance de Cuenta';
    case 'tarjeta':
      return 'Historial de Gastos de Tarjeta';
    case 'préstamo':
    case 'prestamo':
      return 'Historial de Pagos del Préstamo';
    case 'seguro':
      return 'Valor del Seguro a lo Largo del Tiempo';
    default:
      return `Rendimiento de ${category}`;
  }
}

export function getDefaultChartOptions() {
  return {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: true,
        position: 'top' as ChartLegendPosition,
      },
      tooltip: {
        mode: 'index' as ChartTooltipMode,
        intersect: false,
      },
    },
    scales: {
      y: {
        ticks: {
          callback: (value: number | string) => {
            return `$${value}`;
          },
        },
      },
    },
  };
}

export function useChartData({ category, performance = [] }: UseChartDataProps): UseChartDataResult {
  const defaultData = [1200, 1900, 3000, 5000, 4000, 3000, 7000, 8500];
  const data = performance.length > 0 ? performance : defaultData;
  
  const chartData = {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago'],
    datasets: [
      {
        label: 'Rendimiento',
        data,
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  return {
    chartData,
    chartOptions: getDefaultChartOptions(),
    chartTitle: getChartTitle(category),
  };
} 