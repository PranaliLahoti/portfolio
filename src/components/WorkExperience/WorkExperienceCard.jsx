import React from 'react';

import './WorkExperience.css'

const WorkExperienceCard = ({job_title,job_duration, company_name, company_location,job_skills,job_description})=>{
    return(
        <div className="work-card">
            <div className="work-details-container">
                <div className="job-info">
                    <h2 className="job-title">{job_title}</h2>
                    <h5 className="job-duration">{job_duration}</h5>
                </div>
                <div className="job-info div-margin">
                    <h4 className="company-name">{company_name}</h4>
                    <h5 className="company-location">{company_location}</h5>
                </div>
                    {job_description.map((project,i)=>{
                    return(
                        <div className="projects-info" key={i}>
                            <div className="project-description">
                            <h4>{project.project_name}:</h4>
                            <i>&#123;{project.key_skills}&#125;</i>
                            </div>
                            <div className="project-detail">
                            <p>{project.project_description}</p>
                            </div>
                        </div>
                    )
                })}
                    
                
            </div>
        </div>
    )

}

export default WorkExperienceCard;