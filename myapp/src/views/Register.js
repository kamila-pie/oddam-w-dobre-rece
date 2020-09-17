import React, {useContext, useCallback} from "react";
import TitleDecor from "../components/elements/TitleDecor";
import {Container, Form, FormGroup, Nav, Row} from "react-bootstrap";
import {Link, Redirect} from "react-router-dom";
import {withRouter} from "react-router";
import {AuthContext} from "../config/AuthContext";
import {Formik} from "formik";
import * as Yup from "yup";
import Error from "../components/elements/Error";
import homeLogNavImg from "../assets/home.png";

const validationRegisterSchema = Yup.object().shape({
    email: Yup.string()
        .email("Podany email jest nieprawidołowy!")
        .required("Musisz podać swój email."),
    password: Yup.string()
        .min(6, "Podane hasło jest za krótkie. Musi wawierać min 6 znaków.")
        .required("Podane hasło jest nieprawidłowe!"),
    passwordConfirm: Yup.string()
        .required("Proszę potwierdź hasło")
        .when("password", {
            is: password => (password && password.length > 0 ? true : false),
            then: Yup.string().oneOf([Yup.ref("password")], "Podane hasła muszą być identyczne!")
        })
});

const Register = ({history}) => {
    const handleRegister = useCallback(async e => {
        e.preventDefault();
        const {email, password} = e.target.elements;
        try {
            await register(email.value, password.value);
            history.push('/');
        } catch (error) {
            alert(error);
        }
    }, [history]);
    const {currentUser, register} = useContext(AuthContext);
    if (currentUser) {
        return <Redirect to={'/'}/>
    }

    return (
        <>
            <Nav className={'homeLogNav'}>
                <Link to={'/'}>
                    <img className={'homeLogNavImg'} src={homeLogNavImg} alt={'home'}/>
                </Link>
            </Nav>
            <section className={'registerSection'}>
                <TitleDecor text={'Załóż konto'}/>
                <Formik
                    initialValues={{email: "", password: "", passwordConfirm: ""}}
                    validationSchema={validationRegisterSchema}
                >
                    {({values, errors, touched, handleChange, handleBlur}) => (
                        <Form
                            className={'loginForm'}
                            onSubmit={e => handleRegister(e)}
                        >
                            <Container className={'loginFormGroup'}>
                                <FormGroup>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        className={touched.email && errors.email ? "formInput has-error" : null}
                                        type={'email'}
                                        name={'email'}
                                        id={'email'}
                                        required
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={touched.email && errors.email}
                                    />
                                    <Error touched={touched.email} message={errors.email}/>
                                </FormGroup>
                                <FormGroup>
                                    <Form.Label>Hasło</Form.Label>
                                    <Form.Control
                                        className={'formInput has-error'}
                                        type={'password'}
                                        name={'password'}
                                        id={'password'}
                                        required
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={touched.password && errors.password}
                                    />
                                    <Error touched={touched.password} message={errors.password}/>
                                </FormGroup>
                                <FormGroup>
                                    <Form.Label>Powrórz hasło</Form.Label>
                                    <Form.Control
                                        className={'formInput'}
                                        type={'password'}
                                        id={'passwordConfirm'}
                                        required
                                        name={'passwordConfirm'}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.passwordConfirm}
                                        error={touched.passwordConfirm && errors.passwordConfirm}
                                    />
                                    <Error touched={touched.passwordConfirm} message={errors.passwordConfirm}/>
                                </FormGroup>
                            </Container>
                            <Row>
                                <button className={'btnAuth btnOption'}>
                                    <Link to={currentUser ? '/' : '/logowanie'}>Zaloguj się</Link>
                                </button>
                                <button
                                    type={'submit'}
                                    className={'btnAuth btnAction'}
                                >
                                    Załóż konto
                                </button>
                            </Row>
                        </Form>
                    )}
                </Formik>
            </section>
        </>
    );
};

export default withRouter(Register);