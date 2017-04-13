import React from 'react';
import 'babel-polyfill';
import { Button } from 'react-bootstrap';

const MenuItem = ({ clickHandler, label, action }) => (
  <Button bsStyle="primary" onClick={clickHandler}>{label}</Button>
);

export default MenuItem;
