import { useNavigation } from "@react-navigation/native"
import React from "react"
import { AuthNavigationProp } from "../types/navigation"
import { Button, View } from "react-native"

const Cadastro = () => {

    const navigation = useNavigation<AuthNavigationProp>()
            
    return(
        <View>
            <Button title="Login" onPress={() => navigation.navigate("login")}/>
        </View>
    )
}

export default Cadastro