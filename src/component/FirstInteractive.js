/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function FirstInteractive({ lang, clickFn }) {
  const eng = ['You will have a place where you type simple commands and display the information you requested.', 'You can change to the standard version on the webpage.', 'All the information will be available to you.', 'You can change to the interactive version on the webpage.'];
  const esp = ['Podrás escribir simples comandos los cuales mostrarán la información solicitada.', 'Puedes cambiar a la forma estándar en la página.', 'Toda la información estará disponible para ti.', 'Puedes cambiar a la forma interactiva en la página.'];

  const standard = () => {
    window.location.reload();
  };

  const interactive = () => {
    clickFn();
  };
  return (
    <div className="first-interactive">
      <h2 className="interactive-title">{ lang ? 'How would you like your experience?' : '¿Cómo quieres tu experiencia?' }</h2>
      <div className="first-containers">
        <div role="button" onClick={standard} onKeyUp={standard} tabIndex={0}>
          <h2>{ lang ? 'Standard' : 'Estándar' }</h2>
          <span>{ lang ? eng[2] : esp[2] }</span>
          <span>{ lang ? eng[3] : esp[3] }</span>
        </div>
        <div role="button" onClick={interactive} onKeyUp={interactive} tabIndex={0}>
          <h2>{ lang ? 'Interactive' : 'Interactiva' }</h2>
          <span>{ lang ? eng[0] : esp[0] }</span>
          <span>{ lang ? eng[1] : esp[1] }</span>
        </div>
      </div>
    </div>
  );
}

FirstInteractive.propTypes = {
  lang: PropTypes.bool.isRequired,
  clickFn: PropTypes.func.isRequired,
};

const mapStateToProps = ({ langReducer: lang }) => ({
  lang,
});

export default connect(mapStateToProps)(FirstInteractive);
