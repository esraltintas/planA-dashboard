import React from "react";
import { ChartProps } from "../types";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Chart: React.FC<ChartProps> = ({ chartData }) => {
  return (
    <LineChart width={600} height={300} data={chartData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="time.interval_start" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="value.average" stroke="#8884d8" />
    </LineChart>
  );
};

export default Chart;
