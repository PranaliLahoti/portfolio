import React from 'react';
// import FooterLink from '../FooterLink/FooterLink';
import Header from '../Header/Header';
import './Skills.css';
import {skillList} from '../../assets/skillsData'

import skillsVector from '../../assets/skills_vector.png'
import SkillCard from './SkillCard';
import SocialIcons from '../SocialIcons/SocialIcons';
import HorizontalNavbar from '../HorizontalNavbar/HorizontalNavbar';

const Skills = ()=>{
    return(
        <div className="section-container">
            <Header Heading="My Skills" 
            subHeading="I have the ability to turn business ideas into technical solutions. Here's the tech stack I have worked with! " />

           

            <div className="skill-card-container">
                { skillList.map((skills,i)=>{
                    return(<SkillCard key={i} skillName={skills.skillName} skillUrl={skills.skillUrl} />)
                }) }
            </div>

            <div className="skills-vector-frame">
                <img src={skillsVector} className="skills-vector" alt="skills" />
            </div>
            <SocialIcons/>
            <HorizontalNavbar/>

            {/* <FooterLink 
            phrase="See my  " 
            link="certifications!" 
            toAddress="/certifications" /> */}
        </div>
    )
}

export default Skills;