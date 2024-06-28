import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
// import { MovieList } from "../../components";

const Home = ({ movies }) => {
  return (
    <div className={styles.home}>
      <h1 className={styles.title}>Welcome to My Movie App</h1>

      <div className={styles.actions}>
        <Link to="/add" className={styles.addButton}>
          Add New Movie
        </Link>
      </div>

      <div className={styles.movieListContainer}>
        <h2 className={styles.subtitle}>My Watchlist</h2>
        {/* <MovieList movies={movies} /> */}
      </div>
    </div>
  );
};

export default Home;
