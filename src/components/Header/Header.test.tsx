import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";

test("renders Header component", () => {
  render(
    <Router>
      <Header />
    </Router>
  );

  const headerWrapper = screen.getByTestId("header");

  expect(headerWrapper).toBeInTheDocument();

  // Check if LazyLoadImage is rendered with the correct source and alt text
  const lazyLoadImage = screen.getByAltText(/plan a logo/i);

  expect(lazyLoadImage).toBeInTheDocument();

  expect(lazyLoadImage).toHaveAttribute("width", "80");
  expect(lazyLoadImage).toHaveAttribute("height", "80");
});
