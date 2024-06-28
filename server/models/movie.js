// models/movie.js
import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  releaseYear: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  watched: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 0,
  },
  review: {
    type: String,
    default: "",
  },
});

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
