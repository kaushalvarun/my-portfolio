import React, { useEffect } from 'react';
import JobTile from '../components/JobTile.js';
import './styles.css';

function Experience() {
    useEffect(() => {
        document.title = 'Experience | Varun Kaushal';
    }, []);

    return (
        <div>
            <h1 className='heading'>Experience</h1>
            <section className="tile-container">           
                    <JobTile
                        logo={`${process.env.PUBLIC_URL}/images/fiserv.jpeg`}
                        title="Technology Summer Intern"
                        company="Fiserv."
                        dateRange="May 2025 - July 2025"
                        location="Pune, Maharashtra"
                        responsibilities={[
                            "Achieved reduction of Biller data lookup time from hours to nearly 2 minutes -> quicker access to operational insights for client facing CSMs, sales, support, and leadership teams.",
                            "Developed an internal dashboard to unify biller-specific data—such as supported payment channels, methods, and product features enabled for biller, incorporating inputs from senior leadership in India and USA. - VPs, Business Heads",
                            "Built an automated SQL script review tool in C# to detect 5+ common DB risk patterns (e.g., missing schema elements, locking-prone joins), reducing manual reviews by ~40%."
                        ]}
                    />

                    <JobTile
                        logo={`${process.env.PUBLIC_URL}/images/copperbell.jpeg`}
                        title="Project Intern"
                        company="Copperbell Tech Solutions"
                        dateRange="May 2024 - July 2024"
                        location="Noida, Uttar Pradesh"
                        responsibilities={[
                            "Developed key features for BuzzChat, a communication engine for the Finnkosha team, including the authentication screen, Flutter UI, group chats, and one-on-one messaging, enhancing real-time communication capabilities for B2C customers.",
                            <span key="link">
                                Partial recreation of my contributions to BuzzChat on GitHub with permission from Copperbell. <a href="https://github.com/kaushalvarun/Buzzchat-Public" target="_blank" rel="noopener noreferrer">BuzzChat</a>
                            </span>,
                        ]}
                    />

                    <JobTile
                        logo={`${process.env.PUBLIC_URL}/images/acmvit_logo.jpeg`}
                        title="Senior Core Committee Member"
                        company="ACM-VIT Chapter"
                        dateRange="May 2023 - Present"
                        location="Vellore, Tamil Nadu, India"
                        responsibilities={[
                            "Part of Competitive Coding Domain at ACM",
                            "Assisted in crafting problem statements for competitive coding events, contributing to the development of challenging and engaging challenges.",
                            "Attended workshops and coding sessions, developing initial problem-solving skills.",
                            "Engaged in team-based coding projects, fostering collaborative learning environments."
                        ]}
                    />

                    <JobTile
                        logo={`${process.env.PUBLIC_URL}/images/Iris.jpeg`}
                        title="National Finalist 2019"
                        company="IRIS National Fair"
                        dateRange="August 2019 - January 2020"
                        location="Bengaluru, Karnataka, India"
                        responsibilities={[
                            'Competed in the IRIS National Fair 2019, earning the status of a national finalist for the innovative "Smart Streams" project.',
                            'Designed and implemented "Smart Streams" project utilizing AI Multiclass Decision Forest model on Microsoft Azure to aid class 11-12 students in stream selection.',
                        ]}
                    />

                    <JobTile
                        logo={`${process.env.PUBLIC_URL}/images/Iris.jpeg`}
                        title="National Finalist 2018"
                        company="IRIS National Fair"
                        dateRange="August 2018 - January 2019"
                        location="Manekshaw Centre, Delhi, India"
                        responsibilities={[
                            'Recognized as a national finalist after successfully competing at the state level for the project "Digitization of Student Performance Record through Cloud Computing."',
                            'Presented the project nationally, showcasing its innovative use of Cloud Computing and Amazon Web Services to streamline record-keeping, significantly reducing paperwork.',
                        ]}
                    />
            </section>
        </div>
    );
}

export default Experience;
