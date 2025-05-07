import { useState } from 'react';
import './App.css';
import { Header } from './components/Header/Header.jsx';
import { Weather } from './components/Wether/Weather.jsx';

function App() {
  const [searchCity, setSearchCity] = useState('');

  return (
    <>
      <Header setSearchCity={setSearchCity} />
      <Weather cityName={searchCity} />
    </>
  );
}

export default App;
