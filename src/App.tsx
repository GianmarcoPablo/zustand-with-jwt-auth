import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LoginPage, HomePage, RegisterPage, Profile } from "./pages"
import ProtectedRoute from "./components/ProtectedRoute"
import Navigation from "./components/Navigation"
import { useAuthStore } from "./store/counterStore"

export default function App() {

    const { isAuth } = useAuthStore(state => state)

    return (
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/profile" element={
                    <ProtectedRoute isAllow={isAuth}>
                        <Profile />
                    </ProtectedRoute>}
                />
            </Routes>
        </BrowserRouter>
    )
}
