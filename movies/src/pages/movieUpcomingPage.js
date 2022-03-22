import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getupcomingMovies } from "../api/tmdb-api";
import AddToPlaylistIcon from '../components/cardIcons/addToPlaylist';

const UpcomingMoviePage = (props) => {
  const [movies, setMovies] = useState([]);
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))

  const addToFavorites = (movieId) => {
    const updatedMovies = movies.map((m) =>
      m.id === movieId ? { ...m, favorite: true } : m
    );
    setMovies(updatedMovies);
  };

  useEffect(() => {
    getupcomingMovies().then(movies => {
      setMovies(movies);
    });
  }, []);

  return (
    <PageTemplate
      title='Upcoming Movies'
      movies={movies}
      selectFavorite={addToFavorites}
      action={(movie) => {
        return (
          <>
            <AddToPlaylistIcon movie={movie} />
          </>
        );
      }}
    />
  );
};
export default UpcomingMoviePage;