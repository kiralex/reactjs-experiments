import React from 'react';
import App from './App';
import MenuItem from './MenuItem';
import { shallow } from 'enzyme';

it('renders three <Foo /> components', () => {
  const wrapper = shallow(<App />);
  console.log(wrapper.find(MenuItem).length);
});

describe('test test', () => {
  it('tototo', () => {
    const wrapper = shallow(<div>toto</div>);
    expect(wrapper.equals(<div>toto</div>)).toBe(false);
  });
});
