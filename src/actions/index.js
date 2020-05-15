const action = {
  CHANGE_TO_MAIN: 'MAIN',
  CHANGE_TO_BIO: 'BIO',
  ENG: 'ENG',
  ESP: 'ESP',
};

const changeToMain = () => ({
  type: action.CHANGE_TO_MAIN,
});

const changeToBio = () => ({
  type: action.CHANGE_TO_BIO,
});

const langSpanish = () => ({
  type: action.ESP,
});

const langEnglish = () => ({
  type: action.ENG,
});

export default {
  action, changeToBio, changeToMain, langEnglish, langSpanish,
};
