import styled from 'styled-components/native';

export const Container = styled.View`
background-color: #e6edff;
border-radius: 5px;
margin-left: 10px;
margin-right: 10px;
margin-bottom: 14px;
padding: 12px;
`;

export const TipoText = styled.Text`
color: #fff;
font-size: 16px;
font-style: italic;
padding-left: 5px;
`;

export const Tipo = styled.View`
flex-direction: row;
`;

export const IconView = styled.View`
flex-direction: row;
background-color: ${props => props.tipo === 'despesa' ? '#EF463a' : '#00b94a' };
padding-bottom: 4px;
padding-top: 4px;
padding-left: 8px;
padding-right: 8px;
border-radius: 5px;
margin-bottom: 2px;
align-items: center;
`;

export const ValorText = styled.Text`
color: #121212;
font-size: 20px;
`;