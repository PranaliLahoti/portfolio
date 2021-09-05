import React from 'react';

import './Projects.css'

const ProjectCard = ({projectName,projectDescription,projectUrl,projectSkills,projectDuration})=>{
    return(
        <div className="project-card">
            <div className="project-details-container">
                <h2 className="project-heading">{projectName}</h2> 
                <a className="project-link" href={projectUrl} target="_blank" rel="noreferrer"  > <i>{projectUrl}</i></a>
                <i className="project-duration">({projectDuration})</i>
                <p className="project-details">{projectDescription}</p>
                <i className="project-details"><strong>Key Skills:</strong> {projectSkills}</i>
                
            </div>
        </div>
    )
}

export default ProjectCard