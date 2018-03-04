import es from 'event-stream';
import createStore from './store';
import parseCommand from './commands';

const store = createStore();

function parse(command) {
  parseCommand(store, command);
}

console.log('Please input a command...');
process.stdin
  .pipe(es.split())
  .on('data', parse);
