import { useState } from "react";
import { toast } from "react-hot-toast";
import styles from "./SearchBar.module.css";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() === "") {
      toast.error("Please enter a search term!");
      return;
    }
    onSearch(inputValue);
    setInputValue("");
  };

  return (
    <header className={styles.searchBar}>
      <form className={styles.searchForm} onSubmit={handleSubmit}>
        <input
          type="text"
          className={styles.searchInput}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Search images..."
        />
        <button type="submit" className={styles.searchButton}>
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
