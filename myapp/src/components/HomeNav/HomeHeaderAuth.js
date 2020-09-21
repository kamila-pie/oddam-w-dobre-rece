import React, {useContext} from 'react';
import HomeLogin from "./HomeLogin";
import HomeRegister from "./HomeRegister";
import {Row} from "react-bootstrap";
import LogoutBtn from "../elements/LogoutBtn";
import {AuthContext} from "../../config/AuthContext";
import FormActionBtn from "../elements/FormActionBtn";

const HomeHeaderAuth = () => {
    const {currentUser} = useContext(AuthContext);
    return (
        <Row className={'navLinkContainer'}>
            <ul className={'navList navListAuth'}>
                {currentUser ? (
                    <>
                        <FormActionBtn/>
                        <LogoutBtn/>
                    </>
                    ) : null
                    // // <>
                    //     null
                    //     {/*<HomeLogin/>*/}
                    //     {/*<HomeRegister/>*/}
                    // // </>
                }
            </ul>
        </Row>
    )
}

export default HomeHeaderAuth;