import React from "react";

const Error = ({ touched, message }) => {
    if (!touched) {
        return <div className={'formMsg invalid'}>&nbsp;</div>
    }
    if (message) {
        return <div className={'formMsg invalid'}>{message}</div>
    }
    return <div className={'formMsg valid'}>Doskonale!</div>;
};

export default Error;