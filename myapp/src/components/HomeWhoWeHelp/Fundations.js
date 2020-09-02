import React from 'react';
import {Col, Row} from "react-bootstrap";
import data from "../../data/data";

const Fundations = () => {

    return (
        <Row className={'HelpDetailsRow'}>
            <Col>
                <p>{data.desc}</p>
                <ul>
                    {
                        data.organisations.map((el, index) => {
                            return <li key={index}>{el.name}</li>
                        })
                    }
                </ul>
            </Col>
        </Row>
    )
};

export default Fundations;

