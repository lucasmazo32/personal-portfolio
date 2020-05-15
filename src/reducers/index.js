import { combineReducers } from 'redux';
import pageReducer from './page';
import langReducer from './lang';

export default combineReducers({
  pageReducer,
  langReducer,
});
