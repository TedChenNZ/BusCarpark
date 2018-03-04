export const ACTION_TYPES = {
  PLACE: 'PLACE',
  MOVE: 'MOVE',
  LEFT: 'LEFT',
  RIGHT: 'RIGHT',
};

export const place = (x, y, f) => ({
  type: ACTION_TYPES.PLACE,
  x,
  y,
  f,
});
export const move = () => ({ type: ACTION_TYPES.MOVE });
export const left = () => ({ type: ACTION_TYPES.LEFT });
export const right = () => ({ type: ACTION_TYPES.RIGHT });
