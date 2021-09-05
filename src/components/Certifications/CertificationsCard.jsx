import React from 'react';

import './Certifications.css'


const CertificationCard = ({certificationName,imageUrl,issuedOn,issuingOrganization,credentialUrl})=>{
    return(
        <div className="certification-card">
            
            <div className="image-container">
            <a href={credentialUrl} className='certificate-link' target="_blank" rel="noreferrer">
                    <img
                        src={imageUrl}
                        alt='organization'
                        className='certificate-org'
                    />
                    <div className="certification-text">
                        <h3 className="certification-name view-certificate">VIEW CERTIFICATE</h3>
                    </div>
                </a>
                
            </div>
            <div className="certification-details-container">
                <h2 className="certification-name">{certificationName}</h2> 
                <p className="certificate-date">{issuedOn}</p>
            </div>
        </div>
    )
}

export default CertificationCard