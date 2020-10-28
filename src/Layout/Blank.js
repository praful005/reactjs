// Home.js
import React, {Component} from 'react';

export default class Blank extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <React.Fragment>
                {this.props.children}
            </React.Fragment>
        )
    }
}