import { useState } from 'react';
import { GoSearch } from 'react-icons/go';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import propTypes from 'prop-types';
import s from './SearchBar.module.css';

const SearchBar = ({ onClick }) => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search).get("query");
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
                    value={searchQuery}
                />
            </form>
        </header>
    );
};

SearchBar.propTypes = {
    onClick: propTypes.func.isRequired,
};

export default SearchBar;