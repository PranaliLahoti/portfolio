import React from 'react'
import './Header.css'

const Header = ({Heading, subHeading})=>{
    return(
        <div className="header-container">
            <h1>{Heading}</h1>
            <p>{subHeading}</p>
        </div>
    )
}

export default Header;