import { clone } from 'ramda';
import { CARDINAL, getCardinal } from './cardinal';

export const COMMANDS = {
  PLACE: 'PLACE',
  MOVE: 'MOVE',
  LEFT: 'LEFT',
  RIGHT: 'RIGHT',
  REPORT: 'REPORT',
};

export const MAX_X = 5;
export const MAX_Y = 5;

export function parseInput(input) {
  if (input && typeof input === 'string') {
    const cmd = input.split(' ')[0];
    const commandList = Object.values(COMMANDS);
    const index = commandList.indexOf(cmd);
    if (index > -1) {
      return commandList[index];
    }
  }
  throw new Error('Invalid input');
}

export function place(x, y, f) {
  return {
    x,
    y,
    f,
  };
}

export function move(bus) {
  const newBus = clone(bus);
  switch (bus.f) {
    case CARDINAL.NORTH.name:
      newBus.y = bus.y + 1;
      break;
    case CARDINAL.SOUTH.name:
      newBus.y = bus.y - 1;
      break;
    case CARDINAL.EAST.name:
      newBus.x = bus.x + 1;
      break;
    case CARDINAL.WEST.name:
      newBus.x = bus.x - 1;
      break;
    default:
      break;
  }
  if (newBus.x < 0 || newBus.x > MAX_X || newBus.y < 0 || newBus.y > MAX_Y) {
    return bus;
  }
  return newBus;
}

export function changeDirection(bus, direction) {
  const newBus = clone(bus);
  if (direction === COMMANDS.LEFT) {
    newBus.f = getCardinal(bus.f).left.name;
  }
  if (direction === COMMANDS.RIGHT) {
    newBus.f = getCardinal(bus.f).right.name;
  }
  return newBus;
}

export function report(bus) {
  console.log(`${bus.x},${bus.y},${bus.f}`);
}

export default parseInput;
