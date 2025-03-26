import React, { useContext } from "react"
import { AuthContext } from "./context/AuthContext"

import AuthStack from "./stacks/AuthStack"
import MainStack from "./stacks/MainStack"

const Main = () => {

    const { isLoggedIn } = useContext(AuthContext)

    return isLoggedIn ? <MainStack/> : <AuthStack/> 
}

export default Main