import React, { useEffect, useState, useMemo } from "react";
import { Product, Statistic, DataPoint } from "../../types";
import * as dashboardProxy from "../../proxy/dashboardProxy";
import { dashboardDescription } from "../../utils/constants";

import GHGSelector from "../GHGSelector/GHGSelector";
import Chart from "../Chart/Chart";
import Card from "../Card/Card";

import "./Dashboard.css";
import DateRangeSelector from "../DateRangeSelector";

const Dashboard: React.FC = () => {
  const [data, setData] = useState<Product[]>([]);
  const [chartData, setChartData] = useState<Statistic[]>([]);
  const [selectedGHG, setSelectedGHG] = useState<string>("");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(new Date());

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productResponse = await dashboardProxy.productListGet();

        setData(productResponse.data);

        if (selectedGHG) {
          const statisticResponse = await dashboardProxy.productStatisticGet({
            selectedGHG,
            startDate,
            endDate,
          });

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
    <div className="dashboard-wrapper" role="main" aria-live="polite">
      <p className="dashboard-desc">{dashboardDescription}</p>

      <div className="dashboard-selectors">
        <GHGSelector
          selectedGHG={selectedGHG}
          ghgOptions={ghgOptions}
          onChange={(selected) => setSelectedGHG(selected)}
        />

        <DateRangeSelector
          startDate={startDate}
          endDate={endDate}
          onStartDateChange={(date) => setStartDate(date)}
          onEndDateChange={(date) => setEndDate(date)}
        />
      </div>

      {selectedGHG && <Chart chartData={chartData} />}
      {selectedGHG &&
        data
          .filter((product) => product.name === selectedGHG)
          .map((product: Product) => (
            <Card
              key={product.name}
              title={product.name}
              description={product.description}
            />
          ))}
    </div>
  );
};

export default Dashboard;
