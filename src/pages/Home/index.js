import React, {useContext, useState, useEffect} from "react";
import { Text, View, Button } from "react-native";

import { AuthContext } from "../../contexts/auth";

import Header from "../../components/Header";
import { Background, ListBalance } from "./styles";
import api from "../../services/api";
import { format } from "date-fns";

import { useIsFocused } from "@react-navigation/native";

export default function Home(){
    const isFocused = useIsFocused();

    const [listBalance, setListBalance] = useState([]);
    const [dateMoviments, setDateMoviments] = useState(new Date());

    useEffect(()=> {
        let isActive = true;

        async function getMoviments(){
            let dateFormated = format(dateMoviments, "dd/MM/yyyy");

            const balance = await api.get('/balance', {
                params:{
                    date: dateFormated
                }
            })

            if(isActive){
                setListBalance(balance.data);
            }
        }

        getMoviments();

        return () => isActive = false;

    }, [isFocused])

    const { signOut, user } = useContext(AuthContext);
    return(
        <Background>
            <Header 
                title="Minhas movimentações" 
            />

            <ListBalance 
                data={listBalance}
                horizontal={true}
                showHorizontalScrollIndicator={false}
                keyExtractor={item => item.tag }
               
            />
        </Background>
    );
}