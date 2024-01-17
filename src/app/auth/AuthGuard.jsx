import { Navigate, useLocation } from 'react-router-dom';
// HOOK
import useAuth from 'app/hooks/useAuth';

export default function AuthGuard({ children }) {
    const { isAuthenticated } = useAuth();
    const { pathname } = useLocation();
    const token = localStorage.getItem('token');
    if (token) return <>{children}</>;

    return <Navigate replace to="/session/signin" state={{ from: pathname }} />;
}
