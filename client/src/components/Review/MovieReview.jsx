import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './MovieReview.module.css'; // Import CSS module

const MovieReview = ({ movies }) => {
  const { id } = useParams();
  const movie = movies.find(movie => movie.id === id);

  if (!movie) {
    return <div className={styles.movieReview}>Movie not found</div>;
  }

  return (
    <div className={styles.movieReview}>
      <div className={styles.movieDetails}>
        <h2 className={styles.title}>{movie.title}</h2>
        <p className={styles.info}>
          <strong>Release Year:</strong> {movie.releaseYear}
        </p>
        <p className={styles.info}>
          <strong>Genre:</strong> {movie.genre}
        </p>
        <p className={styles.info}>
          <strong>Watched:</strong> {movie.watched ? 'Yes' : 'No'}
        </p>
        <p className={styles.info}>
          <strong>Rating:</strong> {movie.rating}/5
        </p>
        <p className={styles.review}>
          <strong>Review:</strong> {movie.review}
        </p>
      </div>
    </div>
  );
};

export default MovieReview;
