import React from "react";
import { ChartProps } from "../../types";
import "./Chart.scss";
import {
  ComposedChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Chart: React.FC<ChartProps> = ({ chartData }) => {
  return (
    <div className="chart-wrapper">
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
        <XAxis
          dataKey="time.interval_start"
          scale="band"
          tick={{ fill: "#fff", fontSize: "10px" }}
        />
        <YAxis
          tick={{ fill: "#fff", fontSize: "10px" }}
          label={{
            value: "Density",
            angle: -90,
            position: "insideLeft",
            fill: "white",
          }}
        />
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
    </div>
  );
};

export default Chart;
