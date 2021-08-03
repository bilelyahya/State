import React, { Component } from "react";
import Profil from "./Profil";

export class Count extends Component {
  constructor(props) {
    console.log("constructor()");
    super(props);

    this.state = {
      count: 0,
      timing: 0,
    };
  }
componentDidMount(){
    setInterval(() => {
        this.setState({timing : this.state.timing+1})
    }, 1000);
}
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };
  render() {
    return (
      <div align="center">
        <button onClick={this.increment}>+</button>
        <h1>{this.state.count}</h1>
        <button onClick={this.decrement}>-</button>
        <br></br>
        <Profil/>
        <h1>{this.state.timing}</h1>
      </div>
    );
  }
}

export default Count;
