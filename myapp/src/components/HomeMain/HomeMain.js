import React from "react";
import TitleDecor from "../elements/TitleDecor";
import Button from "../elements/Button";
import HomeHeaderNav from "./HomeHeaderNav";

const HomeMain = () => {
    return (
        <section className={'homeSection'} id={'main'}>
            <div className={'homeBg'}/>
            <div className={'homeMain'}>
                <HomeHeaderNav/>
                <TitleDecor text={'Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce'} />
                <Button text={'ODDAJ RZECZY'}/>
                <Button text={'ZORGANIZUJ ZBIÓRKĘ'}/>
            </div>
        </section>
    )
}

export default HomeMain;