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
  const [selectedGHG, setSelectedGHG] = useState<string>("methane");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  const [selectedCountry, setSelectedCountry] = useState<string>("DE");

  const { data, loading } = useDashboardData(
    selectedGHG,
    selectedCountry,
    startDate,
    endDate
  );

  return (
    <div className="dashboard-wrapper" role="main" aria-live="polite">
      <p className="dashboard-desc">{dashboardDescription}</p>
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <>
          <div className="dashboard-selectors">
            {data.ghgOptions && data.ghgOptions.length > 0 && (
              <Select
                selectedValue={selectedGHG}
                options={data.ghgOptions}
                onChange={setSelectedGHG}
                placeholder="Select GHG"
              />
            )}

            {data.countryOptions && data.countryOptions.length > 0 && (
              <Select
                selectedValue={selectedCountry}
                options={data.countryOptions}
                onChange={setSelectedCountry}
                placeholder="Select Country"
              />
            )}

            <DateRangeSelector
              startDate={startDate}
              endDate={endDate}
              onStartDateChange={(date) => setStartDate(date)}
              onEndDateChange={(date) => setEndDate(date)}
            />
          </div>

          {selectedGHG && <Chart chartData={data.chartData} />}
          {selectedGHG &&
            data.data
              .filter((product) => product.name === selectedGHG)
              .map((product: Product) => (
                <Card
                  key={product.name}
                  title={product.name}
                  description={product.description}
                />
              ))}
        </>
      )}
    </div>
  );
};

export default Dashboard;
