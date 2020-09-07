import React, {useCallback, useContext} from "react";
import {withRouter, Redirect} from "react-router-dom";
import app from "../config/firebase";
import {AuthContext} from "../config/AuthContext";

import {Container, Form, FormGroup, Row} from "react-bootstrap";
import TitleDecor from "../components/elements/TitleDecor";
import {Link} from "react-router-dom";

const Login = ({history}) => {
    const handleLogin = useCallback(
        async e => {
            e.preventDefault();
            const {email, password} = e.target.elements;
            try {
                await app
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                console.log('jesteś zalogowany');
                history.push('/');
            } catch (error) {
                console.log("Błędny email lub hasło");
                alert(error);
            }
        },[history]);

    const {currentUser} = useContext(AuthContext);

    if (currentUser) { return <Redirect to={'/'}/> }

    return (
        <section className={'loginSection'}>
            <TitleDecor text={'Zaloguj się'}/>
            <Form className={'loginForm'} onSubmit={handleLogin}>
                <Container className={'loginFormGroup'}>
                    <FormGroup>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            className={'formInput'}
                            type={'email'}
                            name={'email'}
                            id={'email'}
                            required/>
                    </FormGroup>
                    <FormGroup>
                        <Form.Label>Hasło</Form.Label>
                        <Form.Control
                            className={'formInput'}
                            type={'password'}
                            name={'password'}
                            id={'password'}
                            required/>
                    </FormGroup>
                </Container>
                <Row>
                    <button className={'btnAuth btnOption'}><Link to={'/rejestracja'}>Załóż konto</Link></button>
                    <button className={'btnAuth btnAction'} type={'submit'}>Zaloguj się</button>
                </Row>
            </Form>
        </section>
    );
};

export default withRouter(Login);