import React, {useState} from 'react';
import {Form, Row} from "react-bootstrap";
import {Formik} from "formik";
import * as Yup from "yup";
import Error from "../elements/Error";
import axios from "axios";
import LoadigSpinner from "../elements/LoadingSpinner";

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, "Imię musi zawierać min. 2 znaki")
        .max(15, "Imię może zawierać max. 25 znaków")
        .required("Podane imię jest nieprawidłowe!")
        .matches(/^[a-zA-Z]*$/, "Podaj tylko swoje imię"),
    email: Yup.string()
        .email("Podany email jest nieprawidołowy!")
        .max(45, "Max. 45 znaków")
        .required("Musisz podać swój e-mail."),
    message: Yup.string()
        .min(120, "Wiadomość musi mieć conajmniej 120 znaków!")
        .matches(/[^$|\s+]/, "No white spaces")
        .required("Musisz podać swoją wiadomość. Min. 120 znaków."),
});

const HomeContact = () => {
    const [isSuccess, setIsSuccess] = useState(false);

    return (
        <Formik
            initialValues={{name: "", email: "", message: ""}}
            validationSchema={validationSchema}
            onSubmit={(values, {setSubmitting, resetForm}) => {
                setSubmitting(true);

                setTimeout(() => {
                    // alert(JSON.stringify(values, null, 2));
                    axios.post(`https://fer-api.coderslab.pl/v1/portfolio/contact`, values, {
                        headers: {
                            "Content-Type": "application/json",
                        },
                    })
                        .then(setIsSuccess(true))
                        .then(
                            setTimeout(() => {
                                setIsSuccess(false);
                            }, 5000)
                        )
                        .catch(error => {
                            console.log(error);
                        });
                    resetForm();
                    setSubmitting(false);
                }, 500);
            }}
        >
            {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting
              }) => (
                <Form onSubmit={handleSubmit}>
                    {isSuccess && (
                        <Row>
                            <p>Wiadomość została wysłana!</p>
                            <p>Wkrótce się skontaktujemy.</p>
                        </Row>
                    )}
                    {isSubmitting && <LoadigSpinner/>}
                    <Row>
                        {/*{JSON.stringify(values)}*/}
                        <Form.Group controlId="formName">
                            <Form.Label>Wpisz swoje imię</Form.Label>
                            <Form.Control
                                type={'text'}
                                name={'name'}
                                // id={'name'}
                                placeholder="First name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                                className={touched.name && errors.name ? "has-error" : null}
                            />
                            <Error touched={touched.name} message={errors.name}/>
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Wpisz swój email</Form.Label>
                            <Form.Control
                                type={'email'}
                                name={'email'}
                                // id={'email'}
                                placeholder="abc@xyz.pl"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                className={touched.email && errors.email ? "has-error" : null}
                            />
                            <Error touched={touched.email} message={errors.email}/>
                        </Form.Group>
                    </Row>

                    <Form.Group controlId="exampleForm.ControlTextarea1" className={'formTextarea'}>
                        <Form.Label>Wpisz swoją wiadomość</Form.Label>
                        <Form.Control
                            type={'text'}
                            as="textarea"
                            rows="3"
                            name={'message'}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.message}
                            className={touched.message && errors.message ? "has-error" : null}
                        />
                        <Error touched={touched.message} message={errors.message}/>
                    </Form.Group>
                    <button className={'btn btnForm'} variant="primary" type="submit" disabled={isSubmitting}>
                        Wyślij
                    </button>
                </Form>
            )}
        </Formik>
    )
}

export default HomeContact;