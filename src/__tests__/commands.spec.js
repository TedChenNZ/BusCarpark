import { createStore } from 'redux';
import parseCommand from '../commands';
import reducer from '../reducers';

function runCommands(store, commands) {
  commands.forEach((cmd) => {
    parseCommand(store, cmd);
  });
}

describe('commands', () => {
  let spy;
  let store;
  beforeEach(() => {
    spy = jest.spyOn(global.console, 'log');
    store = createStore(reducer);
  });
  afterEach(() => {
    spy.mockRestore();
  });
  describe('parseCommand', () => {
    it('should console.log 0,1,NORTH after some commands', () => {
      runCommands(store, [
        'PLACE 0,0,NORTH',
        'MOVE',
        'REPORT',
      ]);
      expect(spy).toHaveBeenCalled();
      expect(spy.mock.calls[0]).toEqual(['0,1,NORTH']);
    });
    it('should console.log 0,0,WEST after some commands', () => {
      runCommands(store, [
        'PLACE 0,0,NORTH',
        'LEFT',
        'REPORT',
      ]);
      expect(spy).toHaveBeenCalled();
      expect(spy.mock.calls[0]).toEqual(['0,0,WEST']);
    });
    it('should console.log 3,3,NORTH after some commands', () => {
      runCommands(store, [
        'PLACE 1,2,EAST',
        'MOVE',
        'MOVE',
        'LEFT',
        'MOVE',
        'REPORT',
      ]);
      expect(spy).toHaveBeenCalled();
      expect(spy.mock.calls[0]).toEqual(['3,3,NORTH']);
    });
  });
});
