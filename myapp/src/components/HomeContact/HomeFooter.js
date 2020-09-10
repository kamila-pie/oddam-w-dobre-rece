import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TitleDecor from "../elements/TitleDecor";
import HomeContact from "./HomeContact";
import {animateScroll as scroll} from "react-scroll";
import arrowIcon from "../../assets/Icon-Arrow-Up.svg";
import instagram from "../../assets/Instagram.svg";
import fb from "../../assets/Facebook.svg";

const Footer = () => {
    return (
       <footer className={'footerContainer'} id={'sectionContact'}>
           <div className={'footerWrapper'}>
               <div className={'arrowIconWrapperToTop'} onClick={() => scroll.scrollToTop()}>
                   <img className={'arrowIcon'} src={arrowIcon} alt={'arrow'}/>
               </div>
              <div className={'footerContactForm'}>
                  <TitleDecor text={'Skontaktuj się z nami'}/>
                  <HomeContact/>
                  <Row className={'footer'}>
                      <p>Copyright by Coders Lab</p>
                      <Col className={'socialIcons'}>
                          <img className={'instagram'} src={instagram} alt={'instagram'}/>
                          <img className={'fb'} src={fb} alt={'facebook'}/>
                      </Col>
                  </Row>
              </div>
           </div>
       </footer>
    )
}

export default Footer;
