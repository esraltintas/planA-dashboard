import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { DateRangeSelectorProps } from "../types";
const DateRangeSelector: React.FC<DateRangeSelectorProps> = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
}) => {
  return (
    <div className="filter-wrapper">
      <label>Start Date:</label>
      <DatePicker
        placeholderText="Select a date"
        selected={startDate}
        onChange={(date) => onStartDateChange(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
      />
      <label>End Date:</label>
      <DatePicker
        placeholderText="Select a date"
        selected={endDate}
        onChange={(date) => onEndDateChange(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
      />
    </div>
  );
};

export default DateRangeSelector;
