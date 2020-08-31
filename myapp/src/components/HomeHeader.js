import React from 'react';
import HomeLogin from "./HomeLogin";
import HomeRegister from "./HomeRegister";
import {Row} from "react-bootstrap";
import {Link} from "react-router-dom";

const HomeHeader = () => {
    return (
        <header className={'topMenu'}>
            <Row className={'navLinkContainer'}>
                <ul className={'navList navListAuth'}>
                    <HomeLogin/>
                    <HomeRegister/>
                </ul>
            </Row>
            <Row className={'navLinkContainer'}>
                <ul className={'navList'}>
                    <li className={'navEl'}><Link to={'/'}>Start</Link></li>
                    <li className={'navEl'}><Link to={'/'}>O co chodzi?</Link></li>
                    <li className={'navEl'}><Link to={'/'}>O nas</Link></li>
                    <li className={'navEl'}><Link to={'/'}>Fundacja i organizacje</Link></li>
                    <li className={'navEl'}><Link to={'/'}>Kontakt</Link></li>
                </ul>
            </Row>
        </header>
    )
}

export default HomeHeader;