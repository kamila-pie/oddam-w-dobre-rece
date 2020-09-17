import React, {useContext} from 'react';
import {Nav} from "react-bootstrap";
import {Link as LinkScroll} from "react-scroll";
import {Link} from "react-router-dom";
import {AuthContext} from "../../config/AuthContext";
import LogoutBtn from "../elements/LogoutBtn";

const HomeHeaderNav = ({toggleClass, open, setOpen, handleOnClick}) => {
    const {currentUser} = useContext(AuthContext);
    return (
        <Nav className={'navLinkContainer'}>
            <ul
                className={!open ? "navList" : "navList navList--open"}
                onClick={toggleClass}
            >
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
                        onClick={handleOnClick}
                        activeClass="active"
                        to="sectionAllAbout"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                    >O co chodzi?</LinkScroll>
                </li>
                <li className={'navEl'}>
                    <LinkScroll
                        activeClass="active"
                        to="sectionAboutUs"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                    >O nas</LinkScroll>
                </li>
                <li className={'navEl'}>
                    <LinkScroll
                        activeClass="active"
                        to="sectionHelp"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                    >Fundacja i organizacje</LinkScroll>
                </li>
                <li className={'navEl'}>
                    <LinkScroll
                        activeClass="active"
                        to="sectionContact"
                        spy={true}
                        smooth={true}
                        offset={-30}
                        duration={500}
                    >Kontakt</LinkScroll>
                </li>

            </ul>

        </Nav>
    )
}

export default HomeHeaderNav;