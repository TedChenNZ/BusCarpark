import { clone, isEmpty } from 'ramda';
import { CARDINAL, getCardinal } from './cardinal';

export const MIN_X = 0;
export const MAX_X = 5;

export const MIN_Y = 0;
export const MAX_Y = 5;

export function validateXYF(x, y, f) {
  if (Number.isNaN(x)) {
    throw new Error('x value needs to be a number');
  }
  if (x < MIN_X || x > MAX_X) {
    throw new Error(`x must be betewen ${MIN_X} and ${MAX_X}`);
  }
  if (Number.isNaN(y)) {
    throw new Error('y value needs to be a number');
  }
  if (y < MIN_Y || y > MAX_Y) {
    throw new Error(`y must be betewen ${MIN_Y} and ${MAX_Y}`);
  }
  if (getCardinal(f) === undefined) {
    throw new Error(`Direction needs to be one of: ${Object.keys(CARDINAL)}`);
  }
}


export function validBus(bus) {
  try {
    validateXYF(bus.x, bus.y, bus.f);
    return true;
  } catch (e) {
    return false;
  }
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
