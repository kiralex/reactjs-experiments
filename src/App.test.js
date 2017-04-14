import React from 'react';
import {App, ELEM_EMPTY, ELEM_CHARACTERS, ELEM_TIMEBASED} from './App';
import MenuItem from './MenuItem';
import Viewer from './Viewer';
import { Button } from 'react-bootstrap';
import { shallow } from 'enzyme';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

var mock = new MockAdapter(axios);

it('test App components', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(MenuItem).length).toBe(2);
  expect(wrapper.find(Viewer).length).toBe(1);
});
test('setState after clickHandler', async () => {
  const elementsTimebased = [];
  const respCharaters = {
    error: false,
    characters: [
      'Luke Skywalker',
      'C-3PO',
      'R2-D2'
    ],
    length: 3,
  };
  const respTimebased = {
    "length": 2,
    "elements": [
      {
        "id": "656xwp",
        "title": "Lmao someone made cod:mw3 into a real thing"
      },
      {
        "id": "656xv3",
        "title": "The compulsive gum swallower"
      }
    ]
  }

  respTimebased.elements.forEach( (elem) => {
    elementsTimebased.push(elem.id + ' : ' + elem.title);
  })

  mock.onGet('http://test:3000/api/characters').reply(200, respCharaters);
  mock.onGet('http://test:3000/api/timebased').reply(200, respTimebased);
  try {
    const wrapper = shallow(<App />);
    expect(wrapper.state('element')).toBe(ELEM_EMPTY);

    await wrapper.instance().clickHandler(ELEM_CHARACTERS);
    expect(wrapper.state('element')).toBe(ELEM_CHARACTERS);
    expect(wrapper.state('text')).toEqual(respCharaters.characters);

    await wrapper.instance().clickHandler(ELEM_TIMEBASED);
    expect(wrapper.state('element')).toBe(ELEM_TIMEBASED);
    expect(wrapper.state('text')).toEqual(elementsTimebased);
  } catch (err) {
    console.log(err);
  }
});
