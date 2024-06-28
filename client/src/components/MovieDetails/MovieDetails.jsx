import React from "react";
import { Link } from "react-router-dom";
import styles from "./MovieDetails.module.css"; // Import CSS module

const MovieDetails = ({ movie }) => {
  return (
    <div className={styles.movieDetails}>
      <h2 className={styles.title}>{movie.title}</h2>
      <p className={styles.description}>{movie.description}</p>
      <p className={styles.releaseYear}>Release Year: {movie.releaseYear}</p>
      <p className={styles.genre}>Genre: {movie.genre}</p>
      <p className={styles.status}>
        Status: {movie.watched ? "Watched" : "Unwatched"}
      </p>
      <div className={styles.rating}>
        <span className={styles.ratingLabel}>Rating:</span>
        {movie.rating && (
          <div className={styles.stars}>
            {[...Array(movie.rating)].map((_, index) => (
              <i key={index} className={`fa fa-star ${styles.star}`}></i>
            ))}
          </div>
        )}
        {!movie.rating && (
          <span className={styles.noRating}>Not rated yet</span>
        )}
      </div>
      <p className={styles.review}>{movie.review}</p>
      <div className={styles.actions}>
        <Link to={`/edit/${movie.id}`} className={styles.editLink}>
          Edit
        </Link>
      </div>
    </div>
  );
};

export default MovieDetails;
