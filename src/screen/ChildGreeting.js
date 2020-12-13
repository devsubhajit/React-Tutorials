import React, { Component } from 'react';

class ChildGreeting extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        console.log('props', this.props);
        return (
            <div className={`child`} >
                I am Child my org is {this.props.org}
                {this.props.children}
            </div>
        )
    }
}

export default ChildGreeting;

