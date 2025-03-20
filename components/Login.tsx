import React, { useContext, useState } from "react";

import { Button, Text, TextInput, View } from "react-native";
import { User } from "../types/user";
import { AuthContext } from "../context/AuthContext";
import { httpError } from "../types/httpError";

const Login = () => {
    const { login, isLoading } = useContext(AuthContext)

    const [user, setUser] = useState<User>({} as User)

    const handleChange = (field: keyof User) => {
        return (text: string) => setUser({ ...user, [field]: text })
    }

    const handleSubmit = () => {
        login(user)
    }

    return (
        <View>
            <View>
                <Text>Email:</Text>
                <TextInput value={user.email} onChangeText={handleChange("email")} />
            </View>

            <View>
                <Text>Senha:</Text>
                <TextInput value={user.senha} onChangeText={handleChange("senha")} />
            </View>

            <Button disabled={isLoading} onPress={handleSubmit} title="Enviar" />
        </View>
    )
}

export default Login