import React from 'react';
import ProjectsHero from '../ProjectsHero/ProjectsHero';
import FeaturedProjects from './FeaturedProjects/FeaturedProjects';
import Work from './Work/Work';


const Projects = () => {
    return (
        <div>
           <ProjectsHero></ProjectsHero>
           <FeaturedProjects></FeaturedProjects>
           <Work></Work>
        </div>
    );
};

export default Projects;