import React from 'react';
import { Platform } from 'react-native';

import { 
  Background,
  Container, 
  Logo, 
  AreaInput, 
  Input, 
  SubmitButton, 
  SubimitText, 
  Link, 
  LinkText 
} from './styles';

import { useNavigation } from '@react-navigation/native';

export default function SignIn() {
  const navigation = useNavigation();

  return(
    <Background>
      <Container
      behavior={Platform.OS === 'ios' ? 'padding' : ''}
      enabled
      >
        <Logo
          source={require('../../assets/Logo.png')}
        />

        <AreaInput>
          <Input
            placeholder="Seu email"
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Sua senha"
          />
        </AreaInput> 

        <SubmitButton activeOpacity={0.8} >
          <SubimitText>Acessar</SubimitText>
        </SubmitButton>  

        <Link onPress={ () => navigation.navigate('SignUp') }>
          <LinkText>Criar uma conta!</LinkText>
        </Link>     

      </Container>    
    </Background>
  );
}