import axios from "axios";
import { ProductStatisticGetParams } from "../types";
import { handleApiError } from "../ErrorHandler/ErrorHandler";
const BASE_URL = "https://api.v2.emissions-api.org/api/v2";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const productListGet: any = async () => {
  return (
    axios
      .get(`${BASE_URL}/products.json`)
      // eslint-disable-next-line @typescript-eslint/typedef
      .then(function (response) {
        return response;
      })
      // eslint-disable-next-line @typescript-eslint/typedef
      .catch(function (error) {
        throw handleApiError(error);
      })
  );
};

export const productStatisticGet: any = async ({
  selectedGHG,
  startDate,
  endDate,
}: ProductStatisticGetParams) => {
  return (
    axios
      .get(
        `${BASE_URL}/${
          selectedGHG?.toLowerCase() || "methane"
        }/statistics.json?country=DE&interval=day&begin=${
          startDate?.toISOString() || "2019-02-10"
        }&end=${
          endDate?.toISOString() || new Date().toISOString()
        }&limit=100&offset=0`
      )
      // eslint-disable-next-line @typescript-eslint/typedef
      .then(function (response) {
        return response;
      })
      // eslint-disable-next-line @typescript-eslint/typedef
      .catch(function (error) {
        throw handleApiError(error);
      })
  );
};
