import React, { Component } from 'react';
import './NavBar.css'
import { slide as Menu } from 'react-burger-menu'
import { Link, withRouter } from 'react-router-dom';

class NavBar extends Component{
    render(){

        const { location } = this.props;
        // console.log(location);
        const homeClass = location.pathname === '/' ? 'active-item' : '';
        const aboutClass = location.pathname === '/about' ? 'active-item' : '';
        const experienceClass = location.pathname === '/experience' ? 'active-item' : '';
        const projectsClass = location.pathname === '/projects' ? 'active-item' : '';
        const skillsClass = location.pathname === '/skills' ? 'active-item' : '';
        const certificationClass = location.pathname === '/certifications' ? 'active-item' : '';
        const achievementsClass = location.pathname === '/achievements' ? 'active-item' : '';
        const contactClass = location.pathname === '/contact' ? 'active-item' : '';
        return (
            <Menu>
             {/** We never want to use <a> inside our react application */}
              {/* <a id="home" className="menu-item" href="/">Home</a> */}
            <Link to='/' className= {`menu-item ${homeClass}`} >Home</Link>
            <Link to='/about' className= {`menu-item ${aboutClass}`} >About</Link>
            <Link to='/experience' className= {`menu-item ${experienceClass}`} >Work Experience</Link>
            <Link to='/projects' className= {`menu-item ${projectsClass}`} >Projects</Link>
            <Link to='/skills' className= {`menu-item ${skillsClass}`} >Skills</Link>
            <Link to='/certifications' className= {`menu-item ${certificationClass}`} >Certifications</Link>
            <Link to='/achievements' className= {`menu-item ${achievementsClass}`} >Achievements</Link>
            <Link to='/contact' className= {`menu-item ${contactClass}`} >Contact</Link>
              
            </Menu>
          );
    }
}

export default withRouter(NavBar);