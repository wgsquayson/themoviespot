import React from 'react';

import {
	MovieContainer,
	MoviePoster,
	MovieTitle,
	MovieYear,
	MovieInfoContainer,
} from './styles';

import cine from '../../assets/images/cine.jpg';

const MovieCard = ({ Poster, Title, Year, ...rest }) => {
    return (
        <MovieContainer {...rest}>
            <MoviePoster source={Poster === 'N/A' ? cine : { uri: Poster }} />
            <MovieInfoContainer>
                <MovieTitle numberOfLines={3} ellipsizeMode='tail'>{Title}</MovieTitle>
                <MovieYear>{Year}</MovieYear>
            </MovieInfoContainer>
        </MovieContainer>
    );
}

export default MovieCard;