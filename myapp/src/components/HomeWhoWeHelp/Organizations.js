import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import data from "../../data/data";

const Organizations = () => {
    return (
        <Container className={'helpContainer'}>
            <Row>
                {
                    data.organisations.organiz.map((el, index) => {
                        return <p key={index}>{el.title}</p>
                    })
                }
            </Row>
            {
                data.organisations.organiz.map((el, index) => {
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

export default Organizations;