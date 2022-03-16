import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import { screen } from "@testing-library/jest-dom";
import { decideWinner } from "../utils/decideWinner";
import getFighter from "../api/getFighters";
describe("Fighter Outcome", () => {
  test("fighter 1 wins when mass and weight is higher", () => {
    const fighter1 = {
      name: "fighter 1",
      height: "171",
      mass: "70",
    };

    const fighter2 = {
      name: "fighter 2",
      hegiht: "140",
      mass: "40",
    };
    expect(decideWinner(fighter1, fighter2)).toBe("fighter 1");
  });

  test("fighter 1 ties when only mass or weight is higher than other fighter", () => {
    const fighter1 = {
      name: "fighter 1",
      height: "171",
      mass: "70",
    };

    const fighter2 = {
      name: "fighter 2",
      hegiht: "140",
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
      hegiht: "140",
      mass: "90",
    };
    expect(decideWinner(fighter1, fighter2)).toBe("fighter 2");
  });
});

// describe("Gets fighters from api", () => {
//   test("")
// })
