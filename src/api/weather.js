import axios from "axios";
import { config } from "./axios";

export async function getCurrentWeather(coord) {
  if (coord) {
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${coord.latitude}&lon=${coord.longitude}&exclude=minutely,hourly,daily&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`,
        config
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}

export async function getForecastWeather(coord) {
  if (coord) {
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${coord.latitude}&lon=${coord.longitude}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`,
        config
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}
