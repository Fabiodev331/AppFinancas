import React, {useContext, useState, useEffect} from "react";
import { Text, View, Button, TouchableOpacity } from "react-native";

import { AuthContext } from "../../contexts/auth";

import Header from "../../components/Header";
import { Background, ListBalance, Area, Title, List } from "./styles";
import api from "../../services/api";
import { format } from "date-fns";

import { useIsFocused } from "@react-navigation/native";
import BalanceItem from "../../components/BalanceItem";
import HistoricoList from "../../components/HistoricoList";

import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Home(){
    const isFocused = useIsFocused();
    const [listBalance, setListBalance] = useState([]);
    const [dateMoviments, setDateMoviments] = useState(new Date());
    const [movimentes, setMoviments] = useState([]);

    useEffect(()=> {
        let isActive = true;

        async function getMoviments(){
            let dateFormated = format(dateMoviments, "dd/MM/yyyy");

            const receives = await api.get('/receives', {
                params:{
                    date: dateFormated
                }
            })

            const balance = await api.get('/balance', {
                params:{
                    date: dateFormated
                }
            })

            if(isActive){
                setMoviments(receives.data);
                setListBalance(balance.data);
            }
        }

        getMoviments();

        return () => isActive = false;

    }, [isFocused])

    
    return(
        <Background>
            <Header 
                title="Minhas movimentações" 
            />

            <ListBalance 
                data={listBalance}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.tag }
                renderItem={ ({ item }) => ( <BalanceItem  data={item} /> ) }
            />

            <Area>
                <TouchableOpacity>
                    <Icon name="event" color="#121212" size={30} />
                </TouchableOpacity>
                <Title> Últimas movimentações </Title>
            </Area>

            <List
                data={[movimentes]}
                keyExtractor={ item => item.id}
                renderItem={ ({item}) => <HistoricoList data={item} /> }
                showsVerticalScrollOndicator={false}
                contentContainerStyles={{ paddingBottom: 20 }}
            />


        </Background>
    );
}