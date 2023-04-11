import React, {useContext, useState, useEffect} from "react";
import { TouchableOpacity, Modal } from "react-native";

import Header from "../../components/Header";
import { Background, ListBalance, Area, Title, List } from "./styles";
import api from "../../services/api";
import { format } from "date-fns";

import { useIsFocused } from "@react-navigation/native";
import BalanceItem from "../../components/BalanceItem";
import HistoricoList from "../../components/HistoricoList";
import CalendarioModal from "../../components/CalendarioModal";

import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Home(){
    const isFocused = useIsFocused();
    const [listBalance, setListBalance] = useState([]);
    const [dateMoviments, setDateMoviments] = useState(new Date());
    const [movements, setMovements] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(()=> {
        let isActive = true;

        async function getMoviments(){
            
            let date = new Date(dateMoviments)
            let onlyDate = date.valueOf() + date.getTimezoneOffset() * 60 * 1000;
            let dateFormated = format(onlyDate, "dd/MM/yyyy");

            console.log(dateFormated);
            

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

    function filterDateMovements(dateSelected){
        setDateMoviments(dateSelected);
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
                <TouchableOpacity onPress={ () => setModalVisible(true) } >
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

            <Modal visible={modalVisible} animationType="fade" transparent={true} >
              <CalendarioModal
                setVisible={ () => setModalVisible(false) }
                handleFilter={ filterDateMovements } 
              />
            </Modal>

        </Background>
    );
}