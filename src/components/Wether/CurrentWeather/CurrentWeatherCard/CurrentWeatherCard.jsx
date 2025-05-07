import styles from './CurrentWeatherCard.module.css';

export function CurrentWeatherCard({ children }) {
  return (
    <p className={styles['current_weather_card_description']}>{children}</p>
  );
}
