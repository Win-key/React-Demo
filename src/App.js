import React,{Component} from 'react';//, { Component }
//import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    person : [
      {name : 'Winkey', age : 24},
      {name : 'Dynamic', age : 5},
      {name : 'she', age : 24}
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

    let person = null;
    if(this.state.showPerson){
      person = <div>
        {
          this.state.person.map(person => {
            return <Person name={person.name} age={person.age} ></Person>
          })
        }
        </div>;
    }

    return (
      <div className="App">
        <h1>Hi.. I'm WinKey...</h1>
        <button onClick={this.toggleHandler}>Toggle Persons</button>
        {person}
      </div>
    );
  };
}

export default App;