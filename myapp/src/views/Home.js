import React from 'react';
import HomeThreeColumns from "../components/HomeThreeColumns/HomeThreeColumns";
import HomeAboutUs from "../components/HomeAboutUs/HomeAboutUs";
import HomeSteps from "../components/HomeSteps/HomeSteps";
import HomeWhoWeHelp from "../components/HomeWhoWeHelp/HomeWhoWeHelp";
import Footer from "../components/HomeContact/HomeFooter";
import HomeMain from "../components/HomeMain/HomeMain";

const Home = () => {
    return (
        <>
            <HomeMain/>
            <HomeThreeColumns/>
            <HomeSteps/>
            {/*<HomeAboutUs/>*/}
            {/*<HomeWhoWeHelp/>*/}
            {/*<Footer/>*/}
        </>
    )
}

export default Home;
