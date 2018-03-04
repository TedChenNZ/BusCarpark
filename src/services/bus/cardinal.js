const NORTH = {
  name: 'NORTH',
};
const EAST = {
  name: 'EAST',
};
const SOUTH = {
  name: 'SOUTH',
};
const WEST = {
  name: 'WEST',
};

NORTH.left = WEST;
NORTH.right = EAST;

EAST.left = NORTH;
EAST.right = SOUTH;

SOUTH.left = EAST;
SOUTH.right = WEST;

WEST.left = SOUTH;
WEST.right = NORTH;

export const CARDINAL = {
  NORTH, EAST, SOUTH, WEST,
};

export function getCardinal(facing) {
  return Object.values(CARDINAL).find(element => element.name === facing);
}
