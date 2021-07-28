import React, { useContext, useState } from "react";
import { MovieContext } from "../contexts/MovieContext";

const NewMovieForm = () => {
  const { addMovie } = useContext(MovieContext);
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addMovie(title, genre);
    setTitle("");
    setGenre("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="movie title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        required
      />
      <input type="submit" value="add movie" />
    </form>
  );
};

export default NewMovieForm;
