import styles from './CurrentWeather.module.css';
import { CurrentWeatherCard } from './CurrentWeatherCard/CurrentWeatherCard.jsx';
import { Humidity } from '../../svgComponents/Humidity.jsx';
import { Wind } from '../../svgComponents/Wind.jsx';
import { Spinner } from '../../Spinner/Spinner.jsx';

export function CurrentWeather({ currentWeather }) {
  return (
    <>
      {currentWeather && (
        <div className={styles['current_weather_container']}>
          <div className={styles['current_weather']}>
            <div className={styles['current_weather_base_info']}>
              <div className={styles['current_weather_city_name']}>
                <CurrentWeatherCard
                  className={styles['current_weather_city_name_title']}
                >
                  {currentWeather.name}
                </CurrentWeatherCard>
                <CurrentWeatherCard
                  className={styles['current_weather_city_name_subtitle']}
                >
                  {currentWeather.sys.country}{' '}
                </CurrentWeatherCard>
              </div>
              <div className={styles['current_weather_temp']}>
                <CurrentWeatherCard
                  className={styles['current_weather_temp_value']}
                >
                  {Math.round(currentWeather.main.temp - 273)}°C
                </CurrentWeatherCard>
                <CurrentWeatherCard
                  className={styles['current_weather_temp_value_feels']}
                >
                  Feel like:{' '}
                  {Math.round(currentWeather.main['feels_like'] - 273)}°C
                </CurrentWeatherCard>
              </div>
            </div>
            <div className={styles['current_weather_other_info']}>
              <CurrentWeatherCard
                className={styles['current_weather_card_description']}
              >
                <img
                  src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
                  style={{
                    width: '50px',
                    height: '50px',
                  }}
                ></img>
                {currentWeather.weather[0].main}
              </CurrentWeatherCard>
              <CurrentWeatherCard
                className={styles['current_weather_card_description']}
              >
                <Humidity /> {currentWeather.main.humidity} %
              </CurrentWeatherCard>
              <CurrentWeatherCard
                className={styles['current_weather_card_description']}
              >
                <Wind /> {currentWeather.wind.speed} m/s
              </CurrentWeatherCard>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
