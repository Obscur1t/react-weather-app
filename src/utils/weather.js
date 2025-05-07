import { API_KEY } from '../constans/apiKey';

export const findLocation = async (city) => {
  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  const lat = data[0].lat;
  const lon = data[0].lon;
  return { lat, lon };
};

export const getCurrentWeather = async (city) => {
  const { lat, lon } = await findLocation(city);
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  const currentResponse = await fetch(weatherUrl);
  const currentWeatherData = await currentResponse.json();
  return currentWeatherData;
};

export const getForecastWeather = async (city) => {
  const { lat, lon } = await findLocation(city);
  const forecastUrl = `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  const forecastResponse = await fetch(forecastUrl);
  const forecastWeatherData = await forecastResponse.json();
  return forecastWeatherData;
};
