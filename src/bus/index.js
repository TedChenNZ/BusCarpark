import { clone, isEmpty } from 'ramda';
import { CARDINAL, getCardinal } from './cardinal';

export const MIN_X = 0;
export const MAX_X = 5;

export const MIN_Y = 0;
export const MAX_Y = 5;

export function validBus(bus) {
  if (bus.x < MIN_X || bus.x > MAX_X ||
    bus.y < MIN_Y || bus.y > MAX_Y ||
    getCardinal(bus.f) === undefined) {
    return false;
  }
  return true;
}

export function place(bus, x, y, f) {
  const newBus = {
    x,
    y,
    f,
  };
  if (validBus(newBus)) {
    return newBus;
  }
  return bus;
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
  if (validBus(newBus)) {
    return newBus;
  }
  return bus;
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
  if (!isEmpty(bus)) {
    console.log(`${bus.x},${bus.y},${bus.f}`);
  }
  return bus;
}
