import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders portfolio identity", () => {
  render(<App />);
  expect(
    screen.getByRole("heading", { name: /joseph skokan/i })
  ).toBeInTheDocument();
  expect(screen.getAllByText(/hem over heels/i).length).toBeGreaterThan(0);
  expect(
    screen.getByAltText(/hem over heels app screens/i)
  ).toBeInTheDocument();
});

test("renders BitBuddy spotlight after Hem with a live product link", () => {
  render(<App />);
  const featuredHeading = screen.getByRole("heading", {
    name: /a live product for a real shop/i,
  });
  const spotlightHeading = screen.getAllByRole("heading", {
    name: /^bitbuddy$/i,
  })[0];
  const selectedHeading = screen.getByRole("heading", {
    name: /applications and systems/i,
  });
  const visit = screen.getByRole("link", { name: /open bitbuddy/i });

  expect(
    screen.getByRole("heading", { name: /also shipping/i })
  ).toBeInTheDocument();
  expect(screen.getByAltText(/bitbuddy classroom hero/i)).toBeInTheDocument();
  expect(visit).toHaveAttribute("href", "https://www.thebitbuddy.com/");
  expect(
    featuredHeading.compareDocumentPosition(spotlightHeading) &
      Node.DOCUMENT_POSITION_FOLLOWING
  ).toBeTruthy();
  expect(
    spotlightHeading.compareDocumentPosition(selectedHeading) &
      Node.DOCUMENT_POSITION_FOLLOWING
  ).toBeTruthy();
});
