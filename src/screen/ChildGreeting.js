import React, { Component } from 'react';

class ChildGreeting extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className={`child`} >I am Child</div>
        )
    }
}

export default ChildGreeting;

