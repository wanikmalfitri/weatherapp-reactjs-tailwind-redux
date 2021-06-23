import { defaultCities } from "../data/defaultCities";

export const getCityByName = (name) => {
  return defaultCities.find((city) => city.city === name);
};
