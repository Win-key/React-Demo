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
    otherState : 'something else'
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

  switchNameHandler = ([name, age]) => {
    console.log('Was clicked');
    //setPersonState
    this.setState({person : [
      {name : name, age : age} ,
      {name : 'React Learning', age : 5}
    ]});
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
        <button onClick={this.switchNameHandler.bind(this, ['Venkatesh',24])}>Switch Name</button>
        <Person name={this.state.person[0].name} age={this.state.person[0].age} click={this.switchNameHandler.bind(this, ['Venky',23])}>Let's rock buddy</Person>
        <Person name={this.state.person[0].name} age={this.state.person[0].age} click={()=>this.switchNameHandler( ['React',4])}>Second Component</Person>
        <input type='text' onChange={this.onChangeHandler}/>
        <Person name={this.state.person[1].name} age={this.state.person[1].age} click={()=>this.switchNameHandler( ['React',4])}>Two way bind Component</Person>
      </div>
    );
  };
}

export default App;