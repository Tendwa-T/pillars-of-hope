/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';


export const AuthContext = createContext();

const baseAPI = import.meta.env.VITE_BASE_API;


export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState({});
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    async function login(email, password) {
        try {
            const response = await fetch(`${baseAPI}/api/user/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });
            const data = await response.json();
            if (response.ok) {
                setCurrentUser({ userName: data.userName, userID: data.userID, token: data.token });
                setIsAuthenticated(data.authenticated);
                return true;
            } else {
                console.error(data.message);
                return false;
            }
        } catch (error) {
            console.log(error);
        }

    }

    function logout() {
        setIsAuthenticated(false);
    }

    const value = {
        currentUser,
        setCurrentUser,
        isAuthenticated,
        setIsAuthenticated,
        login,
        logout,
    };
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}