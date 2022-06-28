import { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import * as api from '../../services/api';
import SearchBar from '../../components/SearchBar/SearchBar';
import MovieItem from '../../components/MovieItem/MovieItem';
import { toast } from 'react-toastify';

export default function MoviesView() {
  const [movies, setMovies] = useState(null);
  const location = useLocation();
  const history = useHistory();

  const handleSearchQuery = (searchQuery) => {
    history.push({ ...location, search: `query=${searchQuery}` });
  };

  const searchParams = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    if (location.search === '') {
      return;
    }

    api.fetchSearchQuery(searchParams).then((data) => {
      if (data.results.length === 0) {
        toast.error('Nothing');
        return;
      }
      setMovies(data.results);
    });
  }, [location.search, searchParams]);

  return (
    <>
      <SearchBar onClick={handleSearchQuery} />
      {movies && <MovieItem movies={movies} />}
    </>
  );
}
