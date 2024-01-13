import React from "react";
import { GHGSelectorProps } from "../types";

const GHGSelector: React.FC<GHGSelectorProps> = ({
  selectedGHG,
  ghgOptions,
  onChange,
}) => {
  return (
    <div className="filter-wrapper">
      <label>Select GHG Type:</label>
      <select value={selectedGHG} onChange={(e) => onChange(e.target.value)}>
        <option value="" disabled>
          Select GHG
        </option>
        {ghgOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GHGSelector;
