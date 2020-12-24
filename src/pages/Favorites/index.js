import React, { useContext, useEffect, useState } from 'react';
import { Alert, Text } from 'react-native';
import { Container, Title, Subtitle } from './styles';

import Feather from 'react-native-vector-icons/Feather';

import { FavoriteMovieContext } from '../../contexts/favoriteMovies';

import MovieCard from '../../components/MovieCard';

const Favorites = ({ navigation }) => {
	const [movies, setMovies] = useState([])
	const { favoriteMovies, deleteMovie } = useContext(FavoriteMovieContext);
	const [reloadScreen, setReloadScreen] = useState(false)

	function handleDelete(id) {
		deleteMovie(id);

		Alert.alert('Movie removed!');
		setReloadScreen(!reloadScreen);
	}

	useEffect(() => { setMovies(favoriteMovies) }, [reloadScreen])

	return (
		<>
			<Container
				contentContainerStyle={{ padding: 20 }}
			>
				<Feather
					name='arrow-left'
					size={27}
					color='#C4C4C4'
					style={{
						backgroundColor: '#FFFFFF',
						borderRadius: 20,
						padding: 5,
						width: 40,
						elevation: 2,
						marginBottom: 20,
					}}
					onPress={() => navigation.goBack()}
				/>
				<Title>Your favorite titles are here</Title>
				{
					movies.length !== 0 &&
					<Subtitle>
						Some good taste, huh?
						{'\n'}
						{'\n'}
						<Text style={{ fontSize: 15 }}>
							Touch any movie to remove it from the list.
						</Text>
					</Subtitle>
				}
				{
					movies.length !== 0 ?
						movies.map(item => {
							return (
								<>
									<MovieCard
										key={item.imdbID}
										Poster={item.Poster}
										Title={item.Title}
										Year={item.Year}
										onPress={() => handleDelete(item.imdbID)}
									/>
								</>
							)
						})
						:
						<Title color='#C4C4C4' margin>Nothing here :(</Title>

				}
			</Container>
		</>
	);
}

export default Favorites;