import React from 'react';
import Details from '../../Details/Details';
import Myself from '../Myself/Myself';
import Skills from '../Skills/Skills';
import Clients from '../../Home/Clients/Clients';
import StayInTouch from '../../Home/StayInTouch/StayInTouch';

const About = () => {
    return (
        <div>
            <Myself></Myself>
            <Details></Details>
            <Skills></Skills>
            <Clients></Clients>
            <StayInTouch></StayInTouch>
        </div>
    );
};

export default About;