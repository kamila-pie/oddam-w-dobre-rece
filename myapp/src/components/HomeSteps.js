import React from 'react';
import {Col, Row} from "react-bootstrap";
import icon1 from "../assets/Icon-1.svg";
import icon2 from "../assets/Icon-2.svg";
import icon3 from "../assets/Icon-3.svg";
import icon4 from "../assets/Icon-4.svg";
import TitleDecor from "./TitleDecor";
import Button from "./Button";

const HomeSteps = () => {
    return (
        <section className={'stepsSection'}>
            <TitleDecor text={'Wystarczą 4 proste kroki'}/>
            <Row className={'stepsRowIcons'}>
                <Col>
                    <img src={icon1} alt={'shirt'}/>
                    <h3>Wybierz rzeczy</h3>
                    <p>ubrania, zabawki, sprzęt i inne</p>
                </Col>
                <Col>
                    <img src={icon2} alt={'bag'}/>
                    <h3>Spakuj je</h3>
                    <p>skorzystaj z worków na śmieci</p>
                </Col>
                <Col>
                    <img src={icon3} alt={'search'}/>
                    <h3>Zdecyduj komu chcesz pomóc</h3>
                    <p>wybierz zaufane miejsce</p>
                </Col>
                <Col>
                    <img src={icon4} alt={'order'}/>
                    <h3>Zamów kuriera</h3>
                    <p>kurier przyjedzie w dogodnym terminie</p>
                </Col>
            </Row>
            <Button text={'ODDAJ RZECZY'}/>
        </section>
    )
}

export default HomeSteps;