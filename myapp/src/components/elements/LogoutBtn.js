import React from 'react';
import {NavLink} from "react-router-dom";
import app from "../../config/firebase";

const LogoutBtn = () => {
    // const {currentUser} = useContext(AuthContext);
    //
    // if (!currentUser) { return <Redirect to={'/wylogowano'}/> }
    return (
        <>
            <button onClick={() => app.auth().signOut()}>
                <NavLink to={'/wylogowano'}> Logout </NavLink>
            </button>
        </>
    )
}

export default LogoutBtn;