import React, {useContext, useState, useEffect} from "react";
import { TouchableOpacity } from "react-native";

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
    const [movements, setMovements] = useState([]);

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
                setMovements(receives.data);
                setListBalance(balance.data);
            }
        }

        getMoviments();

        return () => isActive = false;

    }, [isFocused, dateMoviments])

    async function handleDelete(id){
        try{
            await api.delete('/receives/delete', {
                params:{
                    item_id: id
                }
            })

            setDateMoviments(new Date())

        }catch(err){
            console.log(err);
        }

    }

    
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
                data={movements}
                keyExtractor={ item => item.id}
                renderItem={ ({item}) => <HistoricoList data={item} deleteItem={handleDelete} /> }
                showsVerticalScrollOndicator={false}
                contentContainerStyles={{ paddingBottom: 20 }}
            />


        </Background>
    );
}