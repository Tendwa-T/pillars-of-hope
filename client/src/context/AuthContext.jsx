/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = () => {
        setIsAuthenticated(true);
    };
    const logut = () => {
        setIsAuthenticated(false);
    };

    const value = {
        currentUser,
        setCurrentUser,
        isAuthenticated,
        setIsAuthenticated,
        login,
        logut,
    };
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}