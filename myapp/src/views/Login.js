import React, {useContext, useCallback} from "react";
import {withRouter, Redirect} from "react-router-dom";
import {AuthContext} from "../config/AuthContext";
import {Link} from "react-router-dom";
import {Container, Form, FormGroup, Nav, Row} from "react-bootstrap";
import TitleDecor from "../components/elements/TitleDecor";
import {Formik} from "formik";
import * as Yup from "yup";
import Error from "../components/elements/Error";
import homeLogNavImg from "../assets/home.png";

const validationLoginSchema = Yup.object().shape({
    email: Yup.string()
        .email("Podany email jest nieprawidołowy!")
        .required("Musisz podać swój email."),
    password: Yup.string()
        .min(6, "Podane hasło jest za krótkie. Musi wawierać min 6 znaków.")
        .required("Podane hasło jest nieprawidłowe!"),
});

const Login = ({history}) => {
    const handleLogin = useCallback(
        async e => {
            e.preventDefault();
            const {email, password} = e.target.elements;
            try {
                await login(email.value, password.value);
                console.log('jesteś zalogowany');
                history.push('/');
            } catch (error) {
                console.log("Błędny email lub hasło");
                alert(error);
            }
        }, [history]);

    const {currentUser, login} = useContext(AuthContext);
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
            <section className={'loginSection'}>
                <TitleDecor text={'Zaloguj się'}/>
                <Formik
                    initialValues={{email: "", password: ""}}
                    validationSchema={validationLoginSchema}
                >
                    {({values, errors, touched, handleChange, handleBlur}) => (
                        <Form className={'loginForm'}
                              onSubmit={e => handleLogin(e)}
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
                            </Container>
                            <Row>
                                <button className={'btnAuth btnOption'}>
                                    <Link to={'/rejestracja'}>Załóż konto</Link>
                                </button>
                                <button
                                    className={'btnAuth btnAction'}
                                    type={'submit'}
                                >
                                    {/*<Link to={currentUser ? '/' : '/logowanie'}>*/}
                                        Zaloguj się
                                    {/*</Link>*/}
                                </button>
                            </Row>
                        </Form>
                    )}
                </Formik>
            </section>
        </>
    );
};

export default withRouter(Login);