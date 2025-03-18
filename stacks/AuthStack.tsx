import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthNavigation } from "../types/navigation";
import { NavigationContainer } from "@react-navigation/native";

import Cadastro from "../components/Cadastro";
import Login from "../components/Login";

const AuthStack = () => {
    const Stack = createNativeStackNavigator<AuthNavigation>()

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="cadastro" component={Cadastro} />
                <Stack.Screen name="login" component={Login} />
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default AuthStack