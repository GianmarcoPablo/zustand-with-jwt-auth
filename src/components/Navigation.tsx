import { Link } from "react-router-dom"
export default function Navigation() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home Page</Link>
                    </li>
                    <li>
                        <Link to="/login">Login Page</Link>
                    </li>
                    <li>
                        <Link to="/register">Register Page</Link>
                    </li>
                    <li>
                        <Link to="/profile">Profile Page</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
