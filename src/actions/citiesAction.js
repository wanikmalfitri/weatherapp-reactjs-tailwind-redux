import { indexOf, clone } from "lodash";

export const addSavedCities = (name) => (dispatch, getState) => {
  // try {
  const cities = getState().cities.list;
  const obj = cities.find((city) => city.city === name);
  const index = indexOf(cities, obj);
  let newCities = clone(cities);
  newCities[index].isSaved = true;
  dispatch({
    type: "UPDATE_CITIES",
    payload: newCities,
  });
  localStorage.setItem("cities", JSON.stringify(newCities));
  // } catch (err) {
  //   console.log("Failed to add city", name);
  // }
};

export const removeSavedCities = (name) => (dispatch, getState) => {
  // try {
  const cities = getState().cities.list;
  const obj = cities.find((city) => city.city === name);
  const index = indexOf(cities, obj);
  let newCities = clone(cities);
  newCities[index].isSaved = false;
  dispatch({
    type: "UPDATE_CITIES",
    payload: newCities,
  });
  localStorage.setItem("cities", JSON.stringify(newCities));
  // } catch (err) {
  //   console.log("Failed to remove city", name);
  // }
};
