const action = {
  CHANGE_TO_MAIN: 'MAIN',
  CHANGE_TO_BIO: 'BIO',
  CHANGE_TO_LANG: 'LANG',
  ENG: 'ENG',
  ESP: 'ESP',
};

const changeToMain = () => ({
  type: action.CHANGE_TO_MAIN,
});

const changeToBio = () => ({
  type: action.CHANGE_TO_BIO,
});

const changeToLang = () => ({
  type: action.CHANGE_TO_LANG,
});

const langSpanish = () => ({
  type: action.ESP,
});

const langEnglish = () => ({
  type: action.ENG,
});

export default {
  action, changeToBio, changeToMain, changeToLang, langEnglish, langSpanish,
};
