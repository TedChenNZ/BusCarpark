import { place, left, right, move } from './bus/actions';
import { report, validateXYF } from './bus';

export function parsePlaceWords(input) {
  const words = input.split(' ');
  if (words.length === 2) {
    const opt = words[1];
    const props = opt.split(',');
    if (props.length === 3) {
      const x = parseInt(props[0], 10);
      const y = parseInt(props[1], 10);
      const f = props[2];
      validateXYF(x, y, f);
      console.log(f);
      return {x, y, f};
    }
  }
  throw new Error('Invalid place options');
}

export const COMMANDS = {
  PLACE: {
    name: 'PLACE',
    func: (store, words) => {
      const { x, y, f } = parsePlaceWords(words);
      store.dispatch(place(x, y, f));
    },
  },
  MOVE: {
    name: 'MOVE',
    func: (store) => {
      store.dispatch(move());
    }
  },
  LEFT: {
    name: 'LEFT',
    func: (store) => {
      store.dispatch(left());
    }
  },
  RIGHT: {
    name: 'RIGHT',
    func: (store) => {
      store.dispatch(right());
    }
  },
  REPORT: {
    name: 'REPORT',
    func: (store) => {
      const { bus } = store.getState();
      report(bus);
    }
  },
};

export function getCommand(command) {
  const words = command.split(' ');
  let action = '';
  if (words.length > 1) {
    action = words.shift();
  } else {
    [action] = words;
  }
  if (COMMANDS[action]) {
    return COMMANDS[action];
  }
  throw new Error('Invalid command');
}

export default function parseCommand(store, words) {
  try {
    const command = getCommand(words);
    if (command) {
      command.func(store, words);
    }
  } catch (e) {
    console.error(e.message);
  }
}
