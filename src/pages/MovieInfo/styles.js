import styled from 'styled-components/native';
import { Animated, StatusBar } from 'react-native';

export const Container = styled.ScrollView`
    flex: 1;
`;

export const Header = styled(Animated.View)`
    width: 100%;
    height: 430px;
    background-color: #565651;
    min-height: 115px;
`;

export const MoviePoster = styled.ImageBackground`
    width: 100%;
    height: 100%;
`;

export const MovieTitleHeader = styled(Animated.Text)`
    font-size: 20px;
    color: #FFF;
    text-align: center;
    margin-top: 30px;
    font-family: 'Poppins-Light';

    max-width: 65%;
    align-self: center;

    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 7px;
    padding: 0 10px;
`;

export const Content = styled(Animated.ScrollView)`
    flex: 1;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background-color: #FFF;
    margin-top: -20px;

`;

export const MovieTitle = styled.Text`
    font-family: 'Poppins-SemiBold';
    font-size: 35px;
    line-height: 43px;
`;

export const MovieInfoText = styled.Text`
    color: #BBBBBB;
    font-size: ${props => props.fontSize ? props.fontSize : 18}px;
    font-family: 'Poppins-Light';
`;

export const MovieSectionTitle = styled.Text`
    font-family: 'Poppins-SemiBold';
    font-size: 35px;
    line-height: 43px;
    margin-top: 20px;
`;

export const MovieText = styled.Text`
    font-size: 18px;
    line-height: 30px;
    font-family: 'Poppins-Regular';
    color: #565651;
    margin-top: 10px;
`;