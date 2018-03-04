import { isEmpty } from 'ramda';
import { ACTION_TYPES } from '../actions';

const validator = store => next => (action) => {
  if (action.type !== ACTION_TYPES.PLACE && isEmpty(store.getState().bus)) {
    return {};
  }
  const result = next(action);
  return result;
};

export default validator;
