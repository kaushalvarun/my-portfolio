import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './styles.css';
function Home() {
  useEffect(() => {
    document.title = 'Home | Varun Kaushal';
  }, []);
  return (
    <section className="main-content">
      <div className="left-half">
        <h2 style={{ margin: '0' }}>Hi, I'm</h2>
        <h1 className="main-heading" style={{ marginTop: '10px', paddingTop: '10px' }}>Varun Kaushal</h1>
        <p className="body-text">
        I'm in my third year of BTech in Computer Science and Engineering at VIT University, Vellore. 
        </p>
        <p className="body-text">
        When it comes to tech, I'm super passionate about software development, especially app development and competitive coding. I also love exploring other fields like Web Development and Machine Learning whenever I get the chance. So far, I've developed a ML powered movie recommender, and a food delivery app, and I've got plenty more ideas in the pipeline!
        </p>
        <p className="body-text">
        I'm a big believer in cloud computing, with certifications like AWS Cloud Practitioner and Microsoft Azure AI Fundamentals to back it up!
        </p>
      </div>

      <div className="right-half">
      <img src={`${process.env.PUBLIC_URL}/images/VKphoto.jpeg`} alt="Varun Kaushal" class="responsive-image" />
        <p className="contact-info">
          <FontAwesomeIcon icon={faEnvelope} />
          <a href="mailto:kaushalvarunkv@gmail.com" style={{ color: '#ffffff', textDecoration: 'none' }}> kaushalvarunkv@gmail.com</a>
        </p>
        <p className="linkedin-link">
          <FontAwesomeIcon icon={faLinkedin} />
          <a href="https://www.linkedin.com/in/kaushal-varun/" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', textDecoration: 'none' }}> Varun Kaushal</a>
        </p>
      </div>
    </section>
  );
}

export default Home;
