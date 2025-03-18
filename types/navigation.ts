import { NavigationProp } from "@react-navigation/native"

type AuthNavigation = {
    login: undefined,
    cadastro: undefined
}

type AuthNavigationProp = NavigationProp<AuthNavigation>

export { AuthNavigation, AuthNavigationProp }