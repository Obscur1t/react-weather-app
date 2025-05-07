import styles from './Weather.module.css';
import { CurrentWeather } from './CurrentWeather/CurrentWeather.jsx';

export function Weather({ cityName }) {
  return (
    <>
      <div className={styles['weather_container']}>
        <CurrentWeather cityName={cityName} />
      </div>
    </>
  );
}
