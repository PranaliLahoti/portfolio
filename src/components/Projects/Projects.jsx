import React from 'react';
import FooterLink from '../FooterLink/FooterLink';
import Header from '../Header/Header';
import SocialIcons from '../SocialIcons/SocialIcons';

import {projectsData} from './../../assets/projectsData'
import ProjectCard from './ProjectCard';

import './Projects.css';

const Projects = () =>{
    return(
        <div className="section-container">
             <Header Heading="My Projects" 
            subHeading="Passionate about new technologies, I keep exploring stuff. Here are projects I've worked on!" />

            <div className="project-cards-container">
                    {
                        projectsData.map((project,i)=>{
                            return (<ProjectCard key={i} projectName={project.projectName} 
                                projectDescription={project.projectDescription} 
                                projectUrl={project.projectUrl}
                                projectSkills={project.projectSkills}
                                projectDuration = {project.projectDuration}
                                />)
                        })
                    }
            </div>
            <SocialIcons/>
            <FooterLink 
            phrase="Check out  " 
            link="my skills!" 
            toAddress="/skills" />
        </div>
    )
}

export default Projects;