const toCelcius = (temp) => {
  return (temp - 273.15).toFixed(1);
};

const toFahrenheit = (temp) => {
  return (temp - 459.67).toFixed(1);
};

export { toCelcius, toFahrenheit };
