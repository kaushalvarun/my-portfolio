import React, { useEffect } from 'react';
import CertificationTile from '../components/certificationTile.js';

function Certifications() {
    useEffect(() => {
        document.title = 'Certifications | Varun Kaushal';
    }, []);

    return (
        <div>
            <h1 className='heading'>Certifications</h1>
            <section className="certifications-container">           
                    <CertificationTile
                        logo={`${process.env.PUBLIC_URL}/images/aws_logo.jpeg`}
                        title="AWS Cloud Practitioner"
                        company="Amazon Web Services"
                        issueDate="Jul 2024"
                        credentialLink="https://www.credly.com/badges/8a4ebe27-0bfa-4b84-938e-ce6a24296bc1/public_url"
                        description="Passed the cloud practitioner’s exam, enhancing understanding of AWS cloud concepts, technology, security and compliance, and billing and pricing. Leveraged AWS services to create and launch web apps, manage databases, implement AI services, and migrate infrastructure to the cloud."
                        />

                    <CertificationTile
                        logo={`${process.env.PUBLIC_URL}/images/microsoft_logo.jpeg`}
                        title="Azure AI Fundamentals"
                        company="Microsoft"
                        issueDate="Jun 2024"
                        credentialLink="https://www.certiport.com/portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=455&cvid=yK1RK3XvhJh/K3bosACMsQ=="
                        description="Achieved Azure AI Fundamentals certification, gaining knowledge of machine learning and AI concepts, and related Microsoft Azure services. Built a custom pipeline using the Multiclass Decision Forest Algorithm to help high school seniors select the right academic stream."
                        />

                    <CertificationTile
                        logo={`${process.env.PUBLIC_URL}/images/goldman_sachs_logo.jpeg`}
                        title="Software Engineering Virtual Experience"
                        company="Goldman Sachs"
                        issueDate="Jul 2023"
                        credentialLink="https://drive.google.com/file/d/14nek-Lbatk92kPjb4UiFjdBaPC6qRBTu/view"
                        description="Completed the Software Engineering Virtual Experience with Goldman Sachs, gaining hands-on experience in password cracking, hashing.I got a chance to understand the overall culture as part of a small assignment,
 on security improvements for their internal systems."
                        />

                    <CertificationTile
                        logo={`${process.env.PUBLIC_URL}/images/nptel.jpeg`}
                        title="Entrepreneurship"
                        issueDate="Nov 2023"
                        company="NPTEL (IIT Madras)"
                        credentialLink="https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL23MG74S84970169520214668"
                        description="Achieved Elite + Gold certificate for being in the top 1% of exam takers. The course provided an expansive appreciation of entrepreneurship's role in the economy, including key success factors, risks, and mitigation strategies."
                    />
            
            </section>
        </div>
    );
}

export default Certifications;
