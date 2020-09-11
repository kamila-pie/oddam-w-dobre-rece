import React from 'react';
import {Col, Row, Carousel} from "react-bootstrap";

const HomeThreeColumns = () => {
    return (
        <section className={'homeThreeCol'} id={'sectionAllAbout'}>
            {/*<Carousel className={'homeThreeColMedia'}>*/}
            {/*    <Carousel.Item>*/}
            {/*        <Carousel.Caption>*/}
            {/*            <h2>10</h2>*/}
            {/*            <h3>ODDANYCH WORKÓW</h3>*/}
            {/*            <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra*/}
            {/*                elementuma. Aliquam erat volutpat.</p>*/}
            {/*        </Carousel.Caption>*/}
            {/*    </Carousel.Item>*/}
            {/*    <Carousel.Item>*/}
            {/*        <Carousel.Caption>*/}
            {/*            <h2>5</h2>*/}
            {/*            <h3>WSPARTYCH ORGANIZACJI</h3>*/}
            {/*            <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra*/}
            {/*                elementuma. Aliquam erat volutpat.</p>*/}
            {/*        </Carousel.Caption>*/}
            {/*    </Carousel.Item>*/}
            {/*    <Carousel.Item>*/}
            {/*        <Carousel.Caption>*/}
            {/*            <h2>7</h2>*/}
            {/*            <h3>ZORGANIZOWANY ZBIÓREK</h3>*/}
            {/*            <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra*/}
            {/*                elementuma. Aliquam erat volutpat.</p>*/}
            {/*        </Carousel.Caption>*/}
            {/*    </Carousel.Item>*/}
            {/*</Carousel>*/}
            <Row className={'homeThreeColLaptop'}>
                <Col>
                    <h2>10</h2>
                    <h3>ODDANYCH WORKÓW</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                </Col>
                <Col>
                    <h2>5</h2>
                    <h3>WSPARTYCH ORGANIZACJI</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                </Col>
                <Col>
                    <h2>7</h2>
                    <h3>ZORGANIZOWANY ZBIÓREK</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                </Col>
            </Row>
        </section>
    );
}

export default HomeThreeColumns;
