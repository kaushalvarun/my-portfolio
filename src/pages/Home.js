import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Home() {
  useEffect(() => {
    document.title = 'Home | Varun Kaushal';
  }, []);
  return (
    <section className="main-content">
      <div className="left-half">
        <h3 style={{ margin: '0' }}>Hi, I'm</h3>
        <h1 className="main-heading" style={{ marginTop: '10px', paddingTop: '10px' }}>Varun Kaushal</h1>
        <p className="body-text">
          I am currently in my third year of pursuing a BTech in Computer Science and Engineering from VIT University, Vellore.
          I serve as a Senior Core Committee member of ACM, a leading coding club at my university, where we organize various competitions and events.
        </p>
        <p className="body-text">
        I am a passionate app developer and competitive coder,
        i enjoy developing apps and have created a chatting application and a food delivery app, with many more projects in the works.
        Additionally, I have a strong interest in cloud computing and its emerging technologies, and have earned certifications in AWS Cloud Practitioner and Microsoft Azure AI Fundamentals.
        </p>
      </div>

      <div className="right-half">
      <img src="/images/VKphoto.jpeg" alt="Varun Kaushal" class="responsive-image" />
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
