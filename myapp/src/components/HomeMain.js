import React from "react";
import TitleDecor from "./TitleDecor";
import Button from "./Button";
import HomeHeader from "./HomeHeader";

const HomeMain = () => {
    return (
        <section className={'homeSection'}>
            <div className={'homeBg'}/>
            <div className={'homeMain'}>
                <HomeHeader/>
                <TitleDecor text={'Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce'} />
                <Button text={'ODDAJ RZECZY'}/>
                <Button text={'ZORGANIZUJ ZBIÓRKĘ'}/>
            </div>
        </section>
    )
}

export default HomeMain;