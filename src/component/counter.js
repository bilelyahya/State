import React, { Component } from 'react'

export class counter extends Component {
    constructor(props) {
        console.log("constructor()")
        super(props)
    
        this.state = {
             count : 0,

        }
    }
    increment = () => {
        this.setState({count : this.state.count+1})
    }
    decrement = () => {
        this.setState({count : this.state.count-1})
    }

    render() {
        console.log("render()")
        return (
            <div>
                <button onClick={this.increment}>+</button>
                <h1>{this.state.count}</h1>
                <button onClick={this.decrement}>-</button>

            </div>
        )
    }
}

export default counter
