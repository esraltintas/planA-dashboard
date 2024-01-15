import React from "react";
import { SelectProps } from "../../types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Select: React.FC<SelectProps<any>> = ({
  selectedValue,
  options,
  onChange,
  placeholder,
}) => {
  return (
    <div className="filter-wrapper">
      <label>Select:</label>
      <select value={selectedValue} onChange={(e) => onChange(e.target.value)}>
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
