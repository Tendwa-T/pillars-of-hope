/* eslint-disable react/prop-types */
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/useAuth';

const ProtectedRoute = ({ element }) => {
    const { isAuthenticated } = useAuth();
    if (!isAuthenticated) {
        return <Navigate to="/admin" />;
    }
    return element || <Outlet />;
};

export default ProtectedRoute;