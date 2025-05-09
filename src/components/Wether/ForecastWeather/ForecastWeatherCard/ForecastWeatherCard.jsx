import { Spinner } from '../../../Spinner/Spinner';
import { Humidity } from '../../../svgComponents/Humidity';
import { Wind } from '../../../svgComponents/Wind';
import styles from './ForecastWeatherCard.module.css';

export function ForecastWeatherCard({ forecastWeatherOneDay }) {
  return (
    <>
      {forecastWeatherOneDay && (
        <div className={styles['forecast_weather_card']}>
          <h2 className={styles['forecast_weather_card_date']}>
            {new Date(forecastWeatherOneDay.dt * 1000).toLocaleDateString(
              'en-US',
              {
                month: 'long',
                day: 'numeric',
              }
            )}
          </h2>
          <div className={styles['forecast_weather_card_temp']}>
            <span className={styles['forecast_weather_card_temp_max']}>
              Max: {Math.round(forecastWeatherOneDay.main.temp_max - 273)}°C
            </span>
            <span className={styles['forecast_weather_card_temp_min']}>
              Min: {Math.round(forecastWeatherOneDay.main.temp_min - 273)}°C
            </span>
          </div>
          <div className={styles['forecast_weather_card_description']}>
            <span className={styles['forecast_weather_card_description_text']}>
              <img
                className={styles['forecast_weather_card_icon']}
                src={`https://openweathermap.org/img/wn/${forecastWeatherOneDay.weather[0].icon}@2x.png`}
                alt="Weather Icon"
                style={{
                  width: '50px',
                  height: '50px',
                }}
              />
              {forecastWeatherOneDay.weather[0].description}
            </span>
            <span
              className={styles['forecast_weather_card_description_humidity']}
            >
              <Humidity /> {forecastWeatherOneDay.main.humidity}%
            </span>
            <span className={styles['forecast_weather_card_description_wind']}>
              <Wind /> {forecastWeatherOneDay.wind.speed} m/s
            </span>
          </div>
        </div>
      )}
    </>
  );
}
