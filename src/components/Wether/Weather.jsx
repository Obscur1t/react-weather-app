import styles from './Weather.module.css';
import { CurrentWeather } from './CurrentWeather/CurrentWeather.jsx';
import { ForecastWeather } from './ForecastWeather/ForecastWeather.jsx';
import { useState } from 'react';
import { Spinner } from '../Spinner/Spinner.jsx';
import { Error } from '../Error/Error.jsx';

export function Weather({ currentWeather, forecastWeather, isLoading, error }) {
  const [page, setPage] = useState('current');
  return (
    <>
      {currentWeather && forecastWeather && (
        <div className={styles['weather_container']}>
          <div className={styles['weather_btns']}>
            <button
              className={styles['header_btn']}
              onClick={() => setPage('current')}
              style={{
                backgroundColor:
                  page === 'current'
                    ? 'rgb(0, 0, 0, 0.5)'
                    : 'rgb(0, 0, 0, 0.1)',
                color: page === 'current' ? 'white' : 'black',
              }}
            >
              Current Weather
            </button>
            <button
              className={styles['header_btn']}
              onClick={() => setPage('forecast')}
              style={{
                backgroundColor:
                  page === 'forecast'
                    ? 'rgb(0, 0, 0, 0.5)'
                    : 'rgb(0, 0, 0, 0.1)',
                color: page === 'forecast' ? 'white' : 'black',
              }}
            >
              Forecast Weather
            </button>
          </div>
          {page === 'current' ? (
            <CurrentWeather currentWeather={currentWeather} />
          ) : (
            <ForecastWeather forecastWeather={forecastWeather} />
          )}
        </div>
      )}
      {isLoading && <Spinner />}
      {error && <Error error={error} />}
    </>
  );
}
