import React,{Component} from 'react';//, { Component }
//import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'
import Radium,{StyleRoot} from 'radium';

class App extends Component {

  state = {
    person : [
      {id : 'klsdf', name : 'Winkey', age : 24},
      {id : 'iouwe89', name : 'Dynamic', age : 5},
      {id : 'jklasd', name : 'Undefined', age : 24}
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

  onChangeHandler = (event, id)=>{
    let changeIndex = this.state.person.findIndex(e=>e.id===id);
    let persons = [...this.state.person];
    persons[changeIndex].name=event.target.value; 
    this.setState({person : persons});
  }

  deletePersonHandler = (id)=>{
    let persons = this.state.person.filter(e=>e.id!==id);
    this.setState({
      person : persons
    });
  }

  render(){

    let style = {
      textAlign : 'center',
      marginTop : '25px'
    }
    let childStyle = {display:'inline-block'};
    let person = null;
    if(this.state.showPerson){
      person = <div style = {style}><div style={childStyle}>
        {
          this.state.person.map(person => {
            return <Person 
                key={person.id} 
                name={person.name} 
                age={person.age} 
                delete={()=>this.deletePersonHandler(person.id)}
                change={(event)=>this.onChangeHandler(event,person.id)}
                ></Person>
          })
        }
        </div></div>;
    }

    return (
      <StyleRoot>
      <div className="App">
        <h1>Hi.. I'm WinKey...</h1>
        <button onClick={this.toggleHandler}>Toggle Persons</button>
        {person}
      </div>
      </StyleRoot>
    );
  };
}

export default App;