import { createContext, useState } from "react";
import axios from 'axios';
export const AuthContext = createContext();
import jwt from 'jsonwebtoken'

const url = process.env.NEXT_PUBLIC_BACKEND_API

export function AuthWrapper({ children }) {
    const [globalState, setGlobalState] = useState({
        tokens: null,
        login,
        logout,
        userData: null,
    })
    async function login(userInfo) {

        const res = await axios.post(url + '/api/token/', userInfo);
        const decodedToken = jwt.decode(res.data.access)
        setGlobalState({
            tokens: res.data,
            login,
            logout,
            userData: {
                username: userInfo.username,
                id: decodedToken.user_id
            }
        })
    }

    function logout() {
        setGlobalState({
            tokens: null,
            userData: null,
            login,
            logout
        })
    }

    return (
        <>
            <AuthContext.Provider value={globalState}>
                {children}
            </AuthContext.Provider>
        </>
    )
}