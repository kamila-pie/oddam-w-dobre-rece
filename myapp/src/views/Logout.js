import React from "react";
import {Link} from "react-router-dom";
import TitleDecor from "../components/elements/TitleDecor";
import {Container, Form, FormGroup, Row} from "react-bootstrap";
import app from "../config/firebase";

export const Logout = () => {
    return (
        <section className={'logoutSection'}>
            <TitleDecor text={'Wylogowanie nastąpiło pomyślnie!'}/>
            <button className={'btnAuth btnAction'}><Link to={'/'}>Strona główna</Link></button>
        </section>
    );
};

export default Logout;