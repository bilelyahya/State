import React, { Component } from 'react'
import counter from './component/counter'

export class App extends Component {
  state = {show:false,}
  toggle = () => {
this.setState({show:!this.state.show})    
  }
  render() {
    return (
      <div>
        <button onClick={this.toggle}>{this.state.show ? "Hide" : "Show"}</button>{this.state.show ? <counter/> : "Cliquer pour afficher le compteur"}
      </div>
    )
  }
}

export default App
