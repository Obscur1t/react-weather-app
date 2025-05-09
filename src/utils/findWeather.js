import { API_KEY } from '../constants/apiKey.js';
import { findCoordLocation } from './findCoordLocation.js';

export const getCurrentWeather = async (city) => {
  const { lat, lon } = await findCoordLocation(city);
  try {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    const currentResponse = await fetch(weatherUrl);
    const currentWeatherData = await currentResponse.json();
    return currentWeatherData;
  } catch (error) {
    console.error('Error fetching current weather:', error);
  }
};

export const getForecastWeather = async (city) => {
  const { lat, lon } = await findCoordLocation(city);
  try {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    const forecastResponse = await fetch(weatherUrl);
    const forecastWeatherData = await forecastResponse.json();
    return forecastWeatherData;
  } catch (error) {
    console.error('Error fetching current weather:', error);
  }
};
