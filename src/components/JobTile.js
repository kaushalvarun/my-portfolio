import React from 'react';
import './tile_styles.css';

function JobTile({ logo, title, company, dateRange, location, responsibilities }) {
  return (
    <div className="tile">
      <div className="logo-container">
        <img src={logo} alt={`${company} Logo`} />
      </div>
      <div className="right-half">
        <p><strong>{title}</strong></p>
        <p>{company}</p>
        <p>{dateRange}</p>
        <p>{location}</p>
        <ul className="bullet-points">
          {responsibilities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default JobTile;
