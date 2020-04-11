import React from 'react';
import Person from './Person/Person'

const Persons = props=>{
    
    let style = {
        textAlign : 'center',
        marginTop : '25px'
      }
    let childStyle = {display:'inline-block'};
    let persons = null;

    if(props.showPerson){
        persons = <div style = {style}><div style={childStyle}>
          {
            props.persons.map(person => {
              return <Person 
                  key={person.id} 
                  name={person.name} 
                  age={person.age} 
                  delete={()=>props.delete(person.id)}
                  change={(event)=>props.change(event,person.id)}
                  ></Person>
            })
          }
          </div></div>;
      }

    return persons;
}

export default Persons;