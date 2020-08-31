import React from 'react';
import {Col, Row} from "react-bootstrap";

const Fundations = (props) => {
    return (
        <Row className={'HelpDetailsRow'}>
            <Col className={'HelpDetails'}>
                <h2>Fundacja “Dbam o Zdrowie”</h2>
                <p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
            </Col>
            <Col className={'HelpThings'}>
                <p>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
            </Col>
        </Row>
    )
}

export default Fundations;

