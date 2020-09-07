import React from 'react';
import HomeLogin from "./HomeLogin";
import HomeRegister from "./HomeRegister";
import {Row} from "react-bootstrap";
import LogoutBtn from "../elements/LogoutBtn";

const HomeHeaderAuth = () => {
    return (
        <Row className={'navLinkContainer'}>
            <ul className={'navList navListAuth'}>
                <HomeLogin/>
                <HomeRegister/>
                <LogoutBtn/>
            </ul>
        </Row>
    )
}

export default HomeHeaderAuth;