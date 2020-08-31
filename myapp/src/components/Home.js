import React from 'react';
import HomeThreeColumns from "./HomeThreeColumns";
import HomeAboutUs from "./HomeAboutUs";
import HomeSteps from "./HomeSteps";
import HomeWhoWeHelp from "./HomeWhoWeHelp";
import Footer from "./HomeFooter";
import HomeMain from "./HomeMain";

const Home = () => {
    return (
        <>
            <HomeMain/>
            <HomeThreeColumns/>
            <HomeSteps/>
            <HomeAboutUs/>
            <HomeWhoWeHelp/>
            <Footer/>
        </>
    )
}

export default Home;
