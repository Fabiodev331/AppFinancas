import React, { useContext, useState } from 'react';
import { Alert, Platform, ActivityIndicator } from 'react-native';

import { 
  Background,
  Container, 
  AreaInput, 
  Input, 
  SubmitButton, 
  SubimitText, 
} from '../SigniIn/styles';

import { AuthContext } from '../../contexts/auth';

export default function SignUp() {

  const { signUp, loadingAuth } = useContext(AuthContext);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSignUp(){
    if(nome === '' || email === '' || password === '') return;
    signUp( nome, email, password);
  }
  return(
    <Background>
      <Container
      behavior={Platform.OS === 'ios' ? 'padding' : ''}
      enabled
      >

        <AreaInput>
          <Input
            placeholder="Seu nome"
            value={nome}
            onChangeText={ (text) => setNome(text) }
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Email"
            value={email}
            onChangeText={ (text) => setEmail(text) }            
          />
        </AreaInput> 

        <AreaInput>
          <Input
            placeholder="Senha"
            value={password}
            onChangeText={ (text) => setPassword(text) }  
            secureTextEntry={true}          
          />
        </AreaInput> 

        <SubmitButton activeOpacity={0.8} onPress={handleSignUp} >
          {
            loadingAuth ? (
              <ActivityIndicator size={20} color="#FFF" />
            ) : (
              <SubimitText>Cadastrar</SubimitText>
            )
          }
        </SubmitButton>      

      </Container>    
    </Background>
  );
}