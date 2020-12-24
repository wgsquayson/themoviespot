import styled from 'styled-components/native';

export const Container = styled.ScrollView`
    flex: 1;
    background-color: #EEEEEE;
`;

export const Header = styled.View`
    width: 100%;
    height: 70px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Logo = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const LogoTitle = styled.Text`
    font-size: 22px;
    margin-left: 12px;
    font-family: 'Poppins-SemiBold';
    color: #000;
`;

export const Title = styled.Text`
    color: ${props => props.color ? props.color : '#565651'};
    font-size: ${props => props.fontSize ? props.fontSize : 40}px;
    font-family: 'Poppins-Bold';
    ${props => props.margin && 'margin: 120px 0;'}
`;

export const InputContainer = styled.View`
    padding: 0 10px;
    margin-bottom: 10px;
    height: 70px;

    border-width: 1px;
    border-radius: 17px;

    flex-direction: row;
    align-items: center;
`;

export const Input = styled.TextInput`
    flex: 1;
    font-size: 17.5px;
    font-family: 'Poppins-Medium';
`;


