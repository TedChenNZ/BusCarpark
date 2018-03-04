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
    const left = jest.fn();
    const right = jest.fn();
    const move = jest.fn();
    const place = jest.fn();
    const wrapper = mount(<Input left={left} right={right} move={move} place={place} />);
    wrapper.find('input').simulate('change', { target: { value: 'LEFT' } });
    expect(wrapper.state('input')).toEqual('LEFT');
  });
  // it('should call left when left is typed', () => {
  //   const left = jest.fn(); 
  //   const wrapper = mount(<Input left={left} />);
  //   wrapper.find('#input').simulate('change', { taget: { value: 'LEFT' } });

  // });
});