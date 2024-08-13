import React,{useEffect} from 'react';
import JobTile from '../components/JobTile.js';

function Experience() {
    useEffect(() => {
        document.title = 'Experience | Varun Kaushal';
    }, []);

    return (
        <div>
            <h1 className='heading'>Experience</h1>
            <section className="main-content">
                {/* Col 1 */}
                <div className="column">
                    <JobTile
                        logo={`${process.env.PUBLIC_URL}/images/acmvit_logo.jpeg`}
                        title="Core Committee Member"
                        company="ACM-VIT Chapter"
                        dateRange="January 2020 - Present"
                        location="Vellore, Tamil Nadu, India"
                        responsibilities={[
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
                </div>

                {/* Col 2 */}
                <div className="column">
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
                </div>
            </section>
        </div>
    );
}

export default Experience;
