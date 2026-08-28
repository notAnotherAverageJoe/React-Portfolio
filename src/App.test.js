import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders portfolio identity", () => {
  render(<App />);
  expect(
    screen.getByRole("heading", { name: /joseph skokan/i })
  ).toBeInTheDocument();
  expect(screen.getAllByText(/hem over heels/i).length).toBeGreaterThan(0);
});
