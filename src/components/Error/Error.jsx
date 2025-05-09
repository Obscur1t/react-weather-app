import styles from './Error.module.css';

export function Error() {
  return (
    <div className={styles['error_container']}>
      <div className={styles['error_text']}>An error has occurred</div>
    </div>
  );
}
