import React, { Component } from 'react';
import propTypes from 'prop-types'
import './Counter.css'
import { throwStatement } from '@babel/types';

class Counter extends Component {

    constructor(){
        super();        // Important!!!! to use 'this' keyword
        this.state = {
            counter : 0
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
        this.reset = this.reset.bind(this)
    }


    render(){
        return (
          <div className="Counter">
            <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement}/>
            <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}/>
            <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}/>
            <span className="count">{this.state.counter}</span>
            <div>
            <button className="reset" onClick={this.reset} >Reset</button>
            </div>
          </div>
        );
      }

    reset() {
        // console.log(`increment from parent = ${by}`)
        this.setState( {counter:0})
    }
    

    increment(by) {   
        // console.log(`increment from parent = ${by}`)
        this.setState( (prevState) => {
            return {counter:prevState.counter + by}    
        })
    }

    decrement(by) {   
        // console.log(`increment from parent = ${by}`)
        this.setState( (prevState) => {
            return {counter:prevState.counter - by}    
        })
    }
}


class CounterButton extends Component{
    
    // Define the inital state in a counstrutor
    // State => counter 0

    constructor(){
        super();        // Important!!!! to use 'this' keyword
        this.state = {
            counter : 0
        }
        // this.increment = this.increment.bind(this)
    }

    render() {
        // render = () =>{
        // var is global variable
        // let is block variable
        // let style={fontSize : "50px", padding: "15px 30px"};
        return (
            <div className="counter">
                <button onClick={this.increment}> +{this.props.by}</button>
                <button onClick={this.decrement}> -{this.props.by}</button>
            </div> 
        )
    }
    
    // Update state => counter++
    increment = () => {    // no need to bind anymore with arrow function
        // console.log('increment');

        // do not update/use variable directly
        this.setState({
            counter:this.state.counter+this.props.by 
        });
        this.props.incrementMethod(this.props.by);
    }

    decrement = () => { 
        this.setState({
            counter:this.state.counter-this.props.by 
        });
        this.props.decrementMethod(this.props.by);
    }

}

CounterButton.defaultProps = {
    by : 1
}

CounterButton.propTypes = {
    by : propTypes.number
}

export default Counter;