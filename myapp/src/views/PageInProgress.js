import React from "react";
import {Link} from "react-router-dom";
import TitleDecor from "../components/elements/TitleDecor";
import HomeHeaderNavMain from "../components/HomeNav/HomeHeaderNavMain";
import HomeContact from "../components/HomeContact/HomeContact";
import {Nav} from "react-bootstrap";
import homeLogNavImg from "../assets/home.png";

export const PageInProgress = () => {
    return (
        <>
            <Nav className={'homeLogNav'}>
                <Link to={'/'}>
                    <img className={'homeLogNavImg'} src={homeLogNavImg} alt={'home'}/>
                </Link>
            </Nav>
            <section className={'pageInProgress'}>
                <TitleDecor text={'Strona w budowie!'}/>
                <p>Prosimy o konktakt przez poniższy formularz:</p>
                <HomeContact/>
            </section>
        </>
    );
};

export default PageInProgress;