import { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import styles from '../../styles/search.module.css';
import SearchResults from '../SearchResults/SearchResults';

/** Компонент поиска постов. */
const SearchBar = () => {
    // TODO добавить стили для компонента.
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const getResults = async () => {
          if (searchTerm === '') {
            setSearchResults([]);
          } else {
            const res = await fetch(`/api/search?q=${searchTerm}`);
            const { results } = await res.json();
            setSearchResults(results);
          }
        }
        getResults()
      }, [searchTerm]);

    return (
        <div className={styles.wrapper}>
        <div className={styles.inner}>
          <div className={styles.form}>
            <form>
              <input
                type='search'
                name='search'
                id='search'
                className=''
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder='Поиск постов по названию или по категории'
              />
              <FaSearch/>
            </form>
          </div>
        </div>
        <SearchResults results={searchResults} />
      </div>
    )
};

export default SearchBar
