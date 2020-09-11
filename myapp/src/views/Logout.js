import React from "react";
import {Link} from "react-router-dom";
import TitleDecor from "../components/elements/TitleDecor";
import HomeHeaderNavMain from "../components/HomeNav/HomeHeaderNavMain";

export const Logout = () => {
    return (
        <>
            <HomeHeaderNavMain/>
            <section className={'logoutSection'}>
                <TitleDecor text={'Wylogowanie nastąpiło pomyślnie!'}/>
                <button className={'btnAuth btnAction'}><Link to={'/'}>Strona główna</Link></button>
            </section>
        </>
    );
};

export default Logout;