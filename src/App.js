import React from 'react';
import './App.css';
import MenuItem from './MenuItem.js';
import Viewer from './Viewer.js';
import axios from 'axios';

class App extends React.Component {
  static ELEM_EMPTY = 0;
  static ELEM_CHARACTERS = 1;
  static ELEM_TIMEBASED = 2;

  constructor(props) {
    super(props);
    this.state = {
      element: App.ELEM_EMPTY,
      text: [],
    };
  }

  async clickHandler(action) {
    let url = 'http://localhost:3100/';
    const response = [];

    switch (action) {
      case App.ELEM_CHARACTERS:
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

    let newState = {
      ...this.state,
      element: action ,
      text: response
    };

    // console.log(`Départ : ${this.state.element}`)
    //
    // const a = {
    //   ...this.state,
    //   element: action,
    // };
    //
    // const b = {
    //   element: action,
    //   ...this.state,
    // };
    //
    // console.log(a.element);
    // console.log(b.element);

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
