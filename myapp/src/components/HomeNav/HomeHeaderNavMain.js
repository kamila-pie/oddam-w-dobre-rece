import React from 'react';
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