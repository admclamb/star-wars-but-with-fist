import { render, screen } from "@testing-library/react";
import Home from "./pages/Home";

test("renders title", () => {
  render(<Home />);
  const linkElement = screen.getByText(/Star Wars but with fist/i);
  expect(linkElement).toBeInTheDocument();
});
