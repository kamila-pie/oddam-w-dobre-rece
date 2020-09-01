import React from 'react';
import TitleDecor from "../elements/TitleDecor";
import HowWeBtn from "./WhoWeBtn";
import {Row} from "react-bootstrap";
import WhoWeHelpFundations from "./WhoWeHelpFundations";

const HomeWhoWeHelp = () => {
    return (
        <section className={'sectionHelp'}>
            <TitleDecor text={'Komu pomagamy?'}/>
            <Row className={'sectionHelpBtns'}>
                <HowWeBtn text={'Fundacjom'}/>
                <HowWeBtn text={'Organizacjom pozarządowym'}/>
                <HowWeBtn text={'Lokalnym zbiórkom'}/>
            </Row>
            <WhoWeHelpFundations/>
        </section>
    )
}

export default HomeWhoWeHelp;