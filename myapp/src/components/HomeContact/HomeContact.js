import React, {useState} from 'react';
import {Form, Row} from "react-bootstrap";

import {Formik} from "formik";
import * as Yup from "yup";
import Error from "./HomeContactError";


const validationSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, "Imię musi zawierać min. 2 znaki")
        .max(15, "Imię może zawierać max. 25 znaków")
        .required("Musisz podać swoję imię")
        .matches(/^[a-zA-Z]*$/, "Podaj tylko swoje imię"),
    email: Yup.string()
        .email("Podaj prawidłowy adres e-mail.")
        .max(45, "Max. 45 znaków")
        .required("Musisz podać swój e-mail."),
    msg: Yup.string()
        .min(50, "Min. 50 znaków.")
        .matches(/[^$|\s+]/, "No white spaces")
        .required("Musisz podać swoją wiadomość. Min. 120 znaków."),
});

const HomeContact = () => {

    // const [isSuccess, setIsSuccess] = useState(false);

    return (
        <Formik
            initialValues={{name: "", email: "", msg: ""}}
            validationSchema={validationSchema}
            onSubmit={(values, {setSubmitting, resetForm}) => {
                setSubmitting(true);

                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
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

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Wpisz swoją wiadomość</Form.Label>
                        <Form.Control
                            type={'text'}
                            as="textarea"
                            rows="3"
                            name={'msg'}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.msg}
                            className={touched.msg && errors.msg ? "has-error" : null}
                        />
                        <Error touched={touched.msg} message={errors.msg}/>
                    </Form.Group>
                    <button className={'btn'} variant="primary" type="submit" disabled={isSubmitting}>
                        Wyślij
                    </button>
                </Form>
            )}
        </Formik>
    )
}

export default HomeContact;
