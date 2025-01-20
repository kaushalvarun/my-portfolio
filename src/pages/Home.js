import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './home.css';

function Home() {
  useEffect(() => {
    document.title = 'Home | Varun Kaushal';
  }, []);

  return (
    <section className="main-content">
      <div className="content-section">
        <h2>Hi, I'm</h2>
        <h1 className="main-heading">Varun Kaushal</h1>
        <p className="body-text">
          I'm in my third year of BTech in Computer Science and Engineering at VIT University, Vellore.
        </p>
        <p className="body-text">
          Super passionate about software development, especially app development and competitive coding. I also enjoy exploring other fields like Web Development and Machine Learning.
        </p>
        
        <p className="body-text">
          I'm a big believer in cloud computing, with certifications like AWS Cloud Practitioner and Microsoft Azure AI Fundamentals to back it up!
        </p>
        <p className="body-text">
          I enjoy learning new technologies and implementing them in real life!
        </p>
      </div>

      <div className="content-section">
        <img
          src={`${process.env.PUBLIC_URL}/images/VKphoto.jpeg`}
          alt="Varun Kaushal"
          className="responsive-image"
        />
        <p className="contact-info">
          <FontAwesomeIcon icon={faEnvelope} />
          <a href="mailto:kaushalvarunkv@gmail.com" className="contact-link">
            kaushalvarunkv@gmail.com
          </a>
        </p>
        <p className="contact-info">
          <FontAwesomeIcon icon={faLinkedin} />
          <a
            href="https://www.linkedin.com/in/kaushal-varun/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            Varun Kaushal
          </a>
        </p>
      </div>
    </section>
  );
}

export default Home;
