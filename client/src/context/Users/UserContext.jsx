import { createContext, useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { useAuth } from "../Auth/useAuth";

export const UserContext = createContext();

const baseAPI = import.meta.env.VITE_BASE_API;

export function UserProvider({ children }) {
    const [userList, setUserList] = useState([]);
    const { currentUser, isAuthenticated } = useAuth();

    useEffect(() => {
        if (isAuthenticated) {
            getUsers();
        }

    }, [isAuthenticated]);

    async function getUsers() {

        try {
            const token = currentUser.token;
            const response = await fetch(`${baseAPI}/api/user/users`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${token}`
                },
            })
            const data = await response.json();
            if (response.ok) {
                setUserList(data)
                return true;
            }
        } catch (error) {
            console.log(error)
            return false
        }
    }

    async function createUser(user) {

        try {
            const token = currentUser.token;
            const response = await fetch(`${baseAPI}/api/user/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${token}`
                },
                body: JSON.stringify(user),
            })
            if (!response.ok) {
                throw new Error(response.message)
            }
            getUsers();
            return true;
        } catch (error) {
            console.log(error)
            return false;
        }
    }
    const value = {
        userList,
        setUserList,
        getUsers,
        createUser,
    };
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

UserProvider.propTypes = {
    children: PropTypes.element.isRequired,
}