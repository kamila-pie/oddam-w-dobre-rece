import React, {useContext} from 'react';
import app from "../config/firebase";
import {AuthContext} from "../config/AuthContext";
import {Link, Redirect} from "react-router-dom";

const HomeLoggedIn = () => {
    const {currentUser} = useContext(AuthContext);

    if (currentUser) { return <Redirect to={'/'}/> }
    return (
        <>
            <h1>HomeLoggedIn</h1>
            <button onClick={() => app.auth().signOut()}><Link to={'/'}>Wylogowano</Link></button>
        </>
    )
}

export default HomeLoggedIn;