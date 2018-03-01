import { clone } from 'ramda';
import { getCardinal } from './cardinal';

export const COMMANDS = {
  PLACE: 'PLACE',
  MOVE: 'MOVE',
  LEFT: 'LEFT',
  RIGHT: 'RIGHT',
  REPORT: 'REPORT',
};

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
