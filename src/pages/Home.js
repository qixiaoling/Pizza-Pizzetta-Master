import React from 'react';
import HeroSection from "../Component/HeroSection";
import PizzaInfo from "../Component/PizzaInfo";
import DailySpecial from "../Component/DailySpecial";
import DessertInfo from "../Component/DessertInfo";
import Footer from "../Component/Footer";
import Review from "../Component/Review";
import Store from "../Component/Store";

function Home() {
    return(
        <>
            <HeroSection/>
            <PizzaInfo/>
            <DailySpecial/>
            <DessertInfo/>
            <Review/>
            <Store />
            <Footer/>
        </>
    )
}
export default Home;