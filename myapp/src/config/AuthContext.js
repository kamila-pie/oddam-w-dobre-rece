import React, { useEffect, useState } from "react";
import app from "./firebase";
import LoadigSpinner from "../components/elements/LoadingSpinner";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [pending, setPending] = useState(true);

    const login = (email, password) => {
        console.log(email);
        return app.auth().signInWithEmailAndPassword(email, password)
    }

    const logout = () => {
        return app.auth().signOut()
    }

    const register = (email, password) => {
        app.auth().createUserWithEmailAndPassword(email, password)
    }

    useEffect(() => {
        app.auth().onAuthStateChanged((user) => {
            setCurrentUser(user)
            setPending(false)
        });
    }, []);

    if(pending){
        return <LoadigSpinner/>
    }

    return (
        <AuthContext.Provider value={{ currentUser, login, logout, register }}>
            {children}
        </AuthContext.Provider>
    );
};