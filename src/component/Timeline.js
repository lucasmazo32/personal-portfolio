import React from 'react';
import PropTypes from 'prop-types';
import timeline from '../helper/timeline';

const myTimeline = [...timeline];

const timeElements = lang => (
  myTimeline.map(element => (
    <div className="timeline-element" key={element.eng}>
      <div className="timeline-wrap">
        <img src={element.img} alt="" />
        <span className="timeline-desc">{ lang ? element.eng : element.esp }</span>
      </div>
      <span className="timeline-year">{element.year}</span>
    </div>
  ))
);

export default function Timeline({ lang }) {
  return (
    <div className="timeline margin-containers">
      <h2 className="title-under m-a">{ lang ? 'Timeline' : 'Línea de Tiempo'}</h2>
      { timeElements(lang) }
    </div>
  );
}

Timeline.propTypes = {
  lang: PropTypes.bool.isRequired,
};
