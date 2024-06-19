import { FaSadCry } from 'react-icons/fa';
import styles from '../styles/404.module.css';

const NotFound = () => (
  <div className={styles.error}>
    <h2 className={styles.title}>Страница не найдена</h2>
    <FaSadCry color="black" size="24" />
  </div>
);

export default NotFound;
