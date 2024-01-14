import { useState, useEffect } from "react";
import * as dashboardProxy from "../../proxy/dashboardProxy";
import { Product, DashboardData, DataPoint, Statistic } from "../../types";

const useDashboardData = (
  selectedGHG: string,
  startDate: Date | null,
  endDate: Date | null
): DashboardData => {
  const [data, setData] = useState<Product[]>([]);
  const [countries, setCountries] = useState<string[]>([]);

  const [chartData, setChartData] = useState<Statistic[]>([]);
  const [ghgOptions, setGhgOptions] = useState<
    { value: string; label: string }[]
  >([]);
  const [countryOptions, setCountryOptions] = useState<
    { value: string; label: string }[]
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productResponse = await dashboardProxy.productListGet();
        const countriesResponse = await dashboardProxy.getCountries();

        setData(productResponse.data);
        setCountries(countriesResponse.data);

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
        const uniqueGHGs = [...new Set(data.map((product) => product.name))];
        const ghgOptions = uniqueGHGs.map((ghg) => ({
          value: ghg,
          label: ghg,
        }));

        setGhgOptions(ghgOptions);

        const countryOptions = Object.entries(countries).map(
          ([code, name]) => ({
            value: code,
            label: name,
          })
        );

        setCountryOptions(countryOptions);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [selectedGHG, startDate, endDate, countries]);

  return { countryOptions, ghgOptions, data, countries, chartData };
};

export default useDashboardData;
