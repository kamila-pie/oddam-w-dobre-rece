import React, {useState} from 'react';
import TitleDecor from "../elements/TitleDecor";
import HowWeBtn from "./WhoWeBtn";
import {Row} from "react-bootstrap";
import WhoWeHelpFundations from "./WhoWeHelpFundations";
import Fundations from "./Fundations";

const HomeWhoWeHelp = () => {
    let [counter, setCounter] = useState(1);

    function returnOrgs(number) {
        switch (number) {
            case 1:
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
                <HowWeBtn text={'Fundacjom'}
                          setCounter={set}
                          id={1}/>
                <HowWeBtn text={'Organizacjom pozarządowym'}
                          setCounter={set}
                          id={2}/>
                <HowWeBtn text={'Lokalnym zbiórkom'}/>
            </Row>
            {/*<WhoWeHelpFundations/>*/}
            {returnOrgs(counter)}
        </section>
    )
}

export default HomeWhoWeHelp;