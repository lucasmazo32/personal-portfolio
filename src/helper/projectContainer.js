import react from '../assets/images/icons/react.png';
import redux from '../assets/images/icons/redux.png';
import javascript from '../assets/images/icons/javascript.png';
import rails from '../assets/images/icons/rails.png';
import heroku from '../assets/images/icons/heroku.png';
import sass from '../assets/images/icons/sass.png';
import jlt from '../assets/images/projects/jlt.jpeg';
import march from '../assets/images/projects/march.png';
import portfolio from '../assets/images/projects/portfolio.png';

const projectContainer = {
  'just like that': {
    image: jlt,
    title: 'Just Like That',
    titulo: 'Just Like That',
    eng: '"Just Like That" is a desktop web application created to mimic some features from Twitter, like creating tweets, tagging users on those tweets, and following and unfollowing users. I deployed this application on Heroku.',
    esp: '"Just Like That" es una aplicación para computador creada para imitar algunas de las funciones de Twitter como crear tweets, etiquetar usuarios en esos tweets, seguir y dejar de seguir otros usuarios. Implementé está aplicación en Heroku.',
    icons: [
      rails,
      heroku,
      sass,
    ],
    refs: [
      'https://immense-castle-68670.herokuapp.com/',
      'https://github.com/lucasmazo32/twitter-redesign',
    ],
  },
  march: {
    image: march,
    title: 'March Game',
    titulo: 'March - Juego',
    eng: '"March - The game" is a desktop game created using JavaScript and Phaser. March is a level-based game (ten levels) in which you will have to overcome obstacles and finish as fast as possible. You can see the scoreboard and beat other people\'s scores.',
    esp: '"March" es un juego de escritorio creado con JavaScript y Phaser. "March" cuenta con diez niveles en los cuales tendrás que superar obstáculos y terminar lo antes posible. Puedes ver la tabla de puntajes y superar el puntaje de otras personas.',
    icons: [
      javascript,
    ],
    refs: [
      'https://lucasmazo32.github.io/march-game/',
      'https://github.com/lucasmazo32/march-game',
    ],
  },
  portfolio: {
    image: portfolio,
    title: 'Portfolio',
    titulo: 'Portafolio',
    eng: 'The portfolio is my project to showcase my abilities and present myself to anyone interested. The code that maintains this webpage is modularized and can be expanded in the future. I hope you had a good experience.',
    esp: 'Portafolio es mi proyecto para mostrar mis habilidades y presentarme ante cualquiera que esté interesado. El código de esta página está modularizado y puede ser expandido en el futuro. Espero que hayas tenido una buena experiencia.',
    icons: [
      react,
      redux,
      sass,
    ],
    refs: [
      'https://lucasmazo32.github.io/march-game/',
      'https://github.com/lucasmazo32/march-game',
    ],
  },
};

export default projectContainer;
