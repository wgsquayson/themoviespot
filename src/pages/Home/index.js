import React, { useState } from 'react';
import { Alert } from 'react-native';

import {
	Container,
	Header,
	LogoTitle,
	Logo,
	InputContainer,
	Input,
	Title,
} from './styles';

import Loading from '../../components/Loading';
import MovieCard from '../../components/MovieCard';

import Feather from 'react-native-vector-icons/Feather';

import api from '../../services/api';

const Home = ({ navigation }) => {
	const [search, setSearch] = useState('');
	const [movies, setMovies] = useState([]);

	const [isLoading, setIsLoading] = useState(false);

	async function getMovies() {
		if (!search) {
			return Alert.alert('Type any title!');
		}

		setIsLoading(true)
		try {
			const { data } = await api.get(`?apikey=925eba28&type=movie&s=${search.toLowerCase().replace(' ', '%20')}`);
			setIsLoading(false);
			if (data.Search) {
				setMovies(data.Search);
			} else {
				return Alert.alert('No results found.')
			}
		} catch (error) {
			console.log(error);
			setIsLoading(false);
		}
	}

	return (
		<>
			{isLoading && <Loading />}
			<Container
				contentContainerStyle={{ padding: 20 }}
			>
				<Header>
					<Logo>
						<Feather
							name='film'
							size={22}
							color='#000'
						/>
						<LogoTitle>The Movie Spot</LogoTitle>
					</Logo>
					<Feather
						name='star'
						size={27}
						color='#FFFFFF'
						style={{ backgroundColor: '#F6CA02', borderRadius: 20, padding: 5 }}
						onPress={() => navigation.navigate('Favorites')}
					/>
				</Header>
				<Title>Search for a movie...</Title>
				<InputContainer>
					<Input
						placeholder='...and touch it to see more.'
						autoCapitalize='words'
						value={search}
						onChangeText={value => setSearch(value)}
						returnKeyType='search'
						onSubmitEditing={() => getMovies()}						
					/>
					<Feather
						name='search'
						size={22}
						color='#000'
						style={{ width: 35 }}
						onPress={() => getMovies()}
					/>
				</InputContainer>
				{
					movies.length !== 0 ?
						movies.map(item => {
							return (
								<MovieCard 
									Poster={item.Poster} 
									Title={item.Title}
									Year={item.Year}
									key={item.imdbID} 
									onPress={() => navigation.navigate('MovieInfo', { id: item.imdbID })} 
								/>
							)
						})
						:
						<Title color='#C4C4C4' margin>Come on, search something :D</Title>

				}
			</Container>
		</>
	);
}

export default Home;