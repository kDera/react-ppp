import { Component } from "react";

class Counter extends Component{
    constructor(){
        super();
        this.state ={
            counter: 0,
        };
    }
    render(){
        return <h3>Counter value is: {this.state.counter} </h3>
    }
}

export default Counter;
