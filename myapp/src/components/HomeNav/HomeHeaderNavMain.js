import React, {useContext} from 'react';
import HomeHeaderAuth from "./HomeHeaderAuth";
import HomeBurger from "./HomeBurger";
import {AuthContext} from "../../config/AuthContext";
import {Redirect} from "react-router-dom";

const HomeHeaderNavMain = () => {
    const {currentUser} = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to={'/'}/>
    }

    return (
        <header className={'topMenu'}>
            <HomeHeaderAuth/>
            <HomeBurger/>
        </header>
    )
}

export default HomeHeaderNavMain;