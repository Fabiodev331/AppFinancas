import styled from 'styled-components/native';

export const Container = styled.View`
flex: 1;
background-color: #e6edff;
align-items: center;
`;

export const Message = styled.Text`
font-size: 18px;
font-weight: bold;
margin-top: 24px;
color: #121212;
`;

export const Name = styled.Text`
color: #121212;
font-size: 20px;
margin-bottom: 24px;
margin-top: 8px;
padding: 0 14px;
`; 

export const NewLink = styled.TouchableOpacity`
width: 90%;
height: 45px;
background-color: #3b3bdf;
justify-content: center;
align-items: center;
border-radius: 5px;
margin-bottom: 14px;
`; 

export const NewText = styled.Text`
color: #FFF;
font-size: 17px;
font-weight: bold;
`;

export const LogoutButton = styled.TouchableOpacity`
width: 90%;
height: 45px;
justify-content: center;
align-items: center;
border-radius: 5px;
border-width: 2px;
border-color: #EF463a;
`;

export const LogoutText = styled.Text`
color: #EF463a;
font-size: 17px;
font-weight: bold;
`;