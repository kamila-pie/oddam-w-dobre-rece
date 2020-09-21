import React from 'react';
import {NavLink} from "react-router-dom";

const RegisterBtn = () => {
    return (
        <>
            <button className={'logoutBtn register'}>
                <NavLink to={'/rejestracja'} > Załóż konto </NavLink>
            </button>
        </>
    )
}

export default RegisterBtn;