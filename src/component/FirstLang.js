/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import actions from '../actions/index';

const { langEnglish, langSpanish } = actions;

function FirstLang({ clickFn, langEnglish, langSpanish }) {
  const toSpa = () => {
    localStorage.setItem('defLang', 'esp');
    langSpanish();
    clickFn();
  };

  const toEng = () => {
    localStorage.setItem('defLang', 'eng');
    langEnglish();
    clickFn();
  };

  return (
    <div className="first-time">
      <div role="button" onClick={toSpa} onKeyUp={toSpa} tabIndex={0}>
        <h2>¡Bienvenido!</h2>
        <span>Para acceder al portafolio en Español, presiona en este cuadro.</span>
        <span>No te preocupes. En cualquier momento encontrarás en el pie de página una opción para cambiar a Inglés.</span>
      </div>
      <div role="button" onClick={toEng} onKeyUp={toEng} tabIndex={0}>
        <h2>Welcome!</h2>
        <span>To access the portfolio in English, click anywhere in this square.</span>
        <span>Do not worry. At any given moment you can find in the footer an option to change to Spanish.</span>
      </div>
    </div>
  );
}

FirstLang.propTypes = {
  clickFn: PropTypes.func.isRequired,
};

FirstLang.propTypes = {
  langEnglish: PropTypes.func.isRequired,
  langSpanish: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  langEnglish: lang => dispatch(langEnglish(lang)),
  langSpanish: lang => dispatch(langSpanish(lang)),
});

export default connect(null, mapDispatchToProps)(FirstLang);
