import { render, screen } from "@testing-library/react";
import App from "./App";

it("renders learn react link", () => {
  render(<App />);
  const title = screen.getByText(/Search 707/i);
  expect(title).toBeInTheDocument();
});
