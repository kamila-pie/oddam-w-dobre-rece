import React from 'react';
import {NavLink} from "react-router-dom";
import app from "../../config/firebase";

const LogoutBtn = () => {
    return (
        <>
            <button className={'logoutBtn'} onClick={() => app.auth().signOut()}>
                <NavLink to={'/wylogowano'} > Wyloguj </NavLink>
            </button>
        </>
    )
}

export default LogoutBtn;