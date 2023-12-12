import { useAuthStore } from "../store/counterStore"
import { useNavigate } from "react-router-dom"
export default function Profile() {

    const { logout, profile } = useAuthStore(state => state)
    const navigate = useNavigate();

    return (
        <div>

            <h1>
                Profile Page
            </h1>https://www.youtube.com/watch?v=PSgFTs3szGQ

            {JSON.stringify(profile.profile)}

            <button
                onClick={() => {
                    logout();
                    navigate('/login');
                }}
            >
                Logout
            </button>
        </div>
    )
}
