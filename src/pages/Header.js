import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav>
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${isOpen ? 'active' : ''}`}></div>
          <div className={`bar ${isOpen ? 'active' : ''}`}></div>
          <div className={`bar ${isOpen ? 'active' : ''}`}></div>
        </div>
        <ul className={isOpen ? 'show' : ''}>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/education" onClick={toggleMenu}>Education</Link></li>
          <li><Link to="/experience" onClick={toggleMenu}>Experience</Link></li>
          <li><Link to="/certifications" onClick={toggleMenu}>Certifications</Link></li>
          <li><Link to="/skills" onClick={toggleMenu}>Skills</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
