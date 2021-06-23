import { React, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  CityCard,
  Container,
  CurrentWeatherCard,
  ForecastCard,
} from "../components";
import { getCurrentWeather, getForecastWeather } from "../api/weather";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Home = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);
  const [coordinate, setCoordinate] = useState(null);
  const cities = useSelector((state) => state.cities.list);
  const savedCities = cities.filter((city) => city.isSaved);

  useEffect(() => {
    const coord = JSON.parse(localStorage.getItem("coordinate"));
    if (coord) {
      setCoordinate({
        latitude: coord.latitude,
        longitude: coord.longitude,
      });
    } else {
      setCoordinate({
        latitude: 3.140853,
        longitude: 101.693207,
      });
    }
  }, []);

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

  return (
    <>
      <Container>
        <OwlCarousel items={4} className="owl-theme" loop nav margin={14}>
          {savedCities.map((city, index) => (
            <CityCard
              key={index}
              name={city.city}
              lat={city.lat}
              lng={city.lng}
            />
          ))}
        </OwlCarousel>
      </Container>
      <Container>
        {currentWeather ? (
          <CurrentWeatherCard currentWeather={currentWeather} />
        ) : null}
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
          "No forecast data"
        )}
      </Container>
    </>
  );
};

export default Home;
