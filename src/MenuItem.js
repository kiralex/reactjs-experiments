import React from 'react';
import { Button } from 'react-bootstrap';

class MenuItem extends React.Component{
    render(){
        return <Button bsStyle="primary" onClick={this.props.clickHandler}>{this.props.label}</Button>
    }
}

export default MenuItem;
