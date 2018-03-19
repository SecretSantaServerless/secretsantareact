import { combineReducers } from 'redux';
import wishes from './wishes';

const wishesApp = combineReducers({
  wishes,
});

export default wishesApp;
