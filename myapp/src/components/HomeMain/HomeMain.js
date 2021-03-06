import React from "react";
import TitleDecor from "../elements/TitleDecor";
import Button from "../elements/Button";
import HomeHeaderNavMain from "../HomeNav/HomeHeaderNavMain";
import arrowIcon from "../../assets/Icon-Arrow-Down.svg";
import {animateScroll as scroll} from "react-scroll";
import {Link} from "react-router-dom";

const HomeMain = () => {
    return (
        <section className={'homeSection'} id={'main'}>
            <div className={'homeMainWrapper'}>
                <HomeHeaderNavMain/>
                <div className={'homeMain'}>
                    <TitleDecor text={'Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce'}/>
                    <div className={'btnWrapper'}>
                        <Link to={'/strona_w_budowie'}>
                            <Button text={'ODDAJ RZECZY'}/>
                        </Link>
                        <Link to={'/strona_w_budowie'}>
                            <Button text={'ZORGANIZUJ ZBIÓRKĘ'}/>
                        </Link>
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