
export type ChartDataPoint = number;

export type ChartLegendPosition =
  | "top"
  | "right"
  | "bottom"
  | "left"
  | "center"
  | "chartArea";
export type ChartTooltipMode = "index" | "point" | "nearest" | "dataset";


export interface UseChartDataProps {
  category: string;
  performance?: ChartDataPoint[];
}


export interface UseChartDataResult {
  chartData: {
    labels: string[];
    datasets: Array<{
      label: string;
      data: ChartDataPoint[];
      borderColor: string;
      backgroundColor: string;
      tension: number;
      fill: boolean;
    }>;
  };
  chartOptions: {
    responsive: boolean;
    maintainAspectRatio: boolean;
    plugins: {
      legend: {
        display: boolean;
        position: ChartLegendPosition;
      };
      tooltip: {
        mode: ChartTooltipMode;
        intersect: boolean;
      };
    };
    scales: {
      y: {
        ticks: {
          callback: (value: number | string) => string;
        };
      };
    };
  };
  chartTitle: string;
}


export interface ProductChartProps {
  category: string;
  performance?: ChartDataPoint[];
}
