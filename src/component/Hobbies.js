import React from 'react';
import PropTypes from 'prop-types';
import hobbies from '../helper/hobbies';

const hobbiesGen = lang => (
  hobbies.map(hobby => (
    <div className="hobby" key={hobby.desc}>
      <img src={hobby.img} alt="" />
      <span>{ lang ? hobby.eng : hobby.esp }</span>
    </div>
  ))
);

export default function Hobbies({ lang }) {
  return (
    <div className="margin-containers">
      <h2 className="m-a title-under">{ lang ? 'Hobbies & Interests' : 'Pasatiempos' }</h2>
      <div className="hobbies">
        { hobbiesGen(lang) }
      </div>
    </div>
  );
}

Hobbies.propTypes = {
  lang: PropTypes.bool.isRequired,
};
