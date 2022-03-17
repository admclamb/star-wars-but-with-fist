import "@testing-library/jest-dom";
import { getFighters } from "../api/getFighters";
import { decideWinner } from "../utils/decideWinner";

const MOCK_DATA = [
  {
    birth_year: "19BBY",
    created: "2014-12-09T13:50:51.644000Z",
    edited: "2014-12-20T21:17:56.891000Z",
    eye_color: "blue",
    films: [
      "https://swapi.dev/api/films/1/",
      "https://swapi.dev/api/films/2/",
      "https://swapi.dev/api/films/3/",
      "https://swapi.dev/api/films/6/",
    ],
    gender: "male",
    hair_color: "blond",
    height: "172",
    homeworld: "https://swapi.dev/api/planets/1/",
    mass: "77",
    name: "Luke Skywalker",
    skin_color: "fair",
    species: [],
    starships: (2)[
      ("https://swapi.dev/api/starships/12/",
      "https://swapi.dev/api/starships/22/")
    ],
    url: "https://swapi.dev/api/people/1/",
    vehicles: (2)[
      ("https://swapi.dev/api/vehicles/14/",
      "https://swapi.dev/api/vehicles/30/")
    ],
  },
  {
    birth_year: "112BBY",
    created: "2014-12-10T15:10:51.357000Z",
    edited: "2014-12-20T21:17:50.309000Z",
    eye_color: "yellow",
    films: [
      "https://swapi.dev/api/films/1/",
      "https://swapi.dev/api/films/2/",
      "https://swapi.dev/api/films/3/",
      "https://swapi.dev/api/films/4/",
      "https://swapi.dev/api/films/5/",
      "https://swapi.dev/api/films/6/",
    ],
    gender: "n/a",
    hair_color: "n/a",
    height: "167",
    homeworld: "https://swapi.dev/api/planets/1/",
    mass: "75",
    name: "C-3PO",
    skin_color: "gold",
    species: ["https://swapi.dev/api/species/2/"],
    starships: [],
    url: "https://swapi.dev/api/people/2/",
    vehicles: [],
  },
];

const unmockedFetch = global.fetch;

beforeAll(() => {
  global.fetch = () =>
    Promise.resolve({
      json: () => Promise.resolve(MOCK_DATA),
    });
});

afterAll(() => {
  global.fetch = unmockedFetch;
});

describe("When making api call", () => {
  test("Should return the correct data in correct foramt after api call", async () => {
    const data = await getFighters();
    expect(Array.isArray(data)).toEqual(true);
    expect(data).toEqual(MOCK_DATA);
  });
});
