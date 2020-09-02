import React from 'react';

const HowWeBtn = (props) => {
    console.log(props);
    return (
        <button className={'howWeBtn'} onClick={() => props.setCounter(props.id)} >{props.text}</button>
    )
}

export default HowWeBtn;