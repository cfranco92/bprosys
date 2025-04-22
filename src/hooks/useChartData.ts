import { UseChartDataProps, UseChartDataResult } from "@/types/charts";

export function useChartData({
  category,
  performance = [],
}: UseChartDataProps): UseChartDataResult {
  // Limitar a los últimos 6 meses para las etiquetas
  const labels = Array.from({ length: 6 }, (_, i) => {
    const date = new Date();
    date.setMonth(date.getMonth() - (5 - i));
    return date.toLocaleDateString("es-ES", { month: "short" });
  });

  // Usar los datos de rendimiento proporcionados o generar datos aleatorios
  // Asegurarnos de limitar a 6 elementos para mantener consistencia con las etiquetas
  const data =
    performance.length > 0
      ? performance.slice(0, 6)
      : Array.from({ length: 6 }, () => Math.floor(Math.random() * 100));

  const getChartTitle = (category: string): string => {
    switch (category.toLowerCase()) {
      case "fondo":
        return "Rendimiento del Fondo";
      case "inversión":
        return "Rendimiento de la Inversión";
      case "cuenta":
        return "Balance de la Cuenta";
      case "tarjeta":
        return "Gastos de la Tarjeta";
      case "préstamo":
        return "Pagos del Préstamo";
      case "seguro":
        return "Cobertura del Seguro";
      default:
        return `Rendimiento del ${category}`;
    }
  };

  const borderColor = "rgb(53, 162, 235)";
  const backgroundColor = "rgba(53, 162, 235, 0.5)";

  return {
    chartData: {
      labels,
      datasets: [
        {
          label: "Rendimiento",
          data,
          borderColor,
          backgroundColor,
          tension: 0.3,
          fill: false,
        },
      ],
    },
    chartOptions: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: "top",
        },
        tooltip: {
          mode: "index",
          intersect: false,
        },
      },
      scales: {
        y: {
          ticks: {
            callback: (value) => `$${value}`,
          },
        },
        x: {
          grid: {
            display: false,
          },
        },
      },
    },
    chartTitle: getChartTitle(category),
  };
}

export default useChartData;
