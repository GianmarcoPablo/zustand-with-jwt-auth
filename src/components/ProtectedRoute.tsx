import { Navigate, Outlet } from "react-router-dom";

interface Props {
    isAllow: boolean;
    children: React.ReactNode;
}

export default function ProtectedRoute({ children, isAllow }: Props) {

    if (!isAllow) return <Navigate to="/login" />

    return children ? children : <Outlet />
}
