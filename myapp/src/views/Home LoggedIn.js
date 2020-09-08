import React, {useContext} from 'react';
import {AuthContext} from "../config/AuthContext";
import {Link, Redirect} from "react-router-dom";
import HomeHeaderNav from "../components/HomeMain/HomeHeaderNav";

const HomeLoggedIn = () => {
    const {currentUser} = useContext(AuthContext);
    if (currentUser) { return <Redirect to={'/'}/> }
    return (
        <>
            <HomeHeaderNav/>
            <section className={'logoutSection'}>
                <h1>HomeLoggedIn</h1>
                <button><Link to={'/'}>Wylogowano</Link></button>
            </section>
        </>
    )
}

export default HomeLoggedIn;