import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

export default function Header({
  lang, menu,
}) {
  const esp = ['Diseñando mi camino', 'para desarrollador web'];
  const eng = ['Engineering my way', 'to Full-Stack Development'];
  const interactive = [['Interactive', 'Interactiva'], ['Standard', 'Estándar']];
  const intText = menu ? interactive[0] : interactive[1];

  const history = useHistory();

  const handleClick = () => {
    if (menu) {
      history.push('/interactive');
    } else {
      history.push('/');
    }
  };

  const handleMenu = () => {
    const menu = document.querySelector('#menu');
    menu.classList.toggle('closed');
  };

  return (
    <div className="header box-shadow">
      <div className="main-phrase">
        <h1>
          { lang ? eng[0] : esp[0] }
          <br />
          {' '}
          { lang ? eng[1] : esp[1] }
        </h1>
      </div>
      <div id="menu" className="menu closed">
        <button className="btn btn-bar bar-container" type="button" onClick={handleMenu}>
          <span className="bar-1 bar" />
          <span className="bar-2 bar" />
          <span className="bar-3 bar" />
        </button>
        <button className="btn btn-inter" type="button" onClick={handleClick}>{ lang ? intText[0] : intText[1] }</button>
      </div>
    </div>
  );
}

Header.propTypes = {
  lang: PropTypes.bool.isRequired,
  menu: PropTypes.bool.isRequired,
};
