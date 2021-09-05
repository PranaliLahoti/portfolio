import React, { Component } from 'react';
import { withRouter } from 'react-router';

import GoHomeWhite from '../../assets/home_white.png'
import GoHomeBlack from '../../assets/home_black.png'
import './GoHome.css'

class GoHome extends Component{

    navigateToHome=()=>{
        const { history } = this.props;
        history.push("/")
    };

    render(){  
        
        const {location} = this.props;
        const homePage = location.pathname === '/'
        
        return(
            <button className={`go-home-btn ${homePage? 'white-bkg': 'blue-bkg'}`} onClick={this.navigateToHome}>
                <img className="home-icon"
                alt="home-icon"
                src={homePage? GoHomeBlack:GoHomeWhite} >
                </img>
            </button>
        )
    }
}

export default withRouter(GoHome)