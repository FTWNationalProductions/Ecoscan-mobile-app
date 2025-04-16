import React from "react"

import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { MainNavigation } from "../types/navigation"
import { NavigationContainer } from "@react-navigation/native"

import Home from "../screens/Home"

const Stack = createNativeStackNavigator<MainNavigation>()

const MainStack = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="home" component={Home}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStack