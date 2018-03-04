import es from 'event-stream';
import createStore from './services/store';
import parseCommand from './services/commands';

const store = createStore();

function parse(command) {
  parseCommand(store, command);
}

console.log('Please input a command...');
process.stdin
  .pipe(es.split())
  .on('data', parse);
