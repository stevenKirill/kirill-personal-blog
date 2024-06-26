import { Post } from '../Post';
import styles from '../../styles/search.module.css';
import { IPost } from '@/types';

interface IProps {
  results: IPost[];
}

const SearchResults = ({ results }: IProps) => {
  if (results.length === 0) return <div>Нет совпадений</div>;
  return (
    <div className={styles.results}>
      <div className={styles.resultsWrapper}>
        <h2 className={styles.resultsHeader}>
          {results.length}
          {' '}
          результаты
        </h2>
        {results.map((result) => (
          <Post key={result.date} post={result} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
