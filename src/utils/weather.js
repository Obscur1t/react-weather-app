import { useState } from 'react';
import { getCurrentWeather, getForecastWeather } from './findWeather.js';

export const useWeather = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async (city) => {
    try {
      setCurrentWeather(null);
      setForecastWeather(null);
      setIsLoading(true);
      setError(null);
      const currentWeatherData = await getCurrentWeather(city);
      setCurrentWeather(currentWeatherData);
      const forecastWeatherData = await getForecastWeather(city);
      const filteredForecast = forecastWeatherData.list.filter((item) => {
        const date = new Date(Date.parse(item.dt * 1000));
        const currentDate = new Date();
        return (
          date.getDate() !== currentDate.getDate() &&
          item.dt_txt.includes('12:00:00')
        );
      });
      setForecastWeather(filteredForecast);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setError(error);
      setCurrentWeather(null);
      setForecastWeather(null);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    currentWeather,
    forecastWeather,
    fetchWeather,
    isLoading,
    error,
  };
};
