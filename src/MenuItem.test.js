import React from 'react';
import MenuItem from './MenuItem';
import { shallow } from 'enzyme';
import { Button } from 'react-bootstrap';

it('tests MenuItem Component', () => {
  function handler() {
    console.log('handler');
  }

  const text = 'my super test';
  const wrapper = shallow(<MenuItem clickHandler={handler} label={text} />);
  expect(
    wrapper.equals(<Button bsStyle="primary" onClick={handler}>{text}</Button>),
  ).toBe(true);

  expect(wrapper).toMatchSnapshot();
});
