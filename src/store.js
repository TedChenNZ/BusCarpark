import { createStore as reduxCreateStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import validator from './bus/middleware/validator';

const createStore = (...props) =>
  reduxCreateStore(reducer, applyMiddleware(validator), ...props);

export default createStore;
