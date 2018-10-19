import React from 'react';
import { shallow } from 'enzyme';
import Counter from '../Counter';

describe('Counter', () => {
  test('render', () => {
    const wrapper = shallow(<Counter />);
    expect(wrapper.find('input[type="button"]'));
  });
});
