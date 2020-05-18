import React from 'react';
import PropTypes from 'prop-types';
import Header from '../component/Header';
import About from '../component/About';
import Projects from '../component/Projects';
import Contact from '../component/Contact';
import Footer from '../component/Footer';

function Main({ lang, interactive }) {
  return (
    <div className="main">
      <Header lang={lang} menu />
      <div className="container-xl">
        <About lang={lang} interactive={interactive} />
        <Projects lang={lang} />
        <Contact lang={lang} />
      </div>
      <Footer lang={lang} />
    </div>
  );
}

Main.propTypes = {
  lang: PropTypes.bool.isRequired,
  interactive: PropTypes.bool,
};

Main.defaultProps = {
  interactive: false,
};

export default Main;
