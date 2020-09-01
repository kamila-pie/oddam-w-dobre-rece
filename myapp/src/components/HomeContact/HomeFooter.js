import React from 'react';
import {Col, Row} from "react-bootstrap";
import instagram from "../../assets/Instagram.svg";
import fb from "../../assets/Facebook.svg";
import TitleDecor from "../elements/TitleDecor";
import HomeContact from "./HomeContact";

const Footer = () => {
    return (
       <footer className={'footerContainer'}>
           <TitleDecor text={'Skontaktuj się z nami'}/>
           <HomeContact/>
           <Row className={'footer'}>
               <p>Copyright by Coders Lab</p>
               <Col className={'socialIcons'}>
                   <img className={'instagram'} src={instagram} alt={'instagram'}/>
                   <img className={'fb'} src={fb} alt={'facebook'}/>
               </Col>
           </Row>
       </footer>
    )
}

export default Footer;
