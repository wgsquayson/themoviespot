import 'react-native-gesture-handler';
import React from 'react';
import Routes from './src/routes';
import { StatusBar } from 'react-native';
import { FavoriteMovieProvider } from './src/contexts/favoriteMovies';

const App = () => {
  return(
    <>
    <StatusBar barStyle='dark-content' backgroundColor='transparent' />
    <FavoriteMovieProvider>
      <Routes />
    </FavoriteMovieProvider>
    </>
  )
}

export default App;
