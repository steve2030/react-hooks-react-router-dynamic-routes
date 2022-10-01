import React from "react";
import { Link } from "react-router-dom";

function MoviesList({ movies }) {
  const renderedMovies = Object.keys(movies).map((movieId) => {
    return (
      <li key={movieId}>
        <Link to={`/movies/${movieId}`}>{movies[movieId].title}</Link>
      </li>
    );
  });
  return <ul>
    {renderedMovies}
  </ul>;
}

export default MoviesList;
