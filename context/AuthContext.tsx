import React from "react";
import { createContext, PropsWithChildren, useEffect, useState } from "react";
import Constants from "expo-constants";
import { User } from "../types/user";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ApiUrl = Constants.expoConfig?.extra?.API_URL

type AuthContext = {
    isLoggedIn: boolean,
    isLoading: boolean,
    user: User | null,
    login: (user: User) => void,
    cadastrar: (user: User) => void,
    logOff: () => void,
}

const AuthContext = createContext<AuthContext>({} as AuthContext)

const AuthProvider = ({ children }: PropsWithChildren) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [user, setUser] = useState<User | null>(null)

    const login = async (user: User) => {
        setIsLoading(true)

        await fetch(`${ApiUrl}/auth`, {
            method: "POST",
            body: JSON.stringify(user),
            headers: { "Content-Type": "application/json" }
        }).then(response => {
            if (response.ok) {
                return response.json()
            } else if (response.status == 404) {
                throw new Error("Usuário não encontrado")
            }
        }).then(json => {
            setUser(json)
        }).catch(error => console.log("Erro na requisição\n", error.message))

        setIsLoading(false)
    }

    const fetchUser = async () => {
        const userId = await AsyncStorage.getItem("userId")
        if (userId) {
            await fetch(`${ApiUrl}/users/${userId}`)
                .then(response => {
                    if (response.ok) {
                        return response.json()
                    }
                }).then(json => {
                    setUser(json)
                }).catch(error => console.log("Erro na requisição\n", error.message))
        }
    }

    const cadastrar = async (user: User) => {
        setIsLoading(true)
    }

    const logOff = () => {
        setUser(null)
    }
    
    useEffect(() => {
        AsyncStorage.getItem("logged")
        .then(logged => {
            if (logged != null && logged == "true") {
                setIsLoggedIn(true)
                fetchUser()
            }
        })
    }, [])
    
    useEffect(() => {
        if (user == null) {
            AsyncStorage.setItem("logged", "false")
            AsyncStorage.removeItem("userId")
            setIsLoggedIn(false)
        } else {
            AsyncStorage.setItem("logged", "true")
            AsyncStorage.setItem("userId", user.id.toString())
            setIsLoggedIn(true)
        }
    }, [user])

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logOff, isLoading, user, cadastrar }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }