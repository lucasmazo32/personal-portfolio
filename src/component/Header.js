import React from 'react';
import PropTypes from 'prop-types';
import wrench from '../assets/images/wrench.png';
import hat from '../assets/images/hat.png';

export default function Header({ lang }) {
  const esp = ['Diseñando mi camino', 'para Full-Stack Development'];
  const eng = ['Engineering my way', 'to Full-Stack Development'];

  return (
    <div className="header box-shadow">
      <div className="main-phrase">
        <img src={wrench} alt="wrench" className="wrench" />
        <h1>
          { lang ? eng[0] : esp[0] }
          <br />
          {' '}
          { lang ? eng[1] : esp[1] }
        </h1>
        <img src={hat} alt="wrench" className="hat" />
      </div>
    </div>
  );
}

Header.propTypes = {
  lang: PropTypes.bool.isRequired,
};
