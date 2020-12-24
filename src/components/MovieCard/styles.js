import styled from 'styled-components/native';
import { Pressable } from 'react-native'

export const MovieContainer = styled(Pressable)`
    width: 100%;
    height: 200px;
    background-color: #FFFFFF;
    border-radius: 20px;
    
    margin: 7px 0;
    elevation: 1;

    flex-direction: row;
    align-items: center;
`;

export const MoviePoster = styled.Image`
    width: 50%;
    height: 100%;
    border-top-left-radius: 17px;
    border-bottom-left-radius: 17px;
`;

export const MovieInfoContainer = styled.View`
    flex-direction: column;
    width: 100%;
`;

export const MovieTitle = styled.Text`
    font-family: 'Poppins-Bold';
    font-size: 25px;
    max-width: 40%;
    margin: 10px 20px;
`;

export const MovieYear = styled.Text`
    margin: 0 20px;
    font-family: 'Poppins-Light';
    font-size: 20px;
    color: #C4C4C9;
`;
