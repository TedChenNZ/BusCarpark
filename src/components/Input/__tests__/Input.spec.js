import React from 'react';
import { mount } from 'enzyme';
import { Input } from '../Input';

describe('Input', () => {
  let left;
  let right;
  let move;
  let place;
  let wrapper;

  beforeEach(() => {
    left = jest.fn();
    right = jest.fn();
    move = jest.fn();
    place = jest.fn();
    wrapper = mount(<Input left={left} right={right} move={move} place={place} />);
  })

  afterEach(() => {
    wrapper.unmount();
  })
  
  it('should call update state.input when text is typed', () => {
    wrapper.find('input').simulate('change', { target: { value: 'LEFT' } });
    expect(wrapper.state('input')).toEqual('LEFT');
  });
  it('should call left when LEFT is typed and submitted', () => {
    wrapper.find('input').simulate('change', { target: { value: 'LEFT' } });
    wrapper.find('form').simulate('submit');
    expect(left).toHaveBeenCalled();
  });
  it('should call right when RIGHT is typed and submitted', () => {
    wrapper.find('input').simulate('change', { target: { value: 'RIGHT' } });
    wrapper.find('form').simulate('submit');
    expect(right).toHaveBeenCalled();
  });
  it('should call move when MOVE is typed and submitted', () => {
    wrapper.find('input').simulate('change', { target: { value: 'MOVE' } });
    wrapper.find('form').simulate('submit');
    expect(move).toHaveBeenCalled();
  });
  it('should call place when PLACE is typed and submitted', () => {
    wrapper.find('input').simulate('change', { target: { value: 'PLACE 0,0,NORTH' } });
    wrapper.find('form').simulate('submit');
    expect(place).toHaveBeenCalled();
  });
  it('should reset input when submitted', () => {
    wrapper.find('input').simulate('change', { target: { value: 'anythingH' } });
    wrapper.find('form').simulate('submit');
    expect(wrapper.state('input')).toEqual('');
  });
  it('should show an error when incorrect text is submitted', () => {
    wrapper.find('input').simulate('change', { target: { value: 'anything' } });
    wrapper.find('form').simulate('submit');
    expect(wrapper.html()).toContain('Invalid command');
  });
});
