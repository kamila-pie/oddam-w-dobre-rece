import React from 'react';
import {Link} from "react-router-dom";
import HomeBurger from "./HomeBurger";

const HomeLogin = () => {
    return (
        <>
            <li className={'navEl navListAuthEl'}><Link to={'/logowanie'}>Zaloguj</Link></li>
        </>
    )
}

export default HomeLogin;
