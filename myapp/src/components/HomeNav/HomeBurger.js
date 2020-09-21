import React, {useContext, useState} from "react";
import HomeHeaderNav from "./HomeHeaderNav";
import {AuthContext} from "../../config/AuthContext";
import LogoutBtn from "../elements/LogoutBtn";
import {Link} from "react-router-dom";
import RegisterBtn from "../elements/RegisterBtn";
import LoginBtn from "../elements/LoginBtn";

const HomeBurger = () => {
    const [open, setOpen] = useState(false);
    const {currentUser} = useContext(AuthContext);

    const toggleClass = () => {
        setOpen(!open);
    };

    const handleOnClick = () => {
        setOpen(false);
    };

    return (
        <>
            <div className={'burgerWrapper'}>
                <div className={!open ? "burger" : "burger burgerOpen"} onClick={toggleClass}>
                    <div style={{
                        backgroundColor: `${(open) ? '#ccc' : '#333'}`,
                        transform: `${(open) ? 'rotate(45deg)' : 'rotate(0)'}`
                    }}/>
                    <div style={{
                        backgroundColor: `${(open) ? '#ccc' : '#333'}`,
                        transform: `${(open) ? 'translateX(-100%)' : 'translateX(0)'}`,
                        opacity: `${(open) ? '0' : '1'}`
                    }}/>
                    <div style={{
                        backgroundColor: `${(open) ? '#ccc' : '#333'}`,
                        transform: `${(open) ? 'rotate(-45deg)' : 'rotate(0)'}`
                    }}/>
                </div>
                {currentUser ? (
                    <div className={'userHello'}>
                        Cześć, {currentUser.email}!
                    </div>
                ) : null}
                {currentUser ? null : (
                    <>
                        <div className={'navEl logAction'}>
                            <LoginBtn/>
                            <RegisterBtn/>
                        </div>
                        {/*<div className={'navEl'}>*/}
                        {/*    */}
                        {/*</div>*/}
                    </>
                )}
            </div>
            <HomeHeaderNav open={open} onClick={handleOnClick}/>
        </>
    )
}

export default HomeBurger;