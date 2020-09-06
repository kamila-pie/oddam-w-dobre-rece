import React from "react";
import TitleDecor from "../components/elements/TitleDecor";
import {Container, Form, FormGroup, Row} from "react-bootstrap";

export const Login = () => {
    return (
        <section className={'loginSection'}>
            <TitleDecor text={'Zaloguj się'}/>
            <Form className={'loginForm'}>
                <Container className={'loginFormGroup'}>
                    <FormGroup>
                        <Form.Label>Email</Form.Label>
                        <Form.Control className={'formInput'} type={'email'} id={'email'} required/>
                    </FormGroup>
                    <FormGroup>
                        <Form.Label>Hasło</Form.Label>
                        <Form.Control className={'formInput'} type={'password'} id={'password'} required/>
                    </FormGroup>
                </Container>
                <Row>
                    <button className={'btnAuth btnOption'}>Załóż konto</button>
                    <button className={'btnAuth btnAction'}>Zaloguj się</button>
                </Row>
            </Form>
        </section>
    );
};

export default Login;