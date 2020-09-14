import React, {useContext, useCallback} from "react";
import {withRouter, Redirect} from "react-router-dom";
import {AuthContext} from "../config/AuthContext";
import {Link} from "react-router-dom";
import {Container, Form, FormGroup, Nav, Row} from "react-bootstrap";
import TitleDecor from "../components/elements/TitleDecor";
import {Formik} from "formik";
import * as Yup from "yup";
import Error from "../components/elements/Error";
import app from "../config/firebase";
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
                await app
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
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
                    // onSubmit={handleLogin}
                    // onSubmit={async values => {
                    //     await new Promise(r => setTimeout(r, 500));
                    //     alert(JSON.stringify(values, null, 2));
                    // }}
                >
                    {({values, errors, touched, handleChange, handleBlur}) => (
                        <Form className={'loginForm'}
                              onSubmit={handleLogin}
                        >
                            <Container className={'loginFormGroup'}>
                                <FormGroup>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        // className={'formInput'}
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
                                        // className={touched.email && errors.email ? "formInput has-error" : null}
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
                                    onClick={login}
                                >
                                    <Link to={currentUser ? '/' : '/logowanie'}>Zaloguj się</Link>
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

// import React, {useCallback, useContext, useState} from "react";
// import {withRouter, Redirect} from "react-router-dom";
// import app from "../config/firebase";
// import {AuthContext} from "../config/AuthContext";
//
// import {Container, Form, FormGroup, Row} from "react-bootstrap";
// import TitleDecor from "../components/elements/TitleDecor";
// import {Link} from "react-router-dom";
//
// import {Formik} from "formik";
// import * as Yup from "yup";
// import LoadigSpinner from "../elements/LoadingSpinner";
//
// const validationLoginSchema = Yup.object().shape({
//     email: Yup.string()
//         .email("Podany email jest nieprawidołowy!")
//         .required("Musisz podać swój email."),
//     password: Yup.string()
//         .min(6, "Podane hasło jest za krótkie. Musi wawierać min 6 znaków.")
//         .required("Podane hasło jest nieprawidłowe!"),
//     msg: Yup.string()
//         .min(50, "Wiadomość musi mieć conajmniej 50 znaków!")
//         .matches(/[^$|\s+]/, "No white spaces")
//         .required("Musisz podać swoją wiadomość. Min. 50 znaków."),
// });

// Reference:
// const Login = ({history}) => {
//     const [isSuccess, setIsSuccess] = useState(false);
//
//     const handleLogin = useCallback(
//         async e => {
//             e.preventDefault();
//             const {email, password} = e.target.elements;
//             try {
//                 await app
//                     .auth()
//                     .signInWithEmailAndPassword(email.value, password.value);
//                 console.log('jesteś zalogowany');
//                 history.push('/');
//             } catch (error) {
//                 console.log("Błędny email lub hasło");
//                 alert(error);
//             }
//         },[history]);
//
//     const {currentUser} = useContext(AuthContext);
//
//     if (currentUser) { return <Redirect to={'/'}/> }
//
//     return (
//         <section className={'loginSection'}>
//             <TitleDecor text={'Zaloguj się'}/>
//             <Formik
//                 initialValues={{email: "", password: "", msg: ""}}
//                 validationSchema={validationLoginSchema}
//
//             >
//                 <Form className={'loginForm'} onSubmit={handleLogin}>
//                     <Container className={'loginFormGroup'}>
//                         <FormGroup>
//                             <Form.Label>Email</Form.Label>
//                             <Form.Control
//                                 className={'formInput'}
//                                 type={'email'}
//                                 name={'email'}
//                                 id={'email'}
//                                 required/>
//                         </FormGroup>
//                         <FormGroup>
//                             <Form.Label>Hasło</Form.Label>
//                             <Form.Control
//                                 className={'formInput'}
//                                 type={'password'}
//                                 name={'password'}
//                                 id={'password'}
//                                 required/>
//                         </FormGroup>
//                     </Container>
//                     <Row>
//                         <button className={'btnAuth btnOption'}><Link to={'/rejestracja'}>Załóż konto</Link></button>
//                         <button className={'btnAuth btnAction'} type={'submit'}>Zaloguj się</button>
//                     </Row>
//                 </Form>
//             </Formik>
//
//         </section>
//     );
// };
//
// export default withRouter(Login);