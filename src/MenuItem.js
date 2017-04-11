import React from 'react';
import { Button } from 'react-bootstrap';

class MenuItem extends React.PureComponent{
    constructor(props){
        super(props);
        this.state = {label: this.props.label };

    }

    render(){
        return <Button bsStyle="primary" onClick={this.props.clickHandler}>{this.state.label}</Button>
    }
}

export default MenuItem;
