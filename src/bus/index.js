import { clone } from 'ramda';
import { CARDINAL, getCardinal } from './cardinal';

export const MAX_X = 5;
export const MAX_Y = 5;

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

export function left(bus) {
  const newBus = clone(bus);
  newBus.f = getCardinal(bus.f).left.name;
  return newBus;
}

export function right(bus) {
  const newBus = clone(bus);
  newBus.f = getCardinal(bus.f).right.name;
  return newBus;
}

export function report(bus) {
  console.log(`${bus.x},${bus.y},${bus.f}`);
  return bus;
}
