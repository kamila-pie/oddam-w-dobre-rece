import React from "react";
import TitleDecor from "./TitleDecor";
import Button from "./Button";
import {Col} from "react-bootstrap";
import HomeHeader from "./HomeHeader";

const HomeMain = () => {
    return (
        <section className={'homeSection homeContainer'}>
            <HomeHeader/>
            <Col sm={6} className={'homeMain'}>
                <TitleDecor text={'Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce'}/>
                <Button text={'ODDAJ RZECZY'}/>
                <Button text={'ZORGANIZUJ ZBIÓRKĘ'}/>
            </Col>
        </section>
    )
}

export default HomeMain;