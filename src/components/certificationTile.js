import React from 'react';
import './tile_styles.css';
function CertificationTile({ logo, title, company, issueDate, credentialLink, description }) {
    return (
        <div className="tile">
            <div className="logo-container">
                <img src={logo} alt={`${company} Logo`} />
            </div>
            <div className="right-half">
                <p><strong>{title}</strong></p>
                <p>{company}</p>
                <p>Issued: {issueDate}</p>
                <p><a href={credentialLink} target="_blank" rel="noopener noreferrer">View Credential</a></p>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default CertificationTile;
