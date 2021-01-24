import React, { Component } from 'react';

class Events extends Component {
    constructor(props) {
        super(props)
        this.state = {
            greet: 'Hello',
            x:'red'
        }
    }

    changeGreetOne = () => {
        this.setState({
            greet: 'Hola'
        })
    }
    changeGreet() {
        this.setState({
            greet: 'Namaskaram'
        })
        // document.getElementById('x').style.backgroundColor = 'red';
    }

    render() {
        console.log(this.props)
        return (
            <div id="x">
                <p>{this.props.myvalue}</p>
                <p>{this.props.myobj.id} : {this.props.myobj.value}</p>
                <h1>{this.state.greet}</h1>
                <input type="text" value={this.state.greet}  onChange={(e)=> this.setState({greet:e.target.value})}/>
                {/* <button type="button" onClick={()=> this.state.greet == 'Hello' ?  this.setState({greet:'Hola'}) :  this.setState({greet:'Hello'})}>Change Greeting</button> */}
                <button type="button" onClick={this.changeGreetOne}>Change Greeting</button>
                <label htmlFor="myid">Click here </label><br />
                <button id="myid" type="button" onClick={() => this.changeGreet()}>Change Greeting</button>
                {this.props.children}
            </div>
        )
    }
}

export default Events;

/**
 * 2/3
 * if(x === 2){
 *      // we are doing great
 *  }else{
 *      // we are doing fantastic
 *  }
 *
 * // Ternary
 *  x === 2 ? 'we are doing great' : 'we are doing fantastic'
 * (()=>{
 * })
 *
 */

//  function myname(){

//  }

//  myname = () =>{

//  }

//  myname();

//  {()=>{

//  }}

// (function(){

// })

