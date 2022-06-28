import { Route } from 'react-router-dom';
import { Switch } from 'react-switch'
import { lazy, Suspense } from "react";
import AppBar from './components/AppBar/AppBar';
import Container from './components/Container/Container';
import Loader from './components/Loader/Loader';

const HomeView = lazy(() =>
  import("./views/HomeView/HomeView" /* webpackChunkName: "home-view" */)
);
const MoviesView = lazy(() =>
  import("./views/MoviesView/MoviesView" /* webpackChunkName: "movies-view" */)
);
const MovieDetailsView = lazy(() =>
  import(
    "./views/MovieDetailsView/MovieDetailsView" /* webpackChunkName: "movie-details-view" */
  )
);
const NotFoundView = lazy(() =>
  import("./views/NotFoundView" /* webpackChunkName: "not-found-view" */)
);

function App() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>
          <Route path="/movies" exact>
            <MoviesView />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetailsView />
          </Route>
          <Route path="*" exact>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}

export default App;
