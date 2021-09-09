import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import './HorizontalNavbar.css'

class HorizontalNavbar extends Component{
    render(){
        return(
            
            <div className="navbar-items">
                <Link to='/about'replace className="navbar-item"  >About</Link>
                <Link to='/experience' replace className="navbar-item" >Work Experience</Link>
                <Link to='/projects' replace className="navbar-item" >Projects</Link>
                <Link to='/skills' replace className="navbar-item" >Skills</Link>
                <Link to='/certifications' replace className="navbar-item" >Certifications</Link>
                <Link to='/achievements' replace className="navbar-item"  >Achievements</Link>
                <Link to='/contact' replace className="navbar-item" >Contact</Link>
            </div>
        )
    }
}

export default HorizontalNavbar