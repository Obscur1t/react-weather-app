import { useState } from 'react';
import styles from './Header.module.css';

export const Header = ({ setSearchCity }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles['header_title']}>Weather</h1>
        <form className={styles['header_form']}>
          <input
            onChange={handleInputChange}
            value={inputValue}
            type="text"
            className={styles['header_input']}
            placeholder="Search..."
          />
          <button
            type="submit"
            className={styles['header_btn']}
            onClick={(e) => {
              e.preventDefault();
              setSearchCity(inputValue);
              setInputValue('');
            }}
          >
            Search
          </button>
        </form>
      </header>
    </>
  );
};
