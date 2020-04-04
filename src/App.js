import React,{Component} from 'react';//, { Component }
//import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    person : [
      {name : 'Winkey', age : 23},
      {name : 'Dynamic', age : 5}
    ],
    otherState : 'something else',
    showPerson : false
  };
  /*const [ personState, setPersonState] = useState({
    person : [
      {name : 'Winkey', age : 23}
    ],
    otherState : 'something else'
  });  

  const [ otherState, setOtherState] = useState({
    otherState : 'something else'
  });*/  

  toggleHandler = () => {
    this.setState({showPerson : !this.state.showPerson});
  };

  onChangeHandler = (event)=>{
    this.setState({person : [
      {name : 'Winkey', age : 23},
      {name : event.target.value, age : 5}
    ]});
  }

  render(){
    return (
      <div className="App">
        <h1>Hi.. I'm WinKey...</h1>
        <button onClick={this.toggleHandler}>Toggle Persons</button>
        {
          this.state.showPerson ? 
          <div>
          <Person name={this.state.person[0].name} age={this.state.person[0].age} >Let's rock buddy</Person>
          <Person name={this.state.person[0].name} age={this.state.person[0].age} >Second Component</Person>
          <input type='text' onChange={this.onChangeHandler}/>
          <Person name={this.state.person[1].name} age={this.state.person[1].age} >Two way bind Component</Person>
          </div>
          : null
        }
      </div>
    );
  };
}

export default App;