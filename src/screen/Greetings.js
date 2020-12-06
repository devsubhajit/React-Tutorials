import React, { Component } from 'react';
import './style.css';
import greet from './style.module.css';

import ChildGreeting from './ChildGreeting';

const mystyle = {
    color: 'blue',
    backgroundColor: '#fd30ab',
    fontSize: '40px'
}

class Greetings extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className={`header ${greet.myClass}`} >
                Hello World
                <ChildGreeting />
            </div>
        )
    }
}

export default Greetings; 
// with {

// }

