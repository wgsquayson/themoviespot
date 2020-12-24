import styled from 'styled-components/native';

export const Container = styled.ScrollView`
    flex: 1;
    background-color: #EEEEEE;
`;

export const Title = styled.Text`
    color: ${props => props.color ? props.color : '#565651'};
    font-size: ${props => props.fontSize ? props.fontSize : 40}px;
    font-family: 'Poppins-Bold';
    ${props => props.margin && 'margin: 120px 0;'}
`;

export const Subtitle = styled.Text`
    color: #565651;
    font-size: 22px;
    font-family: 'Poppins-Light';
`;
