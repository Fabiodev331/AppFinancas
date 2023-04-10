import styled from 'styled-components/native';

export const Background = styled.View`
flex: 1;
background-color: #e6edff;
`;

export const Container = styled.KeyboardAvoidingView`
 flex: 1;
 align-items: center;
 justify-content: center;
`;

export const Logo = styled.Image`
 margin-bottom: 25px;
`;

export const AreaInput = styled.View`
flex-direction: row;
`;

export const Input = styled.TextInput`
background-color: #fff;
width: 90%;
font-size: 17px;
padding: 10px;
border-radius: 8px;
color: #121212;
margin-bottom: 15px;
`;

export const SubmitButton =styled.TouchableOpacity`
background-color: #3b3bdf;
width: 90%;
height: 45px;
border-radius: 8px;
margin-top: 10px;
justify-content: center;
align-items: center;
`;

export const SubimitText =styled.Text`
color: #fff;
font-size: 18px;
`;

export const Link =styled.TouchableOpacity`
margin-top: 10px;
margin-bottom: 10px;
`;

export const LinkText = styled.Text`
color: #171717;
`;