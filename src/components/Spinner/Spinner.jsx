import styles from './Spinner.module.css';

export function Spinner() {
  return (
    <div className={styles['spinner_container']}>
      <div className={styles['spinner']}></div>
      <div className={styles['spinner_text']}>Data search...</div>
    </div>
  );
}
