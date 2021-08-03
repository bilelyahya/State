import React, { Component } from "react";
import Count from "./component/Count";
import 'bootstrap/dist/css/bootstrap.min.css';
export class App extends Component {
  state = { show : false };
  toggle = () => {
    this.setState({ show: !this.state.show });
  };
  render() {
    return (
      <div>
        <div align="center">
        <button onClick={this.toggle}>
        
         {this.state.show ? "Hide" : "Show"}
        </button></div>
        {this.state.show ? <Count/>   : <div align="center">Cliquer pour afficher le compteur</div>}
      </div>
    );
  }
}

export default App;
