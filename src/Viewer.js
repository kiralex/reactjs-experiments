import React from 'react';
import injectSheet from 'react-jss'

const styles = {
  viewer: {
    left: '0',
    'text-align': 'left'
  },
};

const Viewer = ({classes, text }) => {
  return (
    <div>
      {text.map(e => <div className={classes.viewer} key={e}>{e}</div>)}
    </div>
  );
};

export default injectSheet(styles)(Viewer);
