import React, { useContext, useState } from "react"

import { ActivityIndicator, Button, Text, TextInput, View } from "react-native"
import { User } from "../types/user"
import { AuthContext } from "../context/AuthContext"
import { useNavigation } from "@react-navigation/native"
import { AuthNavigationProp } from "../types/navigation"

const Cadastro = () => {
    const [user, setUser] = useState<User>({} as User)
    
    const navigation = useNavigation<AuthNavigationProp>()
    const { cadastrar, isLoading } = useContext(AuthContext)

    const handleChange = (field: keyof User) => {
        return (text: string) => setUser({ ...user, [field]: text })
    }

    const handleSubmit = () => {
        cadastrar(user)
    }

    return (
        <View>
            <View>
                <Text>Nome:</Text>
                <TextInput value={user.nome} onChangeText={handleChange("nome")} />
            </View>

            <View>
                <Text>Email:</Text>
                <TextInput value={user.email} onChangeText={handleChange("email")} />
            </View>

            <View>
                <Text>Senha:</Text>
                <TextInput value={user.senha} onChangeText={handleChange("senha")} />
            </View>

            <Button disabled={isLoading} onPress={handleSubmit} title="Enviar" />
            <ActivityIndicator animating={isLoading} />

            <Button disabled={isLoading} onPress={() => navigation.navigate("cadastro")} title="Não tenho conta" />
        </View>
    )
}

export default Cadastro