import React from "react";
import NewMovieForm from "./components/MovieForm";
import MovieList from "./components/MovieList";
import Navbar from "./components/Navbar";
import MovieContextProvider from "./contexts/MovieContext";

function App() {
  return (
    <div className="App">
      <MovieContextProvider>
        <Navbar />
        <MovieList />
        <NewMovieForm />
      </MovieContextProvider>
    </div>
  );
}

export default App;
