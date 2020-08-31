import React from 'react';
import Login from "./Login";
import Register from "./Register";
import {Row, Col} from "react-bootstrap";

const HomeHeader = () => {
    return (
        <header className={'topMenu'}>
            <Row className={'navLinkContainer'}>
                <ul className={'navList navListAuth'}>
                    <Login/>
                    <Register/>
                </ul>
            </Row>
            <Row className={'navLinkContainer'}>
                <ul className={'navList'}>
                    <Col className={'navEl'}><a href={'/'}>Start</a></Col>
                    <Col className={'navEl'}><a href={'/'}>O co chodzi?</a></Col>
                    <Col className={'navEl'}><a href={'/'}>O nas</a></Col>
                    <Col className={'navEl'}><a href={'/'}>Fundacja i organizacje</a></Col>
                    <Col className={'navEl'}><a href={'/'}>Kontakt</a></Col>
                </ul>
            </Row>
        </header>
    )
}

export default HomeHeader;