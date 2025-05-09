import './App.css';
import { Header } from './components/Header/Header.jsx';
import { Weather } from './components/Wether/Weather.jsx';
import { useWeather } from './utils/weather.js';

function App() {
  const { currentWeather, forecastWeather, fetchWeather, error, isLoading } =
    useWeather();
  return (
    <>
      <Header fetchWeather={fetchWeather} />
      <Weather
        currentWeather={currentWeather}
        forecastWeather={forecastWeather}
        error={error}
        isLoading={isLoading}
      />
    </>
  );
}

export default App;
