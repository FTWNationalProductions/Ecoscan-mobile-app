import React, { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { Button } from "react-native"

const Home = () => {
    const logoff = useContext(AuthContext)

    return(
        <>
            <Button title="sair" onPress={() => logoff}/>
        </>
    )
}

export default Home