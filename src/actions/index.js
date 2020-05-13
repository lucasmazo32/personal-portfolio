const action = {
  CHANGE_TO_MAIN: 'MAIN',
  CHANGE_TO_BIO: 'BIO',
};

const changeToMain = () => ({
  type: action.CHANGE_TO_MAIN,
});

const changeToBio = () => ({
  type: action.CHANGE_TO_BIO,
});

export default { action, changeToBio, changeToMain };
