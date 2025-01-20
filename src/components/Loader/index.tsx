import styles from './classes.module.css';

export default function Loader() {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader} />
    </div>
  );
}
