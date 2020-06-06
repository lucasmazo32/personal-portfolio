import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Timeline from '../component/Timeline';
import Background from '../component/Background';
import Footer from '../component/Footer';
import Hobbies from '../component/Hobbies';

export default function Bio({ lang }) {
  return (
    <div className="bio">
      <div className="container-xl">
        <Background lang={lang} />
        <Hobbies lang={lang} />
        <Timeline lang={lang} />
      </div>
      <Link className="btn btn-back" to="/">{ lang ? 'Go back' : 'Regresar' }</Link>
      <Footer lang={lang} />
    </div>
  );
}

Bio.propTypes = {
  lang: PropTypes.bool.isRequired,
};
