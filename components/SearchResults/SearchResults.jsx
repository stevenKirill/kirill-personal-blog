import { Post } from '../Post/Post';
import styles from '../../styles/search.module.css';

const SearchResults = ({ results }) => {
    // TODO добавить стили для компонента.
    if (results.length === 0) return <></>
    return (
        <div className={styles.results}>
          <div className={styles.resultsWrapper}>
            <h2 className={styles.resultsHeader}>{results.length} результаты</h2>
            {results.map((result, index) => (
              <Post key={index} post={result} compact={true} />
            ))}
          </div>
        </div>
      )
}

export default SearchResults
