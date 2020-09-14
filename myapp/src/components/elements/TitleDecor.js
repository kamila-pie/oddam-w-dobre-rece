import React from "react";
import decor from "../../assets/Decoration.svg";
import {Col, Row} from "react-bootstrap";

const TitleDecor = (props) => {
    return (
        <Row>
            <Col className={'titleWrapper'}>
                <h1>{props.text}</h1>
                <img className={'decor'} src={decor} alt={'decor'}/>
            </Col>
        </Row>
    )
}

export default TitleDecor;