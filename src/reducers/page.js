import actions from '../actions/index';

const { action } = actions;
const { CHANGE_TO_BIO, CHANGE_TO_MAIN, CHANGE_TO_INT } = action;

const pageReducer = (state = 'main', action) => {
  switch (action.type) {
    case CHANGE_TO_MAIN:
      return 'main';
    case CHANGE_TO_BIO:
      return 'bio';
    case CHANGE_TO_INT:
      return 'int';
    default:
      return state;
  }
};

export default pageReducer;
