import React from 'react';
import './App.css';
import MenuItem from './MenuItem.js';
import Viewer from './Viewer.js';
import update from 'react-addons-update';
import axios from 'axios';

class App extends React.PureComponent {
  static ELEM_EMPTY = 0;
  static ELEM_CHARACTERS = 1;
  static ELEM_TIMEBASED = 2;

  constructor(props) {
    super(props);
    this.state = {
      element: self.ELEM_EMPTY,
      text: [],
    };
  }

  async clickHandler(action) {
    let url = 'http://localhost:3100/';
    let response = [];

    switch (action) {
      case App.ELEM_CHARACTERS:
        url += 'characters';
        break;
      default:
        url += 'timebased';
        break;
    }

    // Accept: 'application/json',
    // 'Content-Type': 'application/json',
    let resp = await axios({
      method: 'get',
      url: url,
      responseType: 'application/json',
    });

    switch (action) {
      case App.ELEM_CHARACTERS:
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

    //response = JSON.stringify(resp.data);
    let newState = update(this.state, {
      elem: { $set: action },
      text: { $set: response },
    });
    this.setState(newState);
  }

  render() {
    return (
      <div className="App">
        <div id="menu">
          <MenuItem
            label="Characters"
            clickHandler={() => this.clickHandler(App.ELEM_CHARACTERS)}
          />
          <MenuItem
            label="Timebased"
            clickHandler={() => this.clickHandler(App.ELEM_TIMEBASED)}
          />
        </div>
        <Viewer text={this.state.text} />

      </div>
    );
  }
}

export default App;
