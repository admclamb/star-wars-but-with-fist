export const getFighters = async () => {
  try {
    const BASE_URL = "https://swapi.dev/api/";
    const URL = BASE_URL + "people/";
    const response = await fetch(URL);
    const fighters = await response.json();
    return fighters;
  } catch (error) {
    return { error };
  }
};
