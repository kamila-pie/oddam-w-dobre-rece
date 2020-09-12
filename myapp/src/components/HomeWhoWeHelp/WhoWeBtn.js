import React from 'react';
import {Button} from "react-bootstrap";

const HowWeBtn = (props) => {
    console.log(props);
    return (
        <Button variant="outline-dark"
            className={'howWeBtn'}
            onClick={() => props.setCounter(props.id)}>
            {props.text}
        </Button>
    )
}

export default HowWeBtn;