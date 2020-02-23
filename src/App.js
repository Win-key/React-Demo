import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    person : [
      {name : 'Winkey', age : 23}
    ]
  }

  switchNameHandler = () => {
    console.log('Was clicked');
    this.setState({person : [
      {name : 'Venkatesh', age : 23},

    ]});
  }

  render(){
    return (
      <div className="App">
        <h1>Hi.. I'm WinKey...</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.person[0].name} age={this.state.person[0].age}>Let's rock buddy</Person>
      </div>
    );
  }
}

export default App;
