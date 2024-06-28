import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar, MovieReview } from "./components";
import { AddEditMoviePage, Home } from "./pages";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/add" element={<AddEditMoviePage />} />
          <Route path="/edit/:id" element={<AddEditMoviePage />} />
          <Route path="/movie/:id" element={<MovieReview />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
