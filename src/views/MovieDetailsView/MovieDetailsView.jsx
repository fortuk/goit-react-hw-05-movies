import { useState, useEffect, lazy, Suspense } from "react";
import {
  useParams,
  useLocation,
  useHistory,
  useRouteMatch,
  Switch,
  Route,
} from "react-router-dom";
import { NavLink } from 'react-router-dom'
import * as api from "../../services/api";
import Loader from "react-loader-spinner";
import s from "./MovieDetailsView.module.css";

const MovieCastView = lazy(() => import("../MovieCast/MovieCastView"));
const MovieReview = lazy(() => import("../MovieReview/MovieReviewsView"));

export default function MovieDetailsView() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const { url, path } = useRouteMatch();
  const history = useHistory();
  const location = useLocation();
  const [from, setFrom] = useState(location?.state?.from ?? "/");

  useEffect(() => {
    api.fetchMovieById(movieId).then((movie) => {
      setMovie(movie);
    });
  }, [movieId]);

  const goBack = () => {
    console.log("onGoBack ~ from: ", from);
    history.push(from);
    history.push({ type: "go_back" });
  };
  return (
    <>
      {movie && (
        <>
          <button className={s.button} type="button" onClick={goBack}>
            Go back
          </button>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <h2>{movie.title}</h2>
          <p>
            User Score: <span>{movie.vote_average}</span>
          </p>
          <p>
            Overview <span>{movie.overview}</span>
          </p>
          <p>
            Genres{" "}
            <span>{movie.genres.map((genre) => genre.name).join(" ")}</span>
          </p>
          <h3>Additional information</h3>

          <nav>
            <NavLink
              to={`${url}/cast`}
              className={s.link}
              activeClassName={s.activeLink}
            >
              Cast
            </NavLink>
            <NavLink
              to={`${url}/reviews`}
              className={s.link}
              activeClassName={s.activeLink}
            >
              Reviews
            </NavLink>
          </nav>

          <Suspense fallback={<Loader />}>
            <Switch>
              <Route path={`${path}/cast`}>
                <MovieCastView movieId={movieId} />
              </Route>

              <Route path={`${path}/reviews`}>
                <MovieReview movieId={movieId} />
              </Route>
            </Switch>
          </Suspense>
        </>
      )}
    </>
  );
}
