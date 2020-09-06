import React from "react";
import {Button, Spinner} from "react-bootstrap";

const LoadigSpinner = () => {
    return (<>
        <Button variant="primary" disabled>
            <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
            />
            <span className="sr-only">Loading...</span>
        </Button>{' '}
        <Button variant="primary" disabled>
            <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
            />
            Loading...
        </Button>
    </>)
}

export default LoadigSpinner;