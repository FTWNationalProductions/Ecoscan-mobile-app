import React, { useContext, useState } from "react";

import { AuthContext } from "../context/AuthContext";
import { useNavigation } from "@react-navigation/native";

import { ActivityIndicator, Button, Text, TextInput, View } from "react-native";

import { AuthNavigationProp } from "../types/navigation";
import { User } from "../types/user";

const Login = () => {
    const [user, setUser] = useState<User>({} as User)

    const navigation = useNavigation<AuthNavigationProp>()
    const { login, isLoading } = useContext(AuthContext)

    const handleChange = (field: keyof User) => {
        return (text: string) => setUser({ ...user, [field]: text })
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

            <Button disabled={isLoading} onPress={() => login(user)} title="Enviar" />
            <ActivityIndicator animating={isLoading}/>


            <Button disabled={isLoading} onPress={() => navigation.navigate("cadastro")} title="Não tenho conta" />
        </View>
    )
}

export default Login