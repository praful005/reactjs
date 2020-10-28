// Home.js
import React, {Component} from 'react';
import Header from './../Shared/Header';
import MenuBar from './../Shared/MenuBar';
import Footer from './../Shared/Footer';

export default class Default extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <React.Fragment>
                <div className="page">
                    <div className="flex-fill">
                        <Header />
                        {this.props.children}
                        <Footer />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}