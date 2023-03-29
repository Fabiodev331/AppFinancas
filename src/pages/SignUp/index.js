import React from 'react';
import { Platform } from 'react-native';

import { 
  Background,
  Container, 
  AreaInput, 
  Input, 
  SubmitButton, 
  SubimitText, 
} from '../SigniIn/styles';

export default function SignIn() {

  return(
    <Background>
      <Container
      behavior={Platform.OS === 'ios' ? 'padding' : ''}
      enabled
      >

        <AreaInput>
          <Input
            placeholder="Seu nome"
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Email"
          />
        </AreaInput> 

        <AreaInput>
          <Input
            placeholder="Senha"
          />
        </AreaInput> 

        <SubmitButton activeOpacity={0.8} >
          <SubimitText>Cadastrar</SubimitText>
        </SubmitButton>      

      </Container>    
    </Background>
  );
}