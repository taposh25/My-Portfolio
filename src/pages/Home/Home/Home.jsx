import React from 'react';
import Banner from '../Banner/Banner';
import AboutMe from '../AboutMe/AboutMe';
import Services from '../Services/Services';
import Experience from '../Experience/Experience';
import Clients from '../Clients/Clients';
import StayInTouch from '../StayInTouch/StayInTouch';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Services></Services>
            <Experience></Experience>
            <Clients></Clients>
            <StayInTouch></StayInTouch>
        </div>
    );
};

export default Home;