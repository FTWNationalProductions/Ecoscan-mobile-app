import { createContext, PropsWithChildren, useState } from "react";

type AuthContext = {
    isLoggedIn: boolean
}

const AuthContext = createContext<AuthContext>({} as AuthContext)

const AuthProvider = ({ children }: PropsWithChildren) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

    return (
        <AuthContext.Provider value={{isLoggedIn}}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }