import React from 'react';
import Viewer from './Viewer';
import { shallow } from 'enzyme';

it('tests Viewer Component', () => {
  const text = ['my super test', 'my super test 2'];
  const wrapper = shallow(<Viewer text={text} />).dive();

  expect(wrapper.children().length).toBe(text.length);
  wrapper.children().forEach((elem, index) => {
    expect(elem.text()).toBe(text[index]);
  });
});
