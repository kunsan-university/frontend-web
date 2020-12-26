import { combineReducers } from 'redux';
import board from './board';
import dialog from './dialog';

const rootReducer = combineReducers({
  board,
  dialog,
});

export default rootReducer;
