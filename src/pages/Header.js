import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/"><strong>Home</strong></Link></li>
          <li><Link to="/education"><strong>Education</strong></Link></li>
          <li><Link to="/experience"><strong>Experience</strong></Link></li>
          <li><Link to="/certifications"><strong>Certifications</strong></Link></li>
          <li><Link to="/skills"><strong>Skills</strong></Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
