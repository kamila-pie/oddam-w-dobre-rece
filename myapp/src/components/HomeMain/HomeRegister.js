import React from 'react';
import {Link} from "react-router-dom";

const HomeRegister = () => {
    return (
            <li className={'navEl navListAuthEl'}><Link to={'/rejestracja'}>Załóż konto</Link></li>
    )
}

export default HomeRegister;