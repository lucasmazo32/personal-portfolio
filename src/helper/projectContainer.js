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
    text: '"Just Like That" is a desktop web application created to mimic some features from Twitter, like creating tweets, tagging users on those tweets, and following and unfollowing users. I deployed this application on Heroku.',
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
    text: '"March - The game" is a desktop game created using JavaScript and Phaser. March is a level-based game (ten levels) in which you will have to overcome obstacles and finish as fast as possible. You can see the scoreboard and beat other people\'s scores.',
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
    text: '"March - The game" is a desktop game created using JavaScript and Phaser. March is a level-based game (ten levels) in which you will have to overcome obstacles and finish as fast as possible. You can see the scoreboard and beat other people\'s scores.',
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
