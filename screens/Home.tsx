import React, { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { Button } from "react-native"
import { Text } from "lucide-react"
import { useNavigation } from "@react-navigation/native"
import { MainNavigationProp } from "../types/navigation"

const Home = () => {
    const { logOff } = useContext(AuthContext)

    const navigation = useNavigation<MainNavigationProp>()

    return (
        <>
            <Button title="NewReport" onPress={() => navigation.navigate("newReport")} />
            <Text>Dashboard</Text>
            <Button title="sair" onPress={() => logOff  ()} />
        </>
    )
}

export default Home