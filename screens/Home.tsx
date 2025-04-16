import React, { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { Button } from "react-native"

const Home = () => {
    const { logOff } = useContext(AuthContext)

    return (
        <>
            <Button title="sair" onPress={() => logOff  ()} />
        </>
    )
}

export default Home