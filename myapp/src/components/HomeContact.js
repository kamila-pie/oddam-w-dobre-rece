import React from 'react';
import {Form, Row} from "react-bootstrap";

const HomeContact = () => {
    return (
        <Form>
            <Row>
                <Form.Group controlId="formName">
                    <Form.Label>Wpisz swoje imię</Form.Label>
                    <Form.Control placeholder="First name" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Wpisz swój email</Form.Label>
                    <Form.Control type="email" placeholder="abc@xyz.pl" />
                </Form.Group>
            </Row>


            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Wpisz swoją wiadomość</Form.Label>
                <Form.Control as="textarea" rows="3" />
            </Form.Group>
            <button className={'btn'} variant="primary" type="submit">
                Wyślij
            </button>
        </Form>
    )
}

export default HomeContact;
