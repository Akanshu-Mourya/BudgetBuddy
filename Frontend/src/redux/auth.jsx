import { createContext, useContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const storeTokenInLS = (serverToken) => {
        return localStorage.setItem("token", serverToken);
    };

    return <AuthContext.Provider value={{ storeTokenInLS }}>
        {children}

    </AuthContext.Provider>
};
export const useAuth = () => {
    const AuthContextValue = useContext(AuthContext);
    if (!AuthContextValue) {
        throw new Error("UseAuth used outside of the Provider");
    }
    return AuthContextValue;
};