import React, { useEffect } from 'react';
import EducationTile from '../components/EducationTile.js';

function Education() {
  useEffect(() => {
    document.title = 'Education | Varun Kaushal';
  }, []);

  const courseworkVIT = [
    { label: 'Programming & Algorithms', courses: 'Data Structures and Algorithms, Structured and Object-Oriented Programming, Python, Java, C/C++' },
    { label: 'Systems & Architecture', courses: 'Computer Architecture and Organisation, Computer Networks, Database Management Systems, Web Programming' }
  ];

  return (
    <div>
      <h1 className='heading'>Education</h1>
      <section className="main-content">
        <div className="column">
          <EducationTile
            logo= "/images/VIT_logo.jpeg"
            title="BTech in Computer Science Engineering"
            institution="Vellore Institute of Technology, Vellore"
            cgpa="9.01"
            coursework={courseworkVIT}
          />
   <EducationTile
            logo="/images/ais.jpeg"
            title="High School"
            institution="Amity International School, Noida"
            results={[
              { label: 'CBSE 10th Board', courses: '96 %' },
              { label: 'CBSE 12th Board', courses: '93.4 %' }
            ]}
          />
        </div>
      </section>
    </div>
  );
}

export default Education;
