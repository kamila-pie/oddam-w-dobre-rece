import React from "react";
import TitleDecor from "../elements/TitleDecor";
import Button from "../elements/Button";
import HomeHeaderNav from "./HomeHeaderNav";
import arrowIcon from "../../assets/Icon-Arrow-Down.svg";
import {animateScroll as scroll} from "react-scroll";

const HomeMain = () => {
    return (
        <section className={'homeSection'} id={'main'}>
            <div className={'homeMainWrapper'}>
                <div className={'homeBg'}/>
                <div className={'homeMain'}>
                    <HomeHeaderNav/>
                    <TitleDecor text={'Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce'} />
                    <div className={'btnWrapper'}>
                        <Button text={'ODDAJ RZECZY'}/>
                        <Button text={'ZORGANIZUJ ZBIÓRKĘ'}/>
                    </div>
                </div>
            </div>
            <div className={'arrowIconWrapper'} onClick={() => scroll.scrollToBottom()}>
                <img className={'arrowIcon'} src={arrowIcon} alt={'arrow'}/>
            </div>
        </section>
    )
}

export default HomeMain;