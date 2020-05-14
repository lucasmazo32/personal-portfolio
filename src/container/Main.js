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
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default Main;
