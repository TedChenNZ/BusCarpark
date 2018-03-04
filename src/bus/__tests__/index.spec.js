import { place, move, MAX_X, MAX_Y, left, right } from '../';

describe('simulator', () => {
  describe('left', () => {
    it('should change the direction to WEST if given a bus facing NORTH and the LEFT command', () => {
      const bus = {
        x: 0,
        y: 0,
        f: 'NORTH',
      };
      const newBus = left(bus);
      expect(newBus.f).toEqual('WEST');
      expect(newBus.x).toEqual(0);
      expect(newBus.y).toEqual(0);
    });
  });

  describe('right', () => {
    it('should change the direction to SOUTH if given a bus facing EAST and the RIGHT command', () => {
      const bus = {
        x: 2,
        y: 3,
        f: 'EAST',
      };
      const newBus = right(bus);
      expect(newBus.f).toEqual('SOUTH');
      expect(newBus.x).toEqual(2);
      expect(newBus.y).toEqual(3);
    });
  });

  describe('place', () => {
    it('should return a bus object the x y f fields', () => {
      expect(place(3, 2, 'SOUTH')).toEqual({
        x: 3,
        y: 2,
        f: 'SOUTH',
      });
    });
  });

  describe('move', () => {
    it('should only change y from 3 to 4 if facing NORTH', () => {
      const bus = {
        x: 1,
        y: 3,
        f: 'NORTH',
      };
      const newBus = move(bus);
      expect(newBus.x).toEqual(1);
      expect(newBus.y).toEqual(4);
      expect(newBus.f).toEqual('NORTH');
    });
    it('should only change y from 4 to 3 if facing SOUTH', () => {
      const bus = {
        x: 1,
        y: 4,
        f: 'SOUTH',
      };
      const newBus = move(bus);
      expect(newBus.x).toEqual(1);
      expect(newBus.y).toEqual(3);
      expect(newBus.f).toEqual('SOUTH');
    });
    it('should only change x from 1 to 2 if facing EAST', () => {
      const bus = {
        x: 1,
        y: 4,
        f: 'EAST',
      };
      const newBus = move(bus);
      expect(newBus.x).toEqual(2);
      expect(newBus.y).toEqual(4);
      expect(newBus.f).toEqual('EAST');
    });
    it('should only change x from 1 to 0 if facing WEST', () => {
      const bus = {
        x: 1,
        y: 4,
        f: 'WEST',
      };
      const newBus = move(bus);
      expect(newBus.x).toEqual(0);
      expect(newBus.y).toEqual(4);
      expect(newBus.f).toEqual('WEST');
    });

    it('should not move the bus if it meets constraints while facing NORTH', () => {
      const bus = {
        x: 1,
        y: MAX_Y,
        f: 'NORTH',
      };
      const newBus = move(bus);
      expect(newBus.x).toEqual(1);
      expect(newBus.y).toEqual(MAX_Y);
      expect(newBus.f).toEqual('NORTH');
    });
    it('should not move the bus if it meets constraints while facing SOUTH', () => {
      const bus = {
        x: 1,
        y: 0,
        f: 'SOUTH',
      };
      const newBus = move(bus);
      expect(newBus.x).toEqual(1);
      expect(newBus.y).toEqual(0);
      expect(newBus.f).toEqual('SOUTH');
    });
    it('should not move the bus if it meets constraints while facing EAST', () => {
      const bus = {
        x: MAX_X,
        y: 4,
        f: 'EAST',
      };
      const newBus = move(bus);
      expect(newBus.x).toEqual(MAX_X);
      expect(newBus.y).toEqual(4);
      expect(newBus.f).toEqual('EAST');
    });
    it('should not move the bus if it meets constraints while facing WEST', () => {
      const bus = {
        x: 0,
        y: 4,
        f: 'WEST',
      };
      const newBus = move(bus);
      expect(newBus.x).toEqual(0);
      expect(newBus.y).toEqual(4);
      expect(newBus.f).toEqual('WEST');
    });
  });
});
