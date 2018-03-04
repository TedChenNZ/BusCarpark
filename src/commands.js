import { place, left, right, move } from './bus/actions';
import { report } from './bus';

export const COMMANDS = {
  PLACE: (store, words) => {
    if (words.length === 1) {
      const opt = words[0];
      const props = opt.split(',');
      if (props.length === 3) {
        const x = parseInt(props[0], 10);
        const y = parseInt(props[1], 10);
        if (Number.isNaN(x)) {
          throw new Error('x value needs to be a number');
        }
        if (Number.isNaN(y)) {
          throw new Error('y value needs to be a number');
        }
        const f = props[2];
        const directions = ['NORTH', 'EAST', 'WEST', 'SOUTH'];
        if (directions.indexOf(f) === -1) {
          throw new Error(`direction needs to be one of: ${directions}`);
        }
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
      console.error(e);
    }
  } else {
    console.log('Invalid command');
  }
}
