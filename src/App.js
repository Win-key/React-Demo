import React,{useState} from 'react';//, { Component }
//import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

const App = props=> {
  const [ personState, setPersonState] = useState({
    person : [
      {name : 'Winkey', age : 23}
    ],
    otherState : 'something else'
  });  

  const switchNameHandler = () => {
    console.log('Was clicked');
    setPersonState({person : [
      {name : 'Venkatesh', age : 23} 
    ]});
  }
    return (
      <div className="App">
        <h1>Hi.. I'm WinKey...</h1>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personState.person[0].name} age={personState.person[0].age}>Let's rock buddy</Person>
      </div>
    );
  
}

export default App;