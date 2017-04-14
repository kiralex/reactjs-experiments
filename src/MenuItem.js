import React from 'react';
import 'babel-polyfill';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const MenuItem = ({ clickHandler, label }) => (
  <Button bsStyle="primary" onClick={clickHandler}>{label}</Button>
);

MenuItem.propTypes = {
  'clickHandler': PropTypes.func.isRequired,
  'label' : PropTypes.string.isRequired,
}

export default MenuItem;
