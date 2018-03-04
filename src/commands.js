import { place, left, right, move } from './bus/actions';
import { report, MAX_X, MAX_Y, MIN_X, MIN_Y } from './bus';

function validatePlaceInput(x, y, f) {
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
  const directions = ['NORTH', 'EAST', 'WEST', 'SOUTH'];
  if (directions.indexOf(f) === -1) {
    throw new Error(`direction needs to be one of: ${directions}`);
  }
}

export const COMMANDS = {
  PLACE: (store, words) => {
    if (words.length === 1) {
      const opt = words[0];
      const props = opt.split(',');
      if (props.length === 3) {
        const x = parseInt(props[0], 10);
        const y = parseInt(props[1], 10);
        const f = props[2];
        validatePlaceInput(x, y, f);
        store.dispatch(place(x, y, f));
      }
    }
  },
  MOVE: (store) => {
    store.dispatch(move());
  },
  LEFT: (store) => {
    store.dispatch(left());
  },
  RIGHT: (store) => {
    store.dispatch(right());
  },
  REPORT: (store) => {
    const { bus } = store.getState();
    report(bus);
  },
};


export default function parseCommand(store, command) {
  const words = command.split(' ');
  let action = '';
  if (words.length > 1) {
    action = words.shift();
  } else {
    [action] = words;
  }
  if (COMMANDS[action]) {
    try {
      COMMANDS[action](store, words);
    } catch (e) {
      console.error(e.message);
    }
  } else {
    console.error('Invalid command');
  }
}
