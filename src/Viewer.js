import React from 'react';

class Viewer extends React.PureComponent {
  render() {
    let array = [];
    this.props.text.forEach(elem => {
      array.push(<div className="viewer" key={elem}>{elem}</div>);
    });
    return <div>{array}</div>;
  }
}

export default Viewer;
