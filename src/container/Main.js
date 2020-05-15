import React from 'react';
import PropTypes from 'prop-types';
import Header from '../component/Header';
import About from '../component/About';
import Projects from '../component/Projects';
import Contact from '../component/Contact';
import Footer from '../component/Footer';

function Main({ lang }) {
  return (
    <div className="main">
      <Header lang={lang} />
      <div className="container-xl">
        <About lang={lang} />
        <Projects lang={lang} />
        <Contact lang={lang} />
      </div>
      <Footer lang={lang} />
    </div>
  );
}

Main.propTypes = {
  lang: PropTypes.bool.isRequired,
};

export default Main;
