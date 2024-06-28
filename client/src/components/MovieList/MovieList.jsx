import React from "react";
import { Link } from "react-router-dom";
import styles from "./MovieList.module.css"; // Import CSS module

const MovieList = ({ movies }) => {
  return (
    <div className={styles.movieList}>
      {movies.map((movie) => (
        <div key={movie.id} className={styles.movieItem}>
          <h3 className={styles.title}>{movie.title}</h3>
          <p className={styles.releaseYear}>
            Release Year: {movie.releaseYear}
          </p>
          <p className={styles.genre}>Genre: {movie.genre}</p>
          <div className={styles.actions}>
            <Link to={`/movie/${movie.id}`} className={styles.detailsLink}>
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
