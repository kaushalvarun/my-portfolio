import React from 'react';

function EducationTile({ logo, title, institution, cgpa, coursework, results }) {
  return (
    <div className="education-tile">
      <div className="logo-container">
        <img src={logo} alt={`${institution} Logo`} />
      </div>
      <div className="right-half">
        <p><strong>{title}</strong></p>
        <p>{institution}</p>
        {cgpa && <p>CGPA: {cgpa}</p>}
        {coursework && (
          <>
            <p><b>Relevant coursework:</b></p>
            <ul className="custom-list">
              {coursework.map((item, index) => (
                <li key={index}><b>{item.label}:</b> {item.courses}</li>
              ))}
            </ul>
          </>
        )}
        {results && (
          <>
            <ul className="custom-list">
              {results.map((item, index) => (
                <li key={index}><b>{item.label}:</b> {item.courses}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default EducationTile;