import React from 'react';
import wrench from '../assets/images/wrench.png';
import hat from '../assets/images/hat.png';

export default function Header() {
  return (
    <div className="header box-shadow">
      <nav>
        <button type="button" className="btn btn-custom">About</button>
        <button type="button" className="btn btn-custom">Projects</button>
        <button type="button" className="btn btn-custom">Contact</button>
      </nav>
      <div className="main-phrase">
        <img src={wrench} alt="wrench" className="wrench" />
        <h1>
          Engineering my way
          <br />
          {' '}
          to Full-Stack Development
        </h1>
        <img src={hat} alt="wrench" className="hat" />
      </div>
    </div>
  );
}
