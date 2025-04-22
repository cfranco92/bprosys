import { UseChartDataProps, UseChartDataResult } from "@/types/charts";

export function useChartData({
  category,
  performance = [],
}: UseChartDataProps): UseChartDataResult {
  
  const labels = Array.from({ length: 12 }, (_, i) => {
    const date = new Date();
    date.setMonth(date.getMonth() - (11 - i));
    return date.toLocaleDateString("es-ES", { month: "short" });
  });

  
  const data =
    performance.length > 0
      ? performance
      : Array.from({ length: 12 }, () => Math.floor(Math.random() * 100));

  
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
      },
    },
    chartTitle: getChartTitle(category),
  };
}

export default useChartData;
