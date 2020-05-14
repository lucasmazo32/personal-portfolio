import actions from '../actions/index';

const { action } = actions;
const { CHANGE_TO_BIO, CHANGE_TO_MAIN } = action;

const pageReducer = (state = false, action) => {
  switch (action.type) {
    case CHANGE_TO_MAIN:
      return true;
    case CHANGE_TO_BIO:
      return false;
    default:
      return state;
  }
};

export default pageReducer;
