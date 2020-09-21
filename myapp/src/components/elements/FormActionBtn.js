import React from 'react';
import {NavLink} from "react-router-dom";

const FormActionBtn = () => {
    return (
        <>
            <button className={'logoutBtn'}>
                <NavLink to={'/strona_w_budowie'} > Oddaj rzeczy </NavLink>
            </button>
        </>
    )
}

export default FormActionBtn;