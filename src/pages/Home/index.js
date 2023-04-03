import React, {useContext} from "react";
import { Text, View, Button } from "react-native";

import { AuthContext } from "../../contexts/auth";

import Header from "../../components/Header";
import { Background } from "./styles";

export default function Home(){
    const { signOut, user } = useContext(AuthContext);
    return(
        <Background>
            <Header title="Minhas movimentações" />
        </Background>
    );
}