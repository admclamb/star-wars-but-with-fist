import Home from "../pages/Home";
import "@testing-library/jest-dom";
import { screen } from "@testing-library/jest-dom";

describe("Homepage", () => {
  test("loads test Home when on homepage", () => {
    document.body.innerHTML = `
      <h1 data-testid="home">Home</h1>
    `;

    expect(screen.toHaveTextContent("Home"));
  });
});
