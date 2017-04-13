import React from 'react';
import App from './App';
import MenuItem from './MenuItem';
import Viewer from './Viewer';
import { Button } from 'react-bootstrap';
import { shallow, mount, render } from 'enzyme';
import nock from 'nock';

// var couchdb = nock('http://localhost:3000').get('/characters').reply(200, {
//   error: false,
//   characters: ['Luke Skywalker', 'C-3PO', 'R2-D2'],
//   length: 3,
// });

it('test App components', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(MenuItem).length).toBe(2);
  expect(wrapper.find(Viewer).length).toBe(1);

  // wrapper.find(MenuItem).forEach((elem, index) => {
  //   console.log(`Après : ${wrapper.state('element')}`); //   // expect(app.state('element')) // }); // // // wrapper.children().forEach( (elem, index) => { // //   expect(elem.text()).toBe(text[index]); // });
});

test('setState after clickHandler', async () => {
  const wrapper = shallow(<App />);
  console.log(`Avant : ${wrapper.state('element')}`);

  await wrapper
    .instance()
    .clickHandler()

  console.log(`Après : ${wrapper.state('element')}`);

});
