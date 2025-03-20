import { createContext, PropsWithChildren, useEffect, useState } from "react";
import Constants from "expo-constants";
import { User } from "../types/user";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ApiUrl = Constants.expoConfig?.extra?.API_URL

type AuthContext = {
    isLoggedIn: boolean,
    isLoading: boolean,
    user: User,
    login: (user: User) => void,
    logOff: () => void,
}

const AuthContext = createContext<AuthContext>({} as AuthContext)

const AuthProvider = ({ children }: PropsWithChildren) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [user, setUser] = useState<User>({} as User)

    const login = async (user: User) => {
        setIsLoading(true)

        await fetch(ApiUrl, {
            method: "POST",
            body: JSON.stringify(user),
            headers: { "Content-Type": "application/json" }
        }).then(response => {
            return response.json()
        }).then(json => {
            setUser(json)
        }).catch(error => console.log("Erro na requisição \n \n", error.message))

        setIsLoading(false)
    }

    const logOff = () => {
        setUser({} as User)
        AsyncStorage.removeItem("logged")
    }

    useEffect(() => {
        AsyncStorage.getItem("logged")
            .then(logged => {
                if (logged != null && logged == "true") {
                    setIsLoggedIn(true)
                }
            })
    }, [])

    useEffect(() => {
        if (user == {} as User) {
            AsyncStorage.setItem("logged", "false")
        } else {
            AsyncStorage.setItem("logged", "true")
        }
    }, [user])

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logOff, isLoading, user }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }