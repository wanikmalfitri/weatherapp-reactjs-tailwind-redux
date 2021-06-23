import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCurrentWeather } from "../api/weather";
import { toCelcius } from "../utils/temperature";

const CityCard = ({ name, lat, lng }) => {
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
  }, []);

  return (
    <Link
      to={`/city/${name}`}
      className="bg-yellow-600 hover:bg-yellow-700 text-gray-50 px-4 py-2 text-center flex align-middle justify-between h-full"
    >
      <span className="text-left">{name}</span>
      <div className="capitalize text-xs text-right">
        <h6 className="font-bold text-base">
          {currentWeather ? `${toCelcius(currentWeather.current.temp)}` : null}
          &#8451;
        </h6>
        <span>
          {currentWeather
            ? currentWeather.current.weather[0].description
            : null}
        </span>
      </div>
    </Link>
  );
};

export default CityCard;
