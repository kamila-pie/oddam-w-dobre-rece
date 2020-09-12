import React, {useState} from 'react';
import TitleDecor from "../elements/TitleDecor";
import HowWeBtn from "./WhoWeBtn";
import {Row} from "react-bootstrap";
import Fundations from "./Fundations";
import Organizations from "./Organizations";
import Local from "./Local";
import {Link as LinkScroll} from "react-scroll";

const HomeWhoWeHelp = () => {
    let [counter, setCounter] = useState(1);

    function returnOrgs(number) {
        switch (number) {
            case 1:
                return <Fundations/>;
            case 2:
                return <Organizations/>;
            case 3:
                return <Local/>;
            default:
                return <Fundations/>;
        }
    }

    function set(number) {
        setCounter(number);
    }

    return (
        <section className={'sectionHelp'} id={'sectionHelp'}>
            <TitleDecor text={'Komu pomagamy?'}/>
            <Row className={'sectionHelpBtns'}>
                <LinkScroll
                    activeClass="active"
                    to="fundations"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>
                    <HowWeBtn text={'Fundacjom'}
                              setCounter={set}
                              id={1}/>
                </LinkScroll>
                <LinkScroll
                    activeClass="active"
                    to="organization"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>
                    <HowWeBtn text={'Organizacjom pozarządowym'}
                              setCounter={set}
                              id={2}/>
                </LinkScroll>
                <LinkScroll
                    activeClass="active"
                    to="local"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>
                    <HowWeBtn text={'Lokalnym zbiórkom'}
                              setCounter={set}
                              id={3}/>
                </LinkScroll>
            </Row>
            {returnOrgs(counter)}
        </section>
    )
}

export default HomeWhoWeHelp;