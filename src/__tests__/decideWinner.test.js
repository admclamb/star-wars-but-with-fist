import "@testing-library/jest-dom";
import { decideWinner } from "../utils/decideWinner";

describe("Test the ouctomes of all possibilities in deciding Winner", () => {
  test("fighter 1 wins when mass and weight is higher", () => {
    const fighter1 = {
      name: "fighter 1",
      height: "171",
      mass: "70",
    };

    const fighter2 = {
      name: "fighter 2",
      height: "140",
      mass: "60",
    };
    expect(decideWinner(fighter1, fighter2)).toBe("fighter 1");
  });

  test("fighter 1 ties when mass is lower and weight is higher than other fighter", () => {
    const fighter1 = {
      name: "fighter 1",
      height: "171",
      mass: "70",
    };

    const fighter2 = {
      name: "fighter 2",
      height: "140",
      mass: "90",
    };
    expect(decideWinner(fighter1, fighter2)).toBe("Tie");
  });

  test("fighter 1 ties when mass is higher and weight is lower than other fighter", () => {
    const fighter1 = {
      name: "fighter 1",
      height: "130",
      mass: "110",
    };

    const fighter2 = {
      name: "fighter 2",
      height: "140",
      mass: "90",
    };
    expect(decideWinner(fighter1, fighter2)).toBe("Tie");
  });

  test("fighter 1 ties when mass and weight is equal to the other fighter", () => {
    const fighter1 = {
      name: "fighter 1",
      height: "140",
      mass: "90",
    };

    const fighter2 = {
      name: "fighter 2",
      height: "140",
      mass: "90",
    };
    expect(decideWinner(fighter1, fighter2)).toBe("Tie");
  });

  test("fighter 1 Loses when mass and weight is lower", () => {
    const fighter1 = {
      name: "fighter 1",
      height: "171",
      mass: "70",
    };

    const fighter2 = {
      name: "fighter 2",
      height: "190",
      mass: "90",
    };
    expect(decideWinner(fighter1, fighter2)).toBe("fighter 2");
  });
});
