const action = {
  CHANGE_TO_MAIN: 'MAIN',
  CHANGE_TO_BIO: 'BIO',
  CHANGE_TO_INT: 'INT',
  ENG: 'ENG',
  ESP: 'ESP',
};

const changeToMain = () => ({
  type: action.CHANGE_TO_MAIN,
});

const changeToBio = () => ({
  type: action.CHANGE_TO_BIO,
});

const changeToInt = () => ({
  type: action.CHANGE_TO_INT,
});

const langSpanish = () => ({
  type: action.ESP,
});

const langEnglish = () => ({
  type: action.ENG,
});

export default {
  action, changeToBio, changeToMain, changeToInt, langEnglish, langSpanish,
};
