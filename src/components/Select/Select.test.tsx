import { render, screen, fireEvent } from "@testing-library/react";
import Select from "./Select";

const mockOptions = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
];

describe("Select", () => {
  test("calls onChange when an option is selected", () => {
    const selectedValue = "option1";
    const placeholder = "Select an option";
    const onChange = jest.fn();

    render(
      <Select
        selectedValue={selectedValue}
        options={mockOptions}
        onChange={onChange}
        placeholder={placeholder}
      />
    );

    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "option1" },
    });

    expect(onChange).toHaveBeenCalledWith("option1");
  });
});
