import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

function App() {
  return (
    <div className="App">
      <h1>Hi.. I'm WinKey...</h1>
      <Person name="Winkey" age="24">Let's rock buddy</Person>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
