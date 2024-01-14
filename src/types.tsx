export interface Product {
  name: string;
  description: string;
  product_variable: string;
}

export interface Statistic {
  time: {
    interval_start: string;
    max: string;
    min: string;
  };
  value: {
    average: number;
    count: number;
    max: number;
    min: number;
    standard_deviation: number;
  };
}

export interface ProductStatisticGetParams {
  selectedGHG: string;
  startDate: Date | null;
  endDate: Date | null;
}

export interface ChartProps {
  chartData: any[];
}

export interface GHGSelectorProps {
  selectedGHG: string;
  ghgOptions: { value: string; label: string }[];
  onChange: (selectedGHG: string) => void;
}

export interface DashboardCardProps {
  title: string;
  description: string;
  imageUrl?: string;
}

export interface DataPoint {
  time: {
    interval_start: string;
    max: string;
    min: string;
  };
  value: {
    average: number;
    count: number;
    max: number;
    min: number;
    standard_deviation: number;
  };
}
