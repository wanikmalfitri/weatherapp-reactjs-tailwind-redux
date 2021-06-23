import React from "react";
import { toCelcius } from "../utils/temperature";
import { dayHourTz } from "../utils/datetime";

const CurrentWeatherCard = ({ currentWeather, cityName }) => {
  return (
    <div className="bg-indigo-600 text-gray-50 shadow">
      <div className="flex flex-col">
        <div
          className="
            border-b border-gray-300
            px-4 py-2
            flex
            justify-between
            items-center
          "
        >
          <h2 className="font-semibold text-base capitalize">
            Weather in {cityName ? cityName : "Current Location"}
          </h2>
          <div className="flex items-center">
            <h4 className="inline-flex text-sm ml-4">
              {dayHourTz(currentWeather.current.dt, currentWeather.timezone)}
            </h4>
          </div>
        </div>
        <div className="border-b border-gray-300 grid grid-cols-4">
          <div className="flex flex-col px-4 pb-4 pt-1 items-center border-r border-gray-300">
            <img
              className="mx-auto"
              alt="weather icon"
              src={`http://openweathermap.org/img/wn/${currentWeather.current.weather[0].icon}@2x.png`}
            />
            <div className="text-sm capitalize">
              {currentWeather.current.weather[0].description}
            </div>
          </div>

          <div className="flex flex-col justify-center px-4 py-2 border-r border-gray-300">
            <div className="block text-5xl mb-4 font-bold">
              {toCelcius(currentWeather.current.temp)}&#8451;
            </div>
            <div className="text-sm">
              Feels like {toCelcius(currentWeather.current.feels_like)}&#8451;
            </div>
          </div>

          <div className="col-span-2 flex flex-col">
            <div className="flex flex-1 justify-between items-center px-4 py-2 border-b border-gray-300">
              <div>Humidity</div>
              <div>{currentWeather.current.humidity} %</div>
            </div>
            <div className="flex flex-1 justify-between items-center px-4 py-2 border-b border-gray-300">
              <div>Visibility</div>
              <div>{currentWeather.current.visibility} m</div>
            </div>
            <div className="flex flex-1 justify-between items-center px-4 py-2 border-b border-gray-300">
              <div>Wind Speed</div>
              <div>{currentWeather.current.wind_speed} m/s</div>
            </div>
            <div className="flex flex-1 justify-between items-center px-4 py-2 border-b border-gray-300">
              <div>UV Index</div>
              <div>{currentWeather.current.uvi}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeatherCard;
