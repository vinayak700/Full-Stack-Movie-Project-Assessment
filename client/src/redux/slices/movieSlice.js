import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const base_url = process.env.REACT_APP_API_URL;

// Async thunk for adding a movie
export const addMovieAsync = createAsyncThunk(
  "movies/addMovieAsync",
  async (movie, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${base_url}/api/movies`, movie);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk for editing a movie
export const editMovieAsync = createAsyncThunk(
  "movies/editMovieAsync",
  async (movie, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `${base_url}/api/movies/${movie.id}`,
        movie
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk for deleting a movie
export const deleteMovieAsync = createAsyncThunk(
  "movies/deleteMovieAsync",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`${base_url}/api/movies/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk for toggling watched status
export const toggleWatchedAsync = createAsyncThunk(
  "movies/toggleWatchedAsync",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `${base_url}/api/movies/${id}/toggle-watched`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk for rating a movie
export const rateMovieAsync = createAsyncThunk(
  "movies/rateMovieAsync",
  async ({ id, rating }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(`${base_url}/api/movies/${id}/rate`, {
        rating,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk for reviewing a movie
export const reviewMovieAsync = createAsyncThunk(
  "movies/reviewMovieAsync",
  async ({ id, review }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `${base_url}/api/movies/${id}/review`,
        { review }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  movies: [],
  status: "idle",
  error: null,
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Add Movie
      .addCase(addMovieAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addMovieAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.movies.push(action.payload);
      })
      .addCase(addMovieAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      // Edit Movie
      .addCase(editMovieAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(editMovieAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        const index = state.movies.findIndex(
          (movie) => movie.id === action.payload.id
        );
        if (index !== -1) {
          state.movies[index] = action.payload;
        }
      })
      .addCase(editMovieAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      // Delete Movie
      .addCase(deleteMovieAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteMovieAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.movies = state.movies.filter(
          (movie) => movie.id !== action.payload
        );
      })
      .addCase(deleteMovieAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      // Toggle Watched
      .addCase(toggleWatchedAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(toggleWatchedAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        const index = state.movies.findIndex(
          (movie) => movie.id === action.payload.id
        );
        if (index !== -1) {
          state.movies[index].watched = action.payload.watched;
        }
      })
      .addCase(toggleWatchedAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      // Rate Movie
      .addCase(rateMovieAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(rateMovieAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        const index = state.movies.findIndex(
          (movie) => movie.id === action.payload.id
        );
        if (index !== -1) {
          state.movies[index].rating = action.payload.rating;
        }
      })
      .addCase(rateMovieAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      // Review Movie
      .addCase(reviewMovieAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(reviewMovieAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        const index = state.movies.findIndex(
          (movie) => movie.id === action.payload.id
        );
        if (index !== -1) {
          state.movies[index].review = action.payload.review;
        }
      })
      .addCase(reviewMovieAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default movieSlice.reducer;
