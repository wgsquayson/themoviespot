import React, { createContext } from 'react';

export const FavoriteMovieContext = createContext();

export const FavoriteMovieProvider = ({ children }) => {
    const favoriteMovies = [];

    //Adicionar Filme aos favoritos
    function addMovie(imdbID, Poster, Title, Year) {
        favoriteMovies.push({
            imdbID,
            Poster,
            Title,
            Year
        });
    }

    //Remover filme dos favoritos
    function deleteMovie(imdbID) {
        const index = favoriteMovies.findIndex(item => item.imdbID === imdbID);

        if (index > -1) {
            favoriteMovies.splice(index, 1);
        }

        return favoriteMovies;
    }

    //Encontrar filme nos favoritos
    function findMovie(imdbID) {
        const index = favoriteMovies.findIndex(item => item.imdbID === imdbID);

        if (index > -1) {
            return true;
        } else {
            return false;
        }
    }


    return (
        <FavoriteMovieContext.Provider value={{ favoriteMovies, addMovie, deleteMovie, findMovie }}>
            {children}
        </FavoriteMovieContext.Provider>
    );
}
