import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  it('renders a container with ideas', () => {
      const wrapper = shallow(<App />)

      expect(wrapper).toMatchSnapshot();
  })
})
