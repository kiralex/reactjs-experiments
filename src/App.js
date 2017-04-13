import React from 'react';
import './App.css';
import MenuItem from './MenuItem.js';
import Viewer from './Viewer.js';
import axios from 'axios';

const ELEM_EMPTY = 0;
const ELEM_CHARACTERS = 1;
const ELEM_TIMEBASED = 2;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      element: 0,
      text: [],
    };
  }

  async clickHandler(action) {
    let url = '/api/';
    const response = [];

    switch (action) {
      case ELEM_CHARACTERS:
        url += 'characters';
        break;
      default:
        url += 'timebased';
        break;
    }

    const resp = await axios({
      method: 'get',
      url: url,
      responseType: 'application/json',
    });

    switch (action) {
      case ELEM_CHARACTERS:
        resp.data.characters.forEach(elem => {
          response.push(elem);
        });
        break;
      default:
        resp.data.elements.forEach(elem => {
          response.push(elem.id + ' : ' + elem.title);
        });
        break;
    }

    let newState = {
      ...this.state,
      element: action,
      text: response,
    }; // // const a = { //   ...this.state, //   element: action, // }; // // const b = { //   element: action, //   ...this.state, // }; // // console.log(a.element); // console.log(b.element);

    // console.log(`Départ : ${this.state.element}`)
    this.setState(newState);
  }

  render() {
    return (
      <div className="App">
        <div id="menu">
          <MenuItem
            label="Characters"
            clickHandler={() => this.clickHandler(ELEM_CHARACTERS)}
            action={ELEM_CHARACTERS}
          />
          <MenuItem
            label="Timebased"
            clickHandler={() => this.clickHandler(ELEM_TIMEBASED)}
            action={ELEM_TIMEBASED}
          />
        </div>
        <Viewer text={this.state.text} />

      </div>
    );
  }
}
export default App;
