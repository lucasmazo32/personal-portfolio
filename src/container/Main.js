import React from 'react';
import Header from '../component/Header';
import About from '../component/About';
import Projects from '../component/Projects';
import Contact from '../component/Contact';
import Footer from '../component/Footer';

function Main() {
  return (
    <div className="main">
      <Header />
      <div className="container-xl">
        <About />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default Main;
