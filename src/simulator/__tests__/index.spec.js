import { COMMANDS, parseInput } from '../';

describe('simulator', () => {
  describe('parseInput', () => {
    it('throws an error if invalid input is given', () => {
      expect(() => parseInput('blah')).toThrowError(/Invalid/);
    });
    it('throws an error if a number is given', () => {
      expect(() => parseInput(1)).toThrowError(/Invalid/);
    });
    it('throws an error if undefined is given', () => {
      expect(() => parseInput(undefined)).toThrowError(/Invalid/);
    });
    it('throws an error if null is given', () => {
      expect(() => parseInput(null)).toThrowError(/Invalid/);
    });
    it('returns the MOVE command if given MOVE ', () => {
      expect(parseInput('MOVE')).toEqual(COMMANDS.MOVE);
    });
  });
});
