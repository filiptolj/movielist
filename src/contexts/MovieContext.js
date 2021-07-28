import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const MovieContext = createContext();

const MovieContextProvider = (props) => {
  // test examples
  // const [movies, setMoives] = useState([
  //   {
  //     title: "Harry Potter and the Prisoner of Azkaban",
  //     genre: "Fantasy",
  //     id: 1,
  //   },
  //   {
  //     title: "Bad Trip",
  //     genre: "Comedy",
  //     id: 2,
  //   },
  // ]);
  const [movies, setMoives] = useState([]);

  const addMovie = (title, genre) => {
    setMoives([...movies, { title, genre, id: uuidv4() }]);
  };
  const removeMovie = (id) => {
    setMoives(movies.filter((movie) => movie.id !== id));
  };

  return (
    <MovieContext.Provider value={{ movies, addMovie, removeMovie }}>
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
