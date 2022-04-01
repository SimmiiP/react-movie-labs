import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favorites, setFavorites] = useState( [] )
  const [mustWatch, setMustWatch] = useState( [] )
  const [rated, setRated] = useState([]) 

  const addToFavorites = (movie) => {
    let newFavorites = [];
    if (!favorites.includes(movie.id)){
      newFavorites = [...favorites, movie.id];
    }
    setFavorites(newFavorites)

  }

  const addToWatchList = (movie) => {
    let newMustWatch = [];
    if (!mustWatch.includes(movie.id)){
      newMustWatch = [...mustWatch, movie.id];
    }
    console.log (setMustWatch(newMustWatch))
  }  

  // We will use this function in a later section
  const removeFromFavorites = (movie) => {
    setFavorites( favorites.filter(
      (mId) => mId !== movie.id
    ) )
  };

  const addToRated = (movie) => {
    let newRated = [];
    if (!rated.includes(movie.id)){
      newRated = [...rated, movie.id];
    }
    console.log (setRated(newRated))
  }

  const removeFromRated = (movie) => {
    setRated( rated.filter(
      (mId) => mId !== movie.id
    ) )
  };


  return (
    <MoviesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        mustWatch,
        addToWatchList,
        addToRated
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );

};

export default MoviesContextProvider;