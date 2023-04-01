import React, {useContext} from "react";
import { Text, View, Button } from "react-native";

import { AuthContext } from "../../contexts/auth";

export default function Home(){
    const { signOut, user } = useContext(AuthContext);
    return(
        <View>
            <Text>Tela Home</Text>
            <Text>Nome: {user.name} </Text>
            <Text>Email: {user.email} </Text>
            <Button
            title="Sair da conta"
            onPress={() => signOut() }
            />
        </View>
    );
}