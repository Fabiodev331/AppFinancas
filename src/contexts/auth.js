import React, { createContext, useState } from "react";

import api from "../services/api";
import {useNavigation} from '@react-navigation/native'

export const AuthContext = createContext({});

function AuthProvider({children}){
    const [user, setUser] = useState(null);
    const [loadingAuth, setLoadingAuth] = useState(false); 

    const navigation = useNavigation();

    async function signUp(nome, email, password){
        setLoadingAuth(true);
        try{
            const respose = await api.post('/users', {
                name: nome,
                email: email,
                password: password,
            })
            setLoadingAuth(false);

            navigation.goBack();

        }catch(err){
            console.log("Erro ao cadastrar", err)
            setLoadingAuth(false);
        }
    }
    async function signIn(email, password){
        setLoadingAuth(true);

        try{
            const respose = await api.post('/login', {
                email: email,
                password: password
            })

            const { id, name, token } = respose.data;

            const data = {
                id,
                name,
                token,
                email,
            };

            api.defaults.headers['Authorization'] = `Bearer ${token}`;

            setUser({
                id,
                name,
                email,
            })

            setLoadingAuth(false);

        }catch(err){
            console.log("ERRO AO LOGAR", err)
            setLoadingAuth(false);
        }
    }

    return(
        <AuthContext.Provider value={{signed: !!user, user, signIn, signUp, loadingAuth}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;