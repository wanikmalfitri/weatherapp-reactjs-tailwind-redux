export const citiesReducer = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_CITIES":
      return { list: action.payload };
    default:
      return state;
  }
};
