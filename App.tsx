import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { AuthNavigation } from "./types/navigation";
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
    const Stack = createNativeStackNavigator<AuthNavigation>()

    return(
        <>
        </>
    )
}

export default App