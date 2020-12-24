import React, { useEffect, useState, useContext } from 'react';
import { View, Animated, StatusBar, Text, Alert } from 'react-native';

import { FavoriteMovieContext } from '../../contexts/favoriteMovies';

import {
	Container,
	Content,
	Header,
	MovieInfoText,
	MovieText,
	MoviePoster,
	MovieTitle,
	MovieTitleHeader,
	MovieSectionTitle
} from './styles';

import Feather from 'react-native-vector-icons/Feather';

import api from '../../services/api';

import Loading from '../../components/Loading';

import cine from '../../assets/images/cine.jpg';

const MovieInfo = ({ navigation, route }) => {
	const { addMovie, deleteMovie, findMovie } = useContext(FavoriteMovieContext);

	const [data, setData] = useState();

	const [isLoading, setIsLoading] = useState(false);
	const [isFavorite, setIsFavorite] = useState(false);

	async function getMovie() {
		setIsLoading(true);
		try {
			const response = await api.get(`?apikey=4711ff9f&i=${route.params.id}`);

			setIsLoading(false);

			setData(response.data);

			const check = findMovie(response.data.imdbID);
			if (check === true) {
				setIsFavorite(true)
			}


		} catch (error) {
			setIsLoading(false);
			console.log(error);
		}
	}

	function handleFavorite() {
		if (isFavorite === false) {
			addMovie(
				data.imdbID,
				data.Poster,
				data.Title,
				data.Year
			);

			setIsFavorite(true);
			Alert.alert('Movie added to your favorites!');
		} else {
			deleteMovie(data.imdbID);
			setIsFavorite(false);
			Alert.alert('Movie removed from your favorites!');
		}
	}

	useEffect(() => {
		getMovie();
	}, []);

	return (
		<>
			{isLoading && <Loading />}
			<StatusBar barStyle='dark-content' translucent  />
			<Container>
				{data &&
					<>
						<Header>
							<MoviePoster source={data.Poster !== 'N/A' ? { uri: data.Poster } : cine} style={{ resizeMode: 'cover' }}>
								<Feather
									name='arrow-left'
									size={27}
									color='#C4C4C4'
									style={{
										backgroundColor: 'rgba(0, 0, 0, 0.4)',
										borderRadius: 20,
										padding: 5,
										position: "absolute",
										top: 30,
										left: 20
									}}
									onPress={() => navigation.goBack()}
								/>
								<Feather
									name='star'
									size={27}
									color={isFavorite === false ? '#C4C4C4' : '#FFF'}
									style={{
										backgroundColor: isFavorite === false ? 'rgba(0, 0, 0, 0.4)' : '#F6CA02',
										borderRadius: 20,
										padding: 5,
										position: "absolute",
										top: 30,
										right: 20
									}}
									onPress={handleFavorite}
								/>
							</MoviePoster>
						</Header>
						<Content
							contentContainerStyle={{ padding: 20 }}
						>
							<MovieTitle>{data.Title}</MovieTitle>
							<MovieInfoText fontSize={30}>{data.Year}</MovieInfoText>
							<MovieInfoText>{data.Runtime}</MovieInfoText>
							<MovieInfoText>{data.Genre}</MovieInfoText>
							<MovieInfoText>{data.Actors}</MovieInfoText>

							<MovieSectionTitle>Plot</MovieSectionTitle>
							<MovieText>{data.Plot}</MovieText>

							<MovieSectionTitle>Ratings</MovieSectionTitle>

							{
								data.Ratings ?
									data.Ratings.map((item, index) => {
										return (
											<View key={index}>
												<MovieSectionTitle>{item.Value}</MovieSectionTitle>
												<MovieText style={{ marginTop: 0 }}>{item.Source}</MovieText>
											</View>
										)
									})
									:
									<MovieText>No info.</MovieText>
							}

							<MovieSectionTitle>Awards</MovieSectionTitle>
							<MovieText>{data.Awards}</MovieText>

							<MovieSectionTitle>Other Info</MovieSectionTitle>
							<MovieText>
								<Text style={{ fontFamily: 'Poppins-Bold', lineHeight: 31 }}>Released:</Text> {data.Released}
								{'\n'}
								<Text style={{ fontFamily: 'Poppins-Bold', lineHeight: 31 }}>Rated:</Text> {data.Rated}
								{'\n'}
								<Text style={{ fontFamily: 'Poppins-Bold', lineHeight: 31 }}>Director:</Text> {data.Director}
								{'\n'}
								<Text style={{ fontFamily: 'Poppins-Bold', lineHeight: 31 }}>Writer/Writers:</Text> {data.Writer}
								{'\n'}
								<Text style={{ fontFamily: 'Poppins-Bold', lineHeight: 31 }}>Production:</Text> {data.Production}
								{'\n'}
								<Text style={{ fontFamily: 'Poppins-Bold', lineHeight: 31 }}>Country:</Text> {data.Country}
							</MovieText>

						</Content>
					</>
				}
			</Container>
		</>
	);
}

export default MovieInfo;