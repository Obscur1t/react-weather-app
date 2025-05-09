import { useState } from 'react';
import styles from './Header.module.css';

export const Header = ({ fetchWeather }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleForm = (event) => {
    event.preventDefault();
    setInputValue('');
    fetchWeather(inputValue);
  };

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles['header_title']}>Weather</h1>
        <form className={styles['header_form']} onSubmit={handleForm}>
          <input
            onChange={handleInputChange}
            value={inputValue}
            type="text"
            className={styles['header_input']}
            placeholder="Search..."
          />
          <button type="submit" className={styles['header_btn']}>
            Search
          </button>
        </form>
      </header>
    </>
  );
};
