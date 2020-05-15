import React from 'react';
import PropTypes from 'prop-types';
import Lang from './Lang';

export default function Footer({ lang }) {
  return (
    <footer>
      Icons:
      &nbsp;
      <a href="https://icons8.com/" target="_blank" rel="noopener noreferrer">Icons8</a>
      &nbsp;
      <a href="https://fontawesome.com" target="_blank" rel="noopener noreferrer">FontAwesome</a>
      <Lang lang={lang} />
    </footer>
  );
}

Footer.propTypes = {
  lang: PropTypes.bool.isRequired,
};
