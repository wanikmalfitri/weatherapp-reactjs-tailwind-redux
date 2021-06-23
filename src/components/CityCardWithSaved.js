import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCurrentWeather } from "../api/weather";
import { toCelcius } from "../utils/temperature";
import { useDispatch } from "react-redux";
import { addSavedCities, removeSavedCities } from "../actions/citiesAction";

const CityCardWithSaved = ({ name, lat, lng, isSaved, isDefault }) => {
  const dispatch = useDispatch();
  const coordinate = useState({
    latitude: lat,
    longitude: lng,
  });
  const [currentWeather, setCurrentWeather] = useState(null);

  useEffect(() => {
    const fetchCurrentWeather = async () => {
      const weather = await getCurrentWeather(coordinate);
      if (weather) {
        setCurrentWeather(weather);
      }
    };
    fetchCurrentWeather();
  }, [coordinate]);

  return (
    <div className="col-span-1 flex">
      <Link
        to={`/city/${name}`}
        className="bg-yellow-600 hover:bg-yellow-700 text-gray-50 px-4 py-2 text-center flex flex-1 align-middle justify-between h-full"
      >
        <div className="text-left">{name} </div>
        <div className="capitalize text-xs text-right">
          <h6 className="font-bold text-base">
            {currentWeather
              ? `${toCelcius(currentWeather.current.temp)}`
              : null}
            &#8451;
          </h6>
          <span>
            {currentWeather
              ? currentWeather.current.weather[0].description
              : null}
          </span>
        </div>
      </Link>
      {!isDefault && !isSaved ? (
        <button
          onClick={() => dispatch(addSavedCities(name))}
          className="flex flex-shrink bg-yellow-700 p-2 items-center text-white hover:text-yellow-800 focus:outline-none text-lg font-bold"
        >
          +
        </button>
      ) : !isDefault && isSaved ? (
        <button
          onClick={() => dispatch(removeSavedCities(name))}
          className="flex flex-shrink bg-yellow-700 p-2 items-center text-white hover:text-yellow-800 focus:outline-none text-lg font-bold"
        >
          -
        </button>
      ) : null}
    </div>
  );
};

export default CityCardWithSaved;
