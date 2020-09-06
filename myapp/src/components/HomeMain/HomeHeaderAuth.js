import React from 'react';
import HomeLogin from "./HomeLogin";
import HomeRegister from "./HomeRegister";
import {Row} from "react-bootstrap";

const HomeHeaderAuth = () => {
    return (
        <Row className={'navLinkContainer'}>
            <ul className={'navList navListAuth'}>
                <HomeLogin/>
                <HomeRegister/>
            </ul>
        </Row>
    )
}

export default HomeHeaderAuth;