import { Component } from "react";

class Counter extends Component{
    constructor(){ // construtor para uso do estado da variável
        super();
        this.state ={
            counter: 0, //valor inicial
        };
    }

    increment(){//somador simples
        this.setState({ //mudança de eestado da variável
            counter: this.state.counter + 1
        })
    }

    decrement(){//subtrator simples
        this.setState({
            counter: this.state.counter - 1
        })
    }

    render(){
        return(
        <div>
            <h3>Counter value is: {this.state.counter} </h3> 
            <button onClick={()=>this.increment()}>Increment</button>
            <button onClick={()=>this.decrement()}>Decrement</button>
        </div>
        )   
    }

}

export default Counter;
