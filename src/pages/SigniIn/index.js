import React, { useState, useContext } from 'react';
import { Platform, ActivityIndicator } from 'react-native';

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

import { AuthContext } from '../../contexts/auth';

export default function SignIn() {
  const navigation = useNavigation();
  const { loadingAuth, signIn } =useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPasword] = useState('');

  function handleLogin(){
    signIn(email, password);
  }

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
            value={email}
            onChangeText={ (text) => setEmail(text) }
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Sua senha"
            value={password}
            onChangeText={ (text) => setPasword(text) }            
          />
        </AreaInput> 

        <SubmitButton activeOpacity={0.8} onPress={handleLogin}>
          {
            loadingAuth ? (
              <ActivityIndicator size={20} color="#FFF"/>
            ) : (
              <SubimitText>Acessar</SubimitText>
            )
          }
          
        </SubmitButton>  

        <Link onPress={ () => navigation.navigate('SignUp') }>
          <LinkText>Criar uma conta!</LinkText>
        </Link>     

      </Container>    
    </Background>
  );
}