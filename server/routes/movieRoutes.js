import express from "express";
import {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
  toggleWatched,
} from "../controllers/movieController.js";
import { auth } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/movies").get(auth, getAllMovies).post(auth, createMovie);
router.route("/movies/:id/toggle-watched").patch(auth, toggleWatched);
router
  .route("/movies/:id")
  .get(auth, getMovieById)
  .put(auth, updateMovie)
  .delete(auth, deleteMovie);

export default router;
