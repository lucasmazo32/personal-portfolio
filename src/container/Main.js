import React from 'react';
import Header from '../component/Header';
import About from '../component/About';
import Projects from '../component/Projects';
import Contact from '../component/Contact';

function Main() {
  return (
    <div className="main">
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default Main;
