import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import data from "../../data/data.json";

const Local = () => {
    return (
        <Container className={'helpContainer'}>
            <Row>
                {
                    data.organisations.local.map((el, index) => {
                        return <p key={index}>{el.title}</p>
                    })
                }
            </Row>
            {
                data.organisations.local.map((el, index) => {
                    return (
                        <Row className={'HelpDetailsRow'}>
                            <Col className={'HelpDetails'}>
                                <h2 key={index}>{el.name}</h2>
                                <p key={index}>{el.desc}</p>
                            </Col>
                            <Col className={'HelpThings'}>
                                <p key={index}>{el.needs}</p>
                            </Col>
                        </Row>
                    )
                })
            }
        </Container>
    )
}

export default Local;