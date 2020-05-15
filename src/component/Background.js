/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

export default function Background({ lang }) {
  return (
    <div className="background-info">
      <h2 className="title-under m-a">Background</h2>
      <p>
        { lang
          ? 'When I finished school, I had a variety of choices to study at the university because I loved maths, physics, and programming. I finally ended up choosing Mechanical Engineering.'
          : 'Cuando terminé el colegio tenía una difícil decisión sobre qué estudiar en la universidad porque amo las matemáticas, física y programación. Finalmente me decidí por estudiar ingeniería mecánica.'}
        <br />
        <br />
        { lang
          ? 'I did my internship at Philip Morris International in Colombia in HR (I will not explain why, but this would be an exciting topic to have over coffee). I programmed some macros among all the duties. After doing so and realizing how much passion I put into building them, I realized that programming was my passion.'
          : 'Realicé mis prácticas profesionales en Philip Morris International - Colombia en Recursos Humanos (No voy a explicar por qué aquí, pero sería una interesante conversación para tener algún día). Durante mis prácticas programé macro dentro de muchas otras cosas. En ese momento me di cuenta la pasión con la que lo hacía, y supe que la programación era lo mío.'}
        <br />
        <br />
        { lang
          ? 'Upon seeing an opportunity to study Full-Stack Web Development, I decided to pursue that dream. It has been a long ride in which I have built projects and learn programming languages and frameworks such as Ruby, Ruby on Rails, JavaScript, React, and Redux. I gained tools like git, git-flow, webpack, refactoring the code, DRY rule, and loosely coupled objects and also acquired soft skills such as teamwork and how to receive and give feedback.'
          : 'Cuando vi la oportunidad de estudiar para ser Full-Stack Developer, decidí seguir mi sueño. Ha sido un largo camino en el cuál he construido proyectos, y he aprendido lenguajes y frameworks como Ruby, Ruby on Rails, JavaScript, React y Redux. He adquirido herramientas como git, git-flow, webpack, rediseñar (refactor) códigos, regla DRY, y ‘loosely coupled objects’ y he adquirido habilidades blandas como trabajo en equipo, y dar y recibir retroalimentación.'}
      </p>
    </div>
  );
}

Background.propTypes = {
  lang: PropTypes.bool.isRequired,
};
