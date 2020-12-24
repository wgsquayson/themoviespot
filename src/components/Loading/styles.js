import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.View`
    background-color: #FFFFFF;
    width: 70px;
    height: 70px;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    elevation: 5;
    position: absolute;
    left: ${(Dimensions.get('window').width / 2) - 35}px;
    top: ${(Dimensions.get('window').height / 2) - 35}px;
`;