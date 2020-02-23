import React from 'react';//, { Component }
//import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

const app = ()=> {
  
  const person = [
    {name : 'Winkey', age : 23}
  ];
    return (
      <div className="App">
        <h1>Hi.. I'm WinKey...</h1>
        <button >Switch Name</button>
        <Person name={person[0].name} age={person[0].age}>Let's rock buddy</Person>
      </div>
    );
  
}

export default app;

// state = {
//   person : [
//     {name : 'Winkey', age : 23}
//   ]
// }

// switchNameHandler = () => {
//   console.log('Was clicked');
//   this.setState({person : [
//     {name : 'Venkatesh', age : 23},

//   ]});
// }