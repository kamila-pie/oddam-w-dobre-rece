import React from 'react';
import {Nav} from "react-bootstrap";
import {Link as LinkScroll} from "react-scroll";
import HomeHeaderAuth from "./HomeHeaderAuth";
import HomeBurger from "./HomeBurger";

const HomeHeaderNavMain = () => {
    return (
        <header className={'topMenu'}>
            <HomeHeaderAuth/>
            <HomeBurger/>
        </header>
    )
}

export default HomeHeaderNavMain;