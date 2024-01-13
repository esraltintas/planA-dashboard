import { render, screen } from '@testing-library/react';
import App from './App';

test('App renders', () => {
  render(<App />);

  const image = screen.getByRole("img", {
    name: "Plan A",
  });

  expect(image).toBeInTheDocument();
});
