import { CARDINAL, getCardinal } from '../cardinal';

describe('cardinal', () => {
  describe('CARDINAL', () => {
    it('should return the left cardinals', () => {
      let direction = CARDINAL.NORTH;
      direction = direction.left;
      expect(direction).toEqual(CARDINAL.WEST);
      direction = direction.left;
      expect(direction).toEqual(CARDINAL.SOUTH);
      direction = direction.left;
      expect(direction).toEqual(CARDINAL.EAST);
      direction = direction.left;
      expect(direction).toEqual(CARDINAL.NORTH);
    });
    it('should return the right cardinals', () => {
      let direction = CARDINAL.NORTH;
      direction = direction.right;
      expect(direction).toEqual(CARDINAL.EAST);
      direction = direction.right;
      expect(direction).toEqual(CARDINAL.SOUTH);
      direction = direction.right;
      expect(direction).toEqual(CARDINAL.WEST);
      direction = direction.right;
      expect(direction).toEqual(CARDINAL.NORTH);
    });
  });
  describe('getCardinal', () => {
    it('should get NORTH when given NORTH', () => {
      expect(getCardinal('NORTH')).toEqual(CARDINAL.NORTH);
    });
    it('should return SOUTH when given SOUTH', () => {
      expect(getCardinal('SOUTH')).toEqual(CARDINAL.SOUTH);
    });
    it('should return undefined when given a non-cardinal', () => {
      expect(getCardinal(123)).toEqual(undefined);
    });
  });
});
