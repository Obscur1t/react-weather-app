import { useEffect, useState } from 'react';
import styles from './CurrentWeather.module.css';
import { getCurrentWeather } from '../../../utils/weather';
import { CurrentWeatherCard } from './CurrentWeatherCard/CurrentWeatherCard.jsx';
import { Humidity } from '../../svgComponents/Humidity.jsx';
import { Wind } from '../../svgComponents/Wind.jsx';

export function CurrentWeather({ cityName }) {
  const [currentWeather, setCurrentWeather] = useState(null);

  useEffect(() => {
    getCurrentWeather(cityName)
      .then((data) => {
        setCurrentWeather(data);
      })
      .catch((error) => {
        console.error('Error fetching current weather:', error);
      });
  }, [cityName]);

  return (
    <>
      <div className={styles['current_weather_container']}>
        {currentWeather && (
          <div className={styles['current_weather']}>
            <div className={styles['current_weather_base_info']}>
              <div className={styles['current_weather_city_name']}>
                <h2 className={styles['current_weather_city_name_title']}>
                  {currentWeather.name}
                </h2>
                <h2 className={styles['current_weather_city_name_subtitle']}>
                  {currentWeather.sys.country}{' '}
                </h2>
              </div>
              <div className={styles['current_weather_temp']}>
                <h2 className={styles['current_weather_temp_value']}>
                  {Math.round(currentWeather.main.temp - 273)}°C
                </h2>
                <h2 className={styles['current_weather_temp_value_feels']}>
                  Feel like:{' '}
                  {Math.round(currentWeather.main['feels_like'] - 273)}°C
                </h2>
              </div>
            </div>
            <div className={styles['current_weather_other_info']}>
              <CurrentWeatherCard>
                <img
                  src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
                ></img>
                {currentWeather.weather[0].main}
              </CurrentWeatherCard>
              <CurrentWeatherCard>
                <Humidity /> {currentWeather.main.humidity} %
              </CurrentWeatherCard>
              <CurrentWeatherCard>
                <Wind /> {currentWeather.wind.speed} m/s
              </CurrentWeatherCard>
            </div>
          </div>
        )}
        {!currentWeather && <p>Loading...</p>}
      </div>
    </>
  );
}
