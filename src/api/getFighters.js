export const getFighters = async (abortController) => {
  try {
    const BASE_URL = "https://swapi.dev/api/";
    const URL = BASE_URL + "people/";
    const response = await fetch(URL, { signal: abortController.signal });
    const fighters = await response.json();
    return fighters;
  } catch (error) {
    return { error };
  }
};
