import React from 'react'

import './SocialIcons.css'


import github from './../../assets/gh.png';
import linkedin from './../../assets/li.png';
import instagram from './../../assets/in.png';
import web from './../../assets/web.png';
import leetcode from './../../assets/leetcode.png'
import hackerrank from './../../assets/hackerrank.png'

const SocialIcons = ()=>{
    return(
        <div className="social-icons-container">
                <a href="https://www.linkedin.com/in/lahotipranali/" target="_blank" className="social-icon" rel="noreferrer">
                    <img className="resize" src={linkedin} alt="social" />
                </a>
                <a href="https://www.instagram.com/__pranali12__/" target="_blank" className="social-icon" rel="noreferrer">
                    <img className="resize" src={instagram} alt="social" />
                </a>
                <a href="https://github.com/PranaliLahoti" target="_blank" className="social-icon" rel="noreferrer">
                    <img className="resize" src={github} alt="social" />
                </a>
                <a href="https://leetcode.com/Pranali_Lahoti/" target="_blank" className="social-icon" rel="noreferrer">
                    <img className="resize" src={leetcode} alt="social" />
                </a>
                <a href="https://www.hackerrank.com/lahotipranali" target="_blank" className="social-icon" rel="noreferrer">
                    <img className="resize" src={hackerrank} alt="social" />
                </a>
                <a href="https://pranalilahoti.github.io/portfolio/" target="_blank" className="social-icon" rel="noreferrer">
                    <img className="resize" src={web} alt="social" />
                </a>
            </div>
    )
}

export default SocialIcons