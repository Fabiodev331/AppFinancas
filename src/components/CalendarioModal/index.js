import React, { useState } from "react";
import { TouchableWithoutFeedback, View } from "react-native";

import { Container, ButtonFilterText, ModalContent, ButtonFilter } from "./styles";

import { Calendar, LocaleConfig } from "react-native-calendars";
import { ptBR } from "./localCalendario";

LocaleConfig.locales['pt-br'] = ptBR;
LocaleConfig.defaultLocale = 'pt-br';

export default function CalendarioModal( {setVisible, handleFilter} ){
    const [dateNow, setDateNow] = useState(new Date());
    const [markedDates, setMarkedDates] = useState({});

    function handleOnDayPress(date){
        setDateNow(new Date(date.dateString));

        let markedDay = {};

        markedDay[date.dateString] = {
            selected: true,
            selectedColor: '#3b3dbf',
            textColor: '#FFF'
        }

        setMarkedDates(markedDay)
    }

    function handleFilterDate(){
        handleFilter(dateNow);
        setVisible();
    }


    return(
        <Container>

            <TouchableWithoutFeedback onPress={setVisible} >
                <View style={{ flex: 1 }} ></View>
            </TouchableWithoutFeedback>

            <ModalContent>

                <Calendar
                    activeOpacity={0.8}
                    onDayPress={handleOnDayPress}
                    markedDates={markedDates}
                    enableSwipeMonths={true}
                    theme={{
                        todayTextColor: '#00adf5',
                        selectedDayBackgroundColor: '#FF0000',
                        selectedDayTextColor: '#FFF'
                    }}
                />

                <ButtonFilter activeOpacity={0.5} onPress={handleFilterDate} >
                    <ButtonFilterText>Filtrar</ButtonFilterText>
                </ButtonFilter>    
            </ModalContent>

        </Container>
    )
}