import React, {useCallback, useContext} from "react";
import {withRouter, Redirect} from "react-router-dom";
import app from "../config/firebase";
import {AuthContext} from "../config/AuthContext";

import {Container, Form, FormGroup, Row} from "react-bootstrap";
import TitleDecor from "../components/elements/TitleDecor";
import {Link} from "react-router-dom";

import {ErrorMessage, Formik} from "formik";
import * as Yup from "yup";
import Error from "../components/HomeContact/HomeContactError";


const validationLoginSchema = Yup.object().shape({
    email: Yup.string()
        .email("Podany email jest nieprawidołowy!")
        .required("Musisz podać swój email."),
    password: Yup.string()
        .min(6, "Podane hasło jest za krótkie. Musi wawierać min 6 znaków.")
        .required("Podane hasło jest nieprawidłowe!"),
    msg: Yup.string()
        .min(50, "Wiadomość musi mieć conajmniej 50 znaków!")
        .matches(/[^$|\s+]/, "No white spaces")
        .required("Musisz podać swoją wiadomość. Min. 50 znaków."),
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
        },[history]);

    const {currentUser} = useContext(AuthContext);

    if (currentUser) { return <Redirect to={'/'}/> }

    return (
        <section className={'loginSection'}>
            <TitleDecor text={'Zaloguj się'}/>
            <Formik
                initialValues={{email: "", password: "", msg: ""}}
                validationSchema={validationLoginSchema}
                onSubmit={(values, {setSubmitting}) => {
                    console.log(values);
                }}
            >
                {({isSubmitting, isValid, touched, errors}) => (
                    <Form className={'loginForm'} onSubmit={handleLogin}>
                        <Container className={'loginFormGroup'}>
                            <FormGroup>
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    // className={'formInput'}
                                    className={touched.email && errors.email ? "has-error" : null}
                                    type={'email'}
                                    name={'email'}
                                    id={'email'}
                                    required/>
                                <ErrorMessage name={'email'}/>
                                <Error touched={touched.email} message={errors.email}/>
                            </FormGroup>
                            <FormGroup>
                                <Form.Label>Hasło</Form.Label>
                                <Form.Control
                                    className={'formInput'}
                                    type={'password'}
                                    name={'password'}
                                    id={'password'}
                                    required/>
                                <ErrorMessage name={'password'}/>
                            </FormGroup>
                        </Container>
                        <Row>
                            <button className={'btnAuth btnOption'}><Link to={'/rejestracja'}>Załóż konto</Link></button>
                            <button className={'btnAuth btnAction'} type={'submit'}>Zaloguj się</button>
                        </Row>
                    </Form>
                )}
            </Formik>
        </section>
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