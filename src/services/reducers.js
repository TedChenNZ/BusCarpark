import { combineReducers } from 'redux';
import bus from './bus/reducer';

const rootReducer = combineReducers({
  bus,
});

export default rootReducer;
