import React from 'react';
import {NavLink} from "react-router-dom";

const LoginBtn = () => {
    return (
        <>
            <button className={'logoutBtn login'}>
                <NavLink to={'/logowanie'} > Zaloguj </NavLink>
            </button>
        </>
    )
}

export default LoginBtn;