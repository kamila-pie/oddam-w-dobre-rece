import React from 'react';
import decor from "../assets/Decoration.svg";

const HomeWhoWeHelp = () => {
    return (
        <section className={'sectionHelp'}>
            <h1>Komu pomagamy?</h1>
            <img className={'decor'} src={decor} alt={'decor'}/>
        </section>
    )
}

export default HomeWhoWeHelp;