import { NavigationProp } from "@react-navigation/native"

type AuthNavigation = {
    login: undefined,
    cadastro: undefined
}

type AuthNavigationProp = NavigationProp<AuthNavigation>

type MainNavigation = {
    home: undefined,
    newReport: undefined,
    reportDetails: { id: string },
    
}

type MainNavigationProp = NavigationProp<MainNavigation>

export { AuthNavigation, AuthNavigationProp, MainNavigation, MainNavigationProp }