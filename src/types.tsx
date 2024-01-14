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

export interface SelectProps<T> {
  selectedValue: T;
  options: { value: T; label: string }[];
  onChange: (value: T) => void;
  placeholder?: string;
}

export interface CardProps {
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

export interface DateRangeSelectorProps {
  startDate: Date | null;
  endDate: Date | null;
  onStartDateChange: (date: Date | null) => void;
  onEndDateChange: (date: Date | null) => void;
}

export interface DashboardData {
  data: Product[];
  chartData: Statistic[];
  countries: string[];
  ghgOptions: { value: string; label: string }[];
  countryOptions: { value: string; label: string }[];
}
