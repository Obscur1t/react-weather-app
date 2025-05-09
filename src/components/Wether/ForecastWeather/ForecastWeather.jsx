import { Spinner } from '../../Spinner/Spinner';
import styles from './ForecastWeather.module.css';
import { ForecastWeatherCard } from './ForecastWeatherCard/ForecastWeatherCard';

export function ForecastWeather({ forecastWeather }) {
  return (
    <>
      {forecastWeather && (
        <div className={styles['forecast_weather_container']}>
          {forecastWeather.map((forecastWeatherOneDay) => {
            return (
              <ForecastWeatherCard
                key={forecastWeatherOneDay.dt}
                forecastWeatherOneDay={forecastWeatherOneDay}
              />
            );
          })}
        </div>
      )}
    </>
  );
}
