import React from 'react';
import photo from '../assets/images/profile-photo.png';

export default function About() {
  return (
    <div className="about margin-containers">
      <div className="personal-info">
        <h2>Lucas Mazo Meza</h2>
        <img src={photo} alt="lucas-mazo profile pic" />
      </div>
      <span className="about-division" />
      <div className="about-info">
        <h4>Location</h4>
        <span>Medellín, Colombia</span>
        <br />
        <span>Open to work remotely | Open to relocate</span>
        <h4 className="about-mt">Skills</h4>
        <span>JavaScript, React, Redux, Ruby on Rails, Git and Git Flow</span>
        <br />
        <button type="button" className="more-info btn"><span>More Info</span></button>
      </div>
    </div>
  );
}
