import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import styles from "../../styles/search.module.css";
import SearchResults from "../SearchResults/SearchResults";

/** Компонент поиска постов. */
const SearchBar = ({ posts }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredBlogPosts = posts.filter((post) => {
    return post.title.toLowerCase().includes(searchTerm.toLowerCase());
  });
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.form}>
          <form>
            <input
              id="search"
              type="search"
              name="search"
              value={searchTerm}
              className={styles.input}
              placeholder="Поиск постов по названию"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch />
          </form>
        </div>
      </div>
      {searchTerm ? <SearchResults results={filteredBlogPosts} /> : null}
    </div>
  );
};

export default SearchBar;
