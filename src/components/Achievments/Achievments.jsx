import React from 'react'
import FooterLink from '../FooterLink/FooterLink'
import Header from '../Header/Header'
import SocialIcons from '../SocialIcons/SocialIcons'

import {achievements} from './../../assets/achievements'

// import Awards from '../../assets/awards.jpg'

import './Achievments.css'
const Achievments = ()=>{
    return(
        <div className="section-container">
            <Header Heading="My Achievements" 
            subHeading="Here are some notable achievements of mine!" />
            <div className="achievements-main">
                <div className="achievements-list">
                    {
                        achievements.map((achievement,i)=>{
                            return(
                                <div className="achievement-name" key={i}>
                                    <ul>
                                        <li className="achiement-title">
                                            {achievement.achievementName}
                                           <p> <i>{achievement.achievementDate}</i></p>
                                        </li>
                                       

                                    </ul>
                                </div>
                            )
                        })
                    }
                    
                </div>
                {/* <div className="achievements-image">
                    <img className="awards-img" src={Awards} alt="my-awards"></img>
                </div> */}
            </div>
            <SocialIcons/>
            <FooterLink 
            phrase="Get in  " 
            link="touch!" 
            toAddress="/contact" />
        </div>
    )
}

export default Achievments