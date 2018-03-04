import es from 'event-stream';
import { createStore } from 'redux';
import COMMANDS from './commands';
import reducer from './reducers';

const store = createStore(reducer);

function parseCommand(command) {
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

console.log('Please input a command...');
process.stdin
  .pipe(es.split())
  .on('data', parseCommand);
