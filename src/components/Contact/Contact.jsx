import React from 'react';
import FooterLink from '../FooterLink/FooterLink';
import Header from '../Header/Header';

import AboutImage from '../../assets/about_vector.png'

import './Contact.css';
import SocialIcons from '../SocialIcons/SocialIcons';



const Contact = () =>{
    return(
        <div className="section-container">
             <Header Heading="Get in touch" 
            subHeading="Feel free to drop me an email!" />

            <div className="contact-form-container">
                <form  action="https://formspree.io/f/xeqvpdlq"
                    method="POST" className="contact-form">
                    <input type="email" required name="_replyto" placeholder="Your Email ID" 
                    className="input-box email-input" >
                    </input>
                    <textarea type="text" required placeholder="Write your message here" name="message"
                    className="input-box text-input" >
                    </textarea>
                    <button type="submit" className="contact-btn" >Send Email</button>
                </form>
            </div>

            <SocialIcons/>

            <FooterLink
            phrase="Read more  " 
            link="about me!" 
            toAddress="/about" />
            {/* <span className="made-withlove">Made with ❤️ by Pranali Lahoti!</span> */}
            {/* <span>Made with &#10084; by Pranali Lahoti</span> */}
            <div className="vector-frame">
                <img src={AboutImage} className="about-vector" alt="about" />
            </div>
        </div>

    )
}

export default Contact