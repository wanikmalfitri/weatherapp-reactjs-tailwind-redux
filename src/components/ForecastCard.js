import React from "react";
import { dayHourTz } from "../utils/datetime";

const ForecastCard = ({ forecastWeather, timezone }) => {
  return (
    <div className="bg-white text-gray-800 px-4 pb-4 pt-1 flex flex-col h-full">
      <img
        className="mx-auto"
        alt="forecast icon"
        src={`http://openweathermap.org/img/wn/${forecastWeather.weather[0].icon}@2x.png`}
      />
      <span className="text-sm mb-1">
        {dayHourTz(forecastWeather.dt, timezone)}
      </span>
      <p className="text-xs capitalize">
        {forecastWeather.weather[0].description}
      </p>
    </div>
  );
};

export default ForecastCard;
