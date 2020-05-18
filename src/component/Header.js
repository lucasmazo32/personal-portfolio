import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import actions from '../actions/index';
import wrench from '../assets/images/wrench.png';
import hat from '../assets/images/hat.png';

const { changeToInt, changeToMain } = actions;

function Header({
  lang, menu, changeToInt, changeToMain,
}) {
  const esp = ['Diseñando mi camino', 'para Full-Stack Development'];
  const eng = ['Engineering my way', 'to Full-Stack Development'];
  const interactive = [['Interactive', 'Interactiva'], ['Standard', 'Estándar']];
  const intText = menu ? interactive[0] : interactive[1];

  const handleClick = () => {
    if (menu) {
      changeToInt();
    } else {
      changeToMain();
    }
  };

  const handleMenu = () => {
    const menu = document.querySelector('#menu');
    menu.classList.toggle('closed');
  };

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
  changeToInt: PropTypes.func.isRequired,
  changeToMain: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  changeToInt: page => dispatch(changeToInt(page)),
  changeToMain: page => dispatch(changeToMain(page)),
});

export default connect(null, mapDispatchToProps)(Header);
