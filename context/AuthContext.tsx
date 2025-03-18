import { createContext, PropsWithChildren, useState } from "react";
import Constants from "expo-constants";
import { User } from "../types/user";

const ApiUrl = Constants.expoConfig?.extra?.API_URL

type AuthContext = {
    isLoggedIn: boolean,
    isLoading: boolean,
    user: User,
    login: (user: User) => void,
}

const AuthContext = createContext<AuthContext>({} as AuthContext)

const AuthProvider = ({ children }: PropsWithChildren) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [user, setUser] = useState<User>({} as User)

    const login = async (user: User) => {
        await fetch(ApiUrl)
        .then(response => {return response.json()})
        .then(json => setUser(json))
    }

    return (
        <AuthContext.Provider value={{isLoggedIn, login, isLoading, user}}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }