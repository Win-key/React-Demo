import React,{Component} from 'react';
//import logo from './logo.svg';
import './App.css';
// import Radium,{StyleRoot} from 'radium';
import Persons from '../Persons/Persons'
import BoilerPlate from '../BoilerPlate/BoilerPlate'
import AuthContext from '../context/AuthContext'
class App extends Component {

  state = {
    person : [
      {id : 'klsdf', name : 'Winkey', age : 24},
      {id : 'iouwe89', name : 'Dynamic', age : 5},
      {id : 'jklasd', name : 'Undefined', age : 24}
    ],
    otherState : 'something else',
    showPerson : false,
    auth : false
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
    this.setState((prevState, props)=>{
      return{showPerson : !prevState.showPerson}
    });
  };

  onChangeHandler = (event, id)=>{
    let changeIndex = this.state.person.findIndex(e=>e.id===id);
    let persons = [...this.state.person];
    persons[changeIndex].name=event.target.value; 
    this.setState((prevState, props)=>{
      return {person : persons}
    });
  }

  deletePersonHandler = (id)=>{
    let persons = this.state.person.filter(e=>e.id!==id);
    this.setState({
      person : persons
    });
  }
  loginHandler = ()=>{
    this.setState((prevState, props)=>{
      return {auth : !prevState.auth}
    });
  }

  render(){
    return (
      // <StyleRoot>
      <AuthContext.Provider value={{auth : this.state.auth, login : this.loginHandler }}>
      <div className="App">
        <BoilerPlate toggle={this.toggleHandler} />
        <Persons 
          showPerson={this.state.showPerson}
          persons = {this.state.person}
          delete = {this.deletePersonHandler}
          change = {this.onChangeHandler}
        />
      </div>
      </AuthContext.Provider>
    );
  };
}

export default App;