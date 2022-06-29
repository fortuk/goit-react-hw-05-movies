import { useState, useEffect } from "react";
import * as api from "../../services/api";
import MovieItem from "../../components/MovieItem/MovieItem";
import s from "./HomeView.module.css";

export default function HomeView() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    api.fetchTrendingMovies().then((data) => setMovies(data.results));
  }, []);

  return (
    <>
      <h1 className={s.title}>Trending today</h1>
      <MovieItem movies={movies} />
    </>
  );
}
