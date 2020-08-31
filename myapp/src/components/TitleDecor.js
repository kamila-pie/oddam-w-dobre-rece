import React from "react";
import decor from "../assets/Decoration.svg";

const TitleDecor = (props) => {
    return (
        <div className={'titleWrapper'}>
            <h1>{props.text}</h1>
            <img className={'decor'} src={decor} alt={'decor'}/>
        </div>
    )
}

export default TitleDecor;