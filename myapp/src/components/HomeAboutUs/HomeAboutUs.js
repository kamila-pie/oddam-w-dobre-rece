import React from 'react';
import signature from '../../assets/Signature.svg';
import people from  '../../assets/People.jpg'
import {Col, Row} from "react-bootstrap";
import TitleDecor from "../elements/TitleDecor";

const HomeAboutUs = () => {
    return (
        <section className={'aboutUsSection'} id={'sectionAboutUs'}>
            <Row>
                <Col >
                    <div className={'aboutWrapper'}>
                        <TitleDecor text={'O nas'}/>
                        <p className={'aboutPar'}> Nori grape silver beet broccoli kombu beet greens fava bean potato
                            quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens
                            parsnip.</p>
                        <img className={'signature'} src={signature} alt={'signature'}/>
                    </div>
                </Col>
                <Col className={'peopleImg'} >
                    {/*<img src={people}  alt={'people'}/>*/}
                </Col>
            </Row>
        </section>
    )
}

export default HomeAboutUs;