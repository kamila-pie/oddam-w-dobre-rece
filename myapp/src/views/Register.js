import React, {useCallback} from "react";
import TitleDecor from "../components/elements/TitleDecor";
import {Container, Form, FormGroup, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {withRouter} from "react-router";
import app from "../config/firebase";

const Register = ({history}) => {
    const handleRegister = useCallback(async e => {
        e.preventDefault();
        const {email, password} = e.target.elements;
        try {
            await app
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
            history.push('/');
        } catch (error) {
            alert(error);
        }
    }, [history]);

    return (
        <section className={'registerSection'}>
            <TitleDecor text={'Załóż konto'}/>
            <Form
                className={'loginForm'}
                onSubmit={handleRegister}>
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
                    <FormGroup>
                        <Form.Label>Powrórz hasło</Form.Label>
                        <Form.Control
                            className={'formInput'}
                            type={'password'}
                            id={'passwordRep'}
                            required/>
                    </FormGroup>
                </Container>
                <Row>
                    <button className={'btnAuth btnOption'}><Link to={'/logowanie'}>Zaloguj się</Link></button>
                    <button type={'submit'} className={'btnAuth btnAction'}>Załóż konto</button>
                </Row>
            </Form>
        </section>
    );
};

export default withRouter(Register);