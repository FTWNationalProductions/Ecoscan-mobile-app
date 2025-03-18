import { AuthProvider } from "./context/AuthContext";
import Main from "./Main";

export default function App() {
    return (
        <AuthProvider>
            <Main />
        </AuthProvider>
    )
}