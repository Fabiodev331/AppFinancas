import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignIn from "../pages/SigniIn";
import SignUp from "../pages/SignUp";

const AuthStack = createNativeStackNavigator();

function AuthRoutes(){
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen
            name="SignIn"
            component={SignIn}
            options={{
                headerShown: false,
            }}
            />

            <AuthStack.Screen
            name="SignUp"
            component={SignUp}
            options={{
                headerStyle:{
                    backgroundColor: '#4e009b',
                    borderBottonWidth: 1,
                    borderBottonColor: '#00b94a'
                },
                headerTintColor: '#fff',
                headerTitle: 'Voltar',
                headerBackTitleVisible: false
            }}
            />

        </AuthStack.Navigator>
    );
}

export default AuthRoutes;