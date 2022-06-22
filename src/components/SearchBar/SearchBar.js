import { useState } from "react";
import { GoSearch } from "react-icons/go";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import s from "./SearchBar.module.css";

const SearchBar = ({ onClick }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() === "") {
      toast.error("Enter query in the search field.");
      return;
    }
    onClick(searchQuery);
    setSearchQuery("");
    e.target.reset();
  };

  return (
    <header className={s.searchbar}>
      <form onSubmit={handleSubmit} className={s.searchForm}>
        <button type="submit" aria-label="search" className={s.button}>
          <span className={s.buttonLabel}>Search</span> <GoSearch />
        </button>
        <input
          className={s.input}
          onChange={handleChange}
          type="text"
          autoComplete="off"
          placeholder="Search movies"
        />
      </form>
    </header>
  );
};

SearchBar.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default SearchBar;
