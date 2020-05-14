import React from 'react';
import timeline from '../helper/timeline';

const myTimeline = [...timeline];

const timeElements = () => (
  myTimeline.map(element => (
    <div className="timeline-element" key={element}>
      <div className="timeline-wrap">
        <img src={element.img} alt="" />
        <span className="timeline-desc">{element.desc}</span>
      </div>
      <span className="timeline-year">{element.year}</span>
    </div>
  ))
);

export default function Timeline() {
  return (
    <div className="timeline margin-containers">
      <h2 className="title-under m-a">Timeline</h2>
      { timeElements() }
    </div>
  )
}
