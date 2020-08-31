import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Fundations from "./Fundations";

const WhoWeHelpFundations = (props) => {
    return (
        <Container className={'helpContainer'}>
            <Row>
                <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
            </Row>
            <Fundations/>
            <Fundations/>
            <Fundations/>
        </Container>
    )
}

export default WhoWeHelpFundations;

// <Container className={'helpContainer'}>
//             <Row>
//                 <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
//             </Row>
//             <Row className={'HelpDetailsRow'}>
//                 <Col className={'HelpDetails'}>
//                     <h2>Fundacja “Dbam o Zdrowie”</h2>
//                     <p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
//                 </Col>
//                 <Col className={'HelpThings'}>
//                     <p>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
//                 </Col>
//             </Row>
//         </Container>