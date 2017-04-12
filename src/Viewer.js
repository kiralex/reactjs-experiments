import React from 'react';

class Viewer extends React.Component {
  render() {
    return (
      <div>
        {this.props.text.map(e => <div className="viewer" key={e}>{e}</div>)}
      </div>
    );
  }
}

export default Viewer;
