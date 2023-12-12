import { loginRequest, profileRequest } from "../api/auth";
import { useAuthStore } from "../store/counterStore";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {

    const { setToken, setProfile } = useAuthStore(state => state)
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const email = (e.currentTarget.elements[0] as HTMLInputElement).value;
        const password = (e.currentTarget.elements[1] as HTMLInputElement).value;

        const restLogin = await loginRequest(email, password);
        setToken(restLogin.token);

        const resProfile = await profileRequest();
        setProfile(resProfile);

        navigate('/profile');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="email@email.com" />
            <input type="password" placeholder="*******" />

            <button type="submit">
                Login
            </button>
        </form>
    )
}
