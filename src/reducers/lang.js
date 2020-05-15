import actions from '../actions/index';

const { action } = actions;
const { ENG, ESP } = action;

const langReducer = (state = true, action) => {
  switch (action.type) {
    case ENG:
      return true;
    case ESP:
      return false;
    default:
      return state;
  }
};

export default langReducer;
