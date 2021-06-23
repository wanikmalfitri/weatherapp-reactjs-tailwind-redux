import { React, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Container, CurrentWeatherCard, ForecastCard } from "../components";
import { getCurrentWeather, getForecastWeather } from "../api/weather";
import { getCityByName } from "../api/city";

const City = ({ match }) => {
  const cityName = match.params.id;
  const [coordinate, setCoordinate] = useState(null);

  useEffect(() => {
    const fetchCity = (name) => {
      const cityData = getCityByName(name);
      if (cityData) {
        setCoordinate({
          latitude: cityData.lat,
          longitude: cityData.lng,
        });
      }
    };
    fetchCity(cityName);
  }, [cityName]);

  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);

  useEffect(() => {
    const fetchCurrentWeather = async () => {
      const weather = await getCurrentWeather(coordinate);
      if (weather) {
        setCurrentWeather(weather);
      }
    };
    const fetchForecastWeather = async () => {
      const forecast = await getForecastWeather(coordinate);
      if (forecast) {
        setForecastWeather(forecast);
      }
    };
    fetchCurrentWeather();
    fetchForecastWeather();
  }, [coordinate]);

  // useEffect(() => {
  //   const fetchForecastWeather = async () => {
  //     const forecast = await getForecastWeather();
  //     if (forecast) {
  //       setForecastWeather(forecast);
  //     }
  //   };
  //   fetchForecastWeather();
  // }, [coordinate]);

  return (
    <>
      <Container>
        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-5">
            {currentWeather ? (
              <CurrentWeatherCard
                currentWeather={currentWeather}
                cityName={cityName}
              />
            ) : null}
          </div>
        </div>
      </Container>

      <Container>
        {forecastWeather && currentWeather ? (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 auto-rows-max gap-4">
            {forecastWeather.list.map((forecast, index) => (
              // <ForecastCard />
              <div key={index} className="col-span-1">
                <ForecastCard
                  forecastWeather={forecast}
                  timezone={
                    currentWeather.timezone
                      ? currentWeather.timezone
                      : "Asia/Kuala_Lumpur"
                  }
                />
              </div>
            ))}
          </div>
        ) : (
          "No  data"
        )}
      </Container>
    </>
  );
};

export default withRouter(City);
