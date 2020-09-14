import React from 'react';
import {NavLink} from "react-router-dom";
import app from "../../config/firebase";

const LogoutBtn = () => {
    return (
        <>
            <button onClick={() => app.auth().signOut()}>
                <NavLink to={'/wylogowano'}> Logout </NavLink>
            </button>
        </>
    )
}

export default LogoutBtn;