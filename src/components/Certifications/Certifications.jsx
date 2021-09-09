import React from 'react';
// import FooterLink from '../FooterLink/FooterLink';
import Header from '../Header/Header';
import HorizontalNavbar from '../HorizontalNavbar/HorizontalNavbar';
import SocialIcons from '../SocialIcons/SocialIcons';

import {certificationsInfo} from './../../assets/certificationsInfo'

import './Certifications.css'
import CertificationCard from './CertificationsCard';

const Certifications = ()=>{

    return(
        <div className="section-container">
            <Header Heading="My Certifications" 
            subHeading="“An investment in knowledge always pays the best interest.” " />

            <div className="certificate-cards-container">
                    {
                        certificationsInfo.map((certificate,i)=>{
                            return (<CertificationCard key={i} certificationName={certificate.certificationName} 
                                issuedOn={certificate.issuedOn} 
                                issuingOrganization={certificate.issuingOrganization}
                                imageUrl={certificate.imageUrl}
                                credentialUrl={certificate.credentialUrl}/>)
                        })
                    }
            </div>
        <SocialIcons/>
        <HorizontalNavbar/>
        {/* <FooterLink 
            phrase="See my  " 
            link="achievements!" 
            toAddress="/achievements" /> */}
        </div>
    )
}

export default Certifications;