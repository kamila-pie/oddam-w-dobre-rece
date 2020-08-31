import React from 'react';
import decor from './../assets/Decoration.svg';
import signature from './../assets/Signature.svg';
import people from './../assets/People.jpg';
import {Col, Row} from "react-bootstrap";

const AboutUs = () => {
    return (
        <section className={'aboutUsSection'}>
            <Row>
                <Col sm={7}>
                    <div className={'aboutWrapper'}>
                        <h1>O nas</h1>
                        <img className={'decor'} src={decor} alt={'decor'}/>
                        <p className={'aboutPar'}> Nori grape silver beet broccoli kombu beet greens fava bean potato
                            quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens
                            parsnip.</p>
                        <img className={'signature'} src={signature} alt={'signature'}/>
                    </div>
                </Col>
                <Col sm={5}>
                    <img src={people} className={'peopleImg'} alt={'people'}/>
                </Col>
            </Row>
        </section>
    )
}

export default AboutUs;