import React from "react";
import TitleDecor from "../components/elements/TitleDecor";
import {Container, Form, FormGroup, Row} from "react-bootstrap";

export const Register = () => {
    return (
        <section className={'registerSection'}>
            <TitleDecor text={'Załóż konto'}/>
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
                    <FormGroup>
                        <Form.Label>Powrórz hasło</Form.Label>
                        <Form.Control className={'formInput'} type={'password'} id={'password'} required/>
                    </FormGroup>
                </Container>
                <Row>
                    <button className={'btnAuth btnOption'}>Zaloguj się</button>
                    <button className={'btnAuth btnAction'}>Załóż konto</button>
                </Row>
            </Form>
        </section>
    );
};

export default Register;