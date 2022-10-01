
import React from "react";
import { Route } from "react-router-dom";
import MoviesList from "./MoviesList";
import { useRouteMatch } from "react-router-dom";
import MovieShow from "./MovieShow";

function MoviesPage({ movies }) {
  const match = useRouteMatch();
  return (
    <div>
      <MoviesList movies={movies} />
      <Route path={`${match.url}/:movieId`}>
        <MovieShow movies={movies} />
      </Route>
    </div>
  );
}
export default MoviesPage;
