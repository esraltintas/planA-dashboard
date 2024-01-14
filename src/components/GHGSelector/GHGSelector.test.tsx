import { render, screen, fireEvent } from "@testing-library/react";
import GHGSelector from "./GHGSelector";

const mockGHGOptions = [
  { value: "ghg1", label: "GHG 1" },
  { value: "ghg2", label: "GHG 2" },
  { value: "ghg3", label: "GHG 3" },
];

describe("GHGSelector", () => {
  test("calls onChange when an option is selected", () => {
    const mockOnChange = jest.fn();

    render(
      <GHGSelector
        selectedGHG=""
        ghgOptions={mockGHGOptions}
        onChange={mockOnChange}
      />
    );

    // Simulate selecting an option
    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "ghg1" },
    });

    // Check if onChange is called with the selected value
    expect(mockOnChange).toHaveBeenCalledWith("ghg1");
  });
});
