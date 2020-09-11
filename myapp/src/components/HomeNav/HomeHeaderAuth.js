import React, {useContext} from 'react';
import HomeLogin from "./HomeLogin";
import HomeRegister from "./HomeRegister";
import {Row} from "react-bootstrap";
import LogoutBtn from "../elements/LogoutBtn";
import {AuthContext} from "../../config/AuthContext";

const HomeHeaderAuth = () => {
    const {currentUser} = useContext(AuthContext);
    return (
        <Row className={'navLinkContainer'}>
            <ul className={'navList navListAuth'}>
                {currentUser ? (<LogoutBtn/>) : (
                    <>
                        <HomeLogin/>
                        <HomeRegister/>
                    </>
                )}
            </ul>
        </Row>
    )
}

export default HomeHeaderAuth;