import React from 'react';
import decor from './../assets/Decoration.svg';
import signature from './../assets/Signature.svg';
import people from './../assets/People.jpg';
import {Col, Row} from "react-bootstrap";
import TitleDecor from "./TitleDecor";

const HomeAboutUs = () => {
    return (
        <section className={'aboutUsSection'}>
            <Row>
                <Col sm={7}>
                    <div className={'aboutWrapper'}>
                        <TitleDecor text={'O nas'}/>
                        <p className={'aboutPar'}> Nori grape silver beet broccoli kombu beet greens fava bean potato
                            quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens
                            parsnip.</p>
                        <img className={'signature'} src={signature} alt={'signature'}/>
                    </div>
                </Col>
                <Col className={'peopleImg'} sm={5}>
                    {/*<img src={people}  alt={'people'}/>*/}
                </Col>
            </Row>
        </section>
    )
}

export default HomeAboutUs;