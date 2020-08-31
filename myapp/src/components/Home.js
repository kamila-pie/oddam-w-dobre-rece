import React from 'react';
import HomeHeader from "./HomeHeader";
import {Row, Col, Container} from "react-bootstrap";
import HomeThreeColumns from "./HomeThreeColumns";
import AboutUs from "./AboutUs";
import HomeSteps from "./HomeSteps";
import decor from "../assets/Decoration.svg";
import HomeWhoWeHelp from "./HomeWhoWeHelp";


const Home = () => {
    return (
        <>
            <section className={'homeSection homeContainer'}>

                    <HomeHeader/>
                    <Row className={'homeMainRow'}>
                        <Col sm={6} className={'homeMain'}>
                            <h1>Zacznij pomagać! <br/> Oddaj niechciane rzeczy w zaufane ręce </h1>
                            <Row className={'decorMain'}>
                                <img className={'decor'} src={decor} alt={'decor'}/>
                            </Row>
                            <button className={'btn'}>ODDAJ RZECZY</button>
                            <button className={'btn'}>ZORGANIZUJ ZBIÓRKĘ</button>
                        </Col>
                    </Row>

            </section>
            <HomeThreeColumns/>
            <HomeSteps/>
            <AboutUs/>
            <HomeWhoWeHelp/>
        </>

    )
}

export default Home;
