import React from "react";
import { ChartProps } from "../types";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from "recharts";

const Chart: React.FC<ChartProps> = ({ chartData }) => {
  return (
    <ResponsiveContainer width={600} height={300}>
      <ComposedChart
        width={500}
        height={400}
        data={chartData}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="time.interval_start" scale="band" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area
          type="monotone"
          dataKey="value.average"
          name="Density of GHG"
          fill="#8884d8"
          stroke="#8884d8"
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default Chart;
