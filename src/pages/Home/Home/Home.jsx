import React from 'react';
import Banner from '../Banner/Banner';
import AboutMe from '../AboutMe/AboutMe';
import Services from '../Services/Services';
import Experience from '../Experience/Experience';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Services></Services>
            <Experience></Experience>
        </div>
    );
};

export default Home;