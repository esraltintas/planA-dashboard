import React, { useState } from "react";
import useDashboardData from "./useDashboardData";
import { Product } from "../../types";
import { dashboardDescription } from "../../utils/constants";

import Select from "../../components/Select";
import Chart from "../../components/Chart";
import Card from "../../components/Card";

import "./Dashboard.scss";
import DateRangeSelector from "../../components/DateRangeSelector";

const Dashboard: React.FC = () => {
  const [selectedGHG, setSelectedGHG] = useState<string>("");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  const [selectedCountry, setSelectedCountry] = useState<string>("");

  const { data, chartData, ghgOptions, countryOptions } = useDashboardData(
    selectedGHG,
    startDate,
    endDate
  );

  return (
    <div className="dashboard-wrapper" role="main" aria-live="polite">
      <p className="dashboard-desc">{dashboardDescription}</p>

      <div className="dashboard-selectors">
        <Select
          selectedValue={selectedGHG}
          options={ghgOptions}
          onChange={setSelectedGHG}
          placeholder="Select GHG"
        />

        <Select
          selectedValue={selectedCountry}
          options={countryOptions}
          onChange={setSelectedCountry}
          placeholder="Select Country"
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
