/* eslint-disable max-len */
import React from 'react';

function FirstTime() {
  const toSpa = () => {
    localStorage.setItem('defLang', 'esp');
    window.location.reload();
  };

  const toEng = () => {
    localStorage.setItem('defLang', 'eng');
    window.location.reload();
  };

  return (
    <div className="container-xl first-time">
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

export default FirstTime;
