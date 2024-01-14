import React, { useEffect, useState, useMemo } from "react";
import { Product, Statistic, DataPoint } from "../../types";
import * as dashboardProxy from "../../proxy/dashboardProxy";
import { dashboardDescription } from "../../utils/constants";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import GHGSelector from "../GHGSelector";
import Chart from "../Chart";
import DashboardCard from "../DashboardCard/DashboardCard";

import "./Dashboard.css";

const Dashboard: React.FC = () => {
  const [data, setData] = useState<Product[]>([]);
  const [chartData, setChartData] = useState<Statistic[]>([]);
  const [selectedGHG, setSelectedGHG] = useState<string>("");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productResponse = await dashboardProxy.productListGet();

        setData(productResponse.data);

        if (selectedGHG) {
          const statisticResponse = await dashboardProxy.productStatisticGet(
            selectedGHG,
            startDate,
            endDate
          );

          const formattedChartData = statisticResponse.data.map(
            (dataPoint: DataPoint) => {
              const date = new Date(dataPoint.time.interval_start);
              const formattedDate = `${date.getFullYear()}-${String(
                date.getMonth() + 1
              ).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;

              return {
                ...dataPoint,
                time: {
                  interval_start: formattedDate,
                },
              };
            }
          );

          console.log(formattedChartData);

          setChartData(formattedChartData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [selectedGHG, startDate, endDate]);

  const ghgOptions = useMemo(() => {
    const uniqueGHGs = [...new Set(data.map((product) => product.name))];

    return uniqueGHGs.map((ghg) => ({ value: ghg, label: ghg }));
  }, [data]);

  return (
    <div className="dashboard-wrapper">
      <GHGSelector
        selectedGHG={selectedGHG}
        ghgOptions={ghgOptions}
        onChange={(selected) => setSelectedGHG(selected)}
      />

      <label>Start Date:</label>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
      />
      <label>End Date:</label>
      <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
      />

      <p>{dashboardDescription}</p>

      {selectedGHG && <Chart chartData={chartData} />}
      {selectedGHG &&
        data
          .filter((product) => product.name === selectedGHG)
          .map((product: Product) => (
            <DashboardCard
              key={product.name}
              title={product.name}
              description={product.description}
            />
          ))}
    </div>
  );
};

export default Dashboard;
