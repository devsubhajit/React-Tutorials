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
    // name = '';
    constructor(props) {
        super(props);
        this.state = {
            name: 'Subhajit',
            city: 'Kolkata',
            skills: ['html', 'css', 'js']
        }
        // this.name = 'Rajkumar';
    }

    render() {
        return (
            <div className={`header ${greet.myClass}`}>
                Hello {this.state.name}
                {/* {this.name} */}
                <ul>
                    {this.state.skills.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })}
                </ul>
                <ChildGreeting org={'Google'}>
                    <p>I am child paragraph</p>
                    <p>I am child paragraph 2</p>
                </ChildGreeting>
            </div>
        )
    }
}

export default Greetings;