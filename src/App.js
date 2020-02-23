import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    person : [
      {name : 'Winkey', age : 23}
    ]
  }
  render(){
    return (
      <div className="App">
        <h1>Hi.. I'm WinKey...</h1>
        <Person name={this.state.person[0].name} age={this.state.person[0].age}>Let's rock buddy</Person>
      </div>
    );
  }
}

export default App;
