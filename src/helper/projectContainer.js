import react from '../assets/images/icons/react.png';
import redux from '../assets/images/icons/redux.png';
import javascript from '../assets/images/icons/javascript.png';
import rails from '../assets/images/icons/rails.png';
import heroku from '../assets/images/icons/heroku.png';
import sass from '../assets/images/icons/sass.png';
import jlt from '../assets/images/projects/jlt.jpeg';
import march from '../assets/images/projects/march.png';
import otp from '../assets/images/projects/otp.png';
import hmmm from '../assets/images/projects/hmmm.png';
import dilution from '../assets/images/projects/dilution.png';

const projectContainer = {
  dilution: {
    image: dilution,
    title: 'Dilution',
    titulo: '"Dilution"',
    eng: '"Dilution" is a project designed and created by me, using UI and UX principles. It is a web application, and even though it works on all devices, it is designed exclusively for mobile. The page works using Spotify API, and it intends to help you find different songs that you may like.',
    esp: '"Dilution" es un proyecto diseñado y creado por mí, usando principios de UI y UX. Es una página web diseñada únicamente para celulares (funciona para computador y tablet, pero no es la misma experiencia). La página funciona con el API de Spotify, y su propósito es ayudarte a encontrar canciones diferentes que te puedan gustar.',
    icons: [
      react,
      redux,
      sass,
    ],
    refs: [
      'https://5ef4bb1bce77554c957b455b--dilution.netlify.app/',
      'https://github.com/lucasmazo32/dilution',
    ],
  },
  hmmm: {
    image: hmmm,
    title: 'Hmmm',
    titulo: 'Hmmm',
    eng: '‘Hmmm - we help you decide’ is a full-stack project, using Rails as the backend and React-Redux as the front-end. The webpage helps clients selling tours with users. You will have all the information available regarding each trip and book them for a specific date.',
    esp: '‘Hmmm - we help you decide’ es un proyecto full-stack con Rails como back-end y React-Redux como front-end. La página conecta a clientes vendiendo tours con usuarios. Tendrás toda la información disponible para cada viaje y podrás reservarlos para una fecha específica.',
    icons: [
      react,
      redux,
      sass,
      rails,
      heroku,
    ],
    refs: [
      'https://5edaa2d5b186b616885a172d--hmmm-app.netlify.app/',
      'https://github.com/lucasmazo32/hmmm',
    ],
  },
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
      'https://github.com/lucasmazo32/just-like-that',
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
  otp: {
    image: otp,
    title: 'OneTrick Ponny',
    titulo: 'OneTrick Pony',
    eng: '"OneTrick Ponny" is a React-Redux project based on a movie catalog using an API to retrieve the information. On the webpage, you can select movies from ten pre-selected ones or choose any film you like by looking for them on the searcher. Add all the shows you like to your favorites and look at them any time you want. Clicking in the movie image will show you more information.',
    esp: '‘OneTrick Ponny’ es un proyecto usando React-Redux basado en un catálogo de películas usando un API para obtener la información. En la página, podrás seleccionar diez películas dentro de un catálogo o buscar la que quieras. Puedes agregar tus shows a favoritos y mirar tu lista de favoritos cuando quieras.',
    icons: [
      react,
      redux,
      sass,
    ],
    refs: [
      'https://5ec6d65e060eac840e83bba6--naughty-euler-862f81.netlify.app/',
      'https://github.com/lucasmazo32/otp',
    ],
  },
};

export default projectContainer;
