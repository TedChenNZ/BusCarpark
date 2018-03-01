import { COMMANDS, parseInput, changeDirection, place } from '../';

describe('simulator', () => {
  describe('parseInput', () => {
    it('should throw an error if invalid input is given', () => {
      expect(() => parseInput('blah')).toThrowError(/Invalid/);
    });
    it('should throw an error if a number is given', () => {
      expect(() => parseInput(1)).toThrowError(/Invalid/);
    });
    it('should throw an error if undefined is given', () => {
      expect(() => parseInput(undefined)).toThrowError(/Invalid/);
    });
    it('should throw an error if null is given', () => {
      expect(() => parseInput(null)).toThrowError(/Invalid/);
    });
    it('should return the MOVE command if given MOVE', () => {
      expect(parseInput('MOVE')).toEqual(COMMANDS.MOVE);
    });
  });

  describe('changeDirection', () => {
    it('should change the direction to WEST if given a bus facing NORTH and the LEFT command', () => {
      const bus = {
        x: 0,
        y: 0,
        f: 'NORTH',
      };
      const newBus = changeDirection(bus, COMMANDS.LEFT);
      expect(newBus.f).toEqual('WEST');
      expect(newBus.x).toEqual(0);
      expect(newBus.y).toEqual(0);
    });
    it('should change the direction to SOUTH if given a bus facing EAST and the RIGHT command', () => {
      const bus = {
        x: 2,
        y: 3,
        f: 'EAST',
      };
      const newBus = changeDirection(bus, COMMANDS.RIGHT);
      expect(newBus.f).toEqual('SOUTH');
      expect(newBus.x).toEqual(2);
      expect(newBus.y).toEqual(3);
    });
  });

  describe('place', () => {
    expect(place(3, 2, 'SOUTH')).toEqual({
      x: 3,
      y: 2,
      f: 'SOUTH',
    });
  });
});
