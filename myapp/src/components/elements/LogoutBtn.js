import React, {useContext} from 'react';
import {Redirect} from "react-router-dom";
import {AuthContext} from "../../config/AuthContext";
import app from "../../config/firebase";

const LogoutBtn = () => {
    const {currentUser} = useContext(AuthContext);

    if (currentUser) { return <Redirect to={'/wylogowano'}/> }
    return (
        <>
            <button onClick={() => app.auth().signOut()}>Logout</button>
        </>
    )
}

export default LogoutBtn;