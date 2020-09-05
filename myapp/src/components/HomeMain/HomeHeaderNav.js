import React from 'react';
import HomeLogin from "./HomeLogin";
import HomeRegister from "./HomeRegister";
import {Row} from "react-bootstrap";
import {Link as LinkScroll} from "react-scroll";

const HomeHeaderNav = () => {
    return (
        <header className={'topMenu'}>
            <Row className={'navLinkContainer'}>
                <ul className={'navList navListAuth'}>
                    <HomeLogin/>
                    <HomeRegister/>
                </ul>
            </Row>
            <Row className={'navLinkContainer'}>
                <ul className={'navList'}>
                    <li className={'navEl'}>
                        <LinkScroll
                            activeClass="active"
                            to="main"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >Start</LinkScroll>
                    </li>
                    <li className={'navEl'}>
                        <LinkScroll
                            activeClass="active"
                            to="sectionAllAbout"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >O co chodzi?</LinkScroll>
                    </li>
                    <li className={'navEl'}>
                        <LinkScroll
                            activeClass="active"
                            to="sectionAboutUs"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >O nas</LinkScroll>
                    </li>
                    <li className={'navEl'}>
                        <LinkScroll
                            activeClass="active"
                            to="sectionHelp"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >Fundacja i organizacje</LinkScroll>
                    </li>
                    <li className={'navEl'}>
                        <LinkScroll
                            activeClass="active"
                            to="sectionContact"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >Kontakt</LinkScroll>
                    </li>
                </ul>
            </Row>
        </header>
    )
}

export default HomeHeaderNav;