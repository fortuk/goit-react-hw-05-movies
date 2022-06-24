import { Link, useLocation } from "react-router-dom";
import s from "./MovieItem.module.css";

const MovieItem = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={s.list}>
      {movies.map((movie) => (
        <li key={movie.id} className={s.movieItem}>
          <Link
            to={{
              pathname: `/movies/${movie.id}`,
              state: { from: location },
            }}
          >
            <img
              className={s.movieImage}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.name}
              width="320"
            />
            <p>{movie.name}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieItem;
