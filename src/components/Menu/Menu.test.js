import React from 'react';
import { shallow } from 'enzyme';
import Menu from './Menu';

describe('Menu', () => {
  it('renders the baseline menu structure', () => {
    const wrapper = shallow(<Menu selectNewsType={jest.fn()} />);

    expect(wrapper).toMatchSnapshot();
  })
})