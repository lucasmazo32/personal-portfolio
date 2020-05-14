import React from 'react';
import hobbies from '../helper/hobbies';

const hobbiesGen = () => (
  hobbies.map(hobby => (
    <div className="hobby" key={hobby.desc}>
      <img src={hobby.img} alt="" />
      <span>{hobby.desc}</span>
    </div>
  ))
);

export default function Hobbies() {
  return (
    <div className="margin-containers">
      <h2 className="m-a title-under">Hobbies &amp; Interests</h2>
      <div className="hobbies">
        { hobbiesGen() }
      </div>
    </div>
  );
}
