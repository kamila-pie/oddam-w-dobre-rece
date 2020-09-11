import React, {useState} from "react";
import HomeHeaderNav from "./HomeHeaderNav";

const HomeBurger = () => {
    const [open, setOpen] = useState(false);

    const toggleClass = () => {
        setOpen(!open);
    };

    const handleOnClick = () => {
        setOpen(false);
    };

    return (
        <>
            <div
                className={!open ? "burger" : "burger burgerOpen"}
                onClick={toggleClass}
                 // onClick={() => setOpen(!open)}
            >
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
            <HomeHeaderNav
                open={open}
                onClick={handleOnClick}
            />
        </>
    )
}

export default HomeBurger;