import React from "react";
import { View } from "react-native";
import Feather from 'react-native-vector-icons/Feather'

import { RegisterContainer, RegisterTypeButton, RegisterLabel } from "./styles";

export default function RegisterTypes( {type} ){
    return(
        <RegisterContainer>

            <RegisterTypeButton>
                <Feather name='arrow-up'size={25} color='#121212' />
                <RegisterLabel>
                    Receitas
                </RegisterLabel>
            </RegisterTypeButton>

            <RegisterTypeButton>
                <Feather name='arrow-up'size={25} color='#121212' />
                <RegisterLabel>
                    Despesas
                </RegisterLabel>
            </RegisterTypeButton>

        </RegisterContainer>
    )
}