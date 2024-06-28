import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./AddEditMoviePage.module.css"; // Import CSS module

const AddEditMoviePage = ({ onSave, movies }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const isEditMode = !!id;
  const initialMovie = isEditMode
    ? movies.find((movie) => movie.id === id)
    : {
        title: "",
        description: "",
        releaseYear: "",
        genre: "",
        watched: false,
        rating: "0",
        review: "",
      };

  const [movie, setMovie] = useState(initialMovie);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setMovie((prevMovie) => ({
      ...prevMovie,
      [name]: newValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(movie);
    navigate("/");
  };

  return (
    <div className={styles.addEditMovie}>
      <h2 className={styles.title}>
        {isEditMode ? "Edit Movie" : "Add New Movie"}
      </h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="title" className={styles.label}>
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={movie.title}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="description" className={styles.label}>
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={movie.description}
            onChange={handleChange}
            className={`${styles.input} ${styles.textarea}`}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="releaseYear" className={styles.label}>
            Release Year:
          </label>
          <input
            type="text"
            id="releaseYear"
            name="releaseYear"
            value={movie.releaseYear}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="genre" className={styles.label}>
            Genre:
          </label>
          <input
            type="text"
            id="genre"
            name="genre"
            value={movie.genre}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="watched" className={styles.label}>
            Watched:
          </label>
          <input
            type="checkbox"
            id="watched"
            name="watched"
            checked={movie.watched}
            onChange={handleChange}
            className={styles.checkbox}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="rating" className={styles.label}>
            Rating:
          </label>
          <select
            id="rating"
            name="rating"
            value={movie.rating}
            onChange={handleChange}
            className={styles.select}
            required
          >
            <option value="0">Select rating...</option>
            <option value="1">1 star</option>
            <option value="2">2 stars</option>
            <option value="3">3 stars</option>
            <option value="4">4 stars</option>
            <option value="5">5 stars</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="review" className={styles.label}>
            Review:
          </label>
          <textarea
            id="review"
            name="review"
            value={movie.review}
            onChange={handleChange}
            className={`${styles.input} ${styles.textarea}`}
          />
        </div>
        <div className={styles.actions}>
          <button type="submit" className={styles.submitButton}>
            {isEditMode ? "Update" : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEditMoviePage;
