import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { citiesReducer } from "./reducers/citiesReducer";
import { defaultCities } from "./data/defaultCities";

const reducer = combineReducers({
  cities: citiesReducer,
});

const citiesFromLocalStorage = localStorage.getItem("cities")
  ? JSON.parse(localStorage.getItem("cities"))
  : defaultCities;

const initialState = {
  cities: { list: citiesFromLocalStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
