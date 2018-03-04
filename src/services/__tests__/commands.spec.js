import { isEmpty } from 'ramda';
import createStore from '../store';
import parseCommand from '../commands';

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
    store = createStore();
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


    it('should ignore commands which would cause the bus to exit the carpark', () => {
      runCommands(store, [
        'PLACE 0,0,WEST',
        'MOVE',
        'REPORT',
        'LEFT',
        'MOVE',
        'REPORT',
        'PLACE 5,5,NORTH',
        'MOVE',
        'MOVE',
        'REPORT',
        'RIGHT',
        'MOVE',
        'REPORT',
        'PLACE 100,-100,EAST',
        'REPORT',
      ]);
      expect(spy.mock.calls[0]).toEqual(['0,0,WEST']);
      expect(spy.mock.calls[1]).toEqual(['0,0,SOUTH']);
      expect(spy.mock.calls[2]).toEqual(['5,5,NORTH']);
      expect(spy.mock.calls[3]).toEqual(['5,5,EAST']);
      expect(spy.mock.calls[4]).toEqual(['5,5,EAST']);
    });
  });

  it('should ignore invalid directions', () => {
    runCommands(store, ['PLACE 0,0,testing']);
    const { bus } = store.getState();
    expect(isEmpty(bus)).toEqual(true);
  });

  it('should ignore all inputs until a valid place', () => {
    runCommands(store, [
      'MOVE',
      'PLACE 0,0,testing',
      'LEFT',
      'RIGHT',
      'bogus',
      'REPORT',
    ]);
    expect(isEmpty(store.getState().bus)).toEqual(true);
    expect(spy).not.toHaveBeenCalled();
    runCommands(store, [
      'PLACE 3,2,NORTH',
      'REPORT',
    ]);
    expect(store.getState().bus).toEqual({
      x: 3,
      y: 2,
      f: 'NORTH',
    });
    expect(spy).toHaveBeenCalled();
    expect(spy.mock.calls[0]).toEqual(['3,2,NORTH']);
  });
});
