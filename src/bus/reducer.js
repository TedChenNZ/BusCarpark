import { ACTION_TYPES } from './actions';
import { left, right, move, place } from './';

const initialState = {
};

export default function bus(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.PLACE:
      return place(action.x, action.y, action.f);
    case ACTION_TYPES.MOVE:
      return move(state);
    case ACTION_TYPES.LEFT:
      return left(state);
    case ACTION_TYPES.RIGHT:
      return right(state);
    default:
      return state;
  }
}
