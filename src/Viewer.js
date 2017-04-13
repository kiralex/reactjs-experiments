import React from 'react';

const Viewer = ({ text }) => {
  return (
    <div>
      {text.map(e => <div className="viewer" key={e}>{e}</div>)}
    </div>
  );
};

export default Viewer;
