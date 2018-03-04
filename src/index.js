import es from 'event-stream';
import { createStore } from 'redux';
import parseCommand from './commands';
import reducer from './reducers';

const store = createStore(reducer);

function parse(command) {
  parseCommand(store, command);
}

console.log('Please input a command...');
process.stdin
  .pipe(es.split())
  .on('data', parse);
