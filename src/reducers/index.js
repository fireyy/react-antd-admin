import { combineReducers } from 'redux';
import user from './user';
import menu from './menu';

const rootReducer = combineReducers({
  user,
  menu
});

export default rootReducer;
