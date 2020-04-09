import React from 'react';
import Radium from 'radium';

const person = (props) => {
    let style = {
        width : '400px',
        border : '1px solid black',
        borderRadius : '5px',
        backgroundColor : '#e9e9e9',
        padding : '20px',
        margin : '2px',
        borderShadow : '2px',
        ':hover' : {
            backgroundColor : '#a2a2a2',
            color : '#e2e2e2'
        },
        '@media(min-width:500px)':{
            width : '450px'
        }
    }
    return (
        
    <div style={style}>
        <p onClick={props.delete}>Name : {props.name}! and Age : {props.age} years old.</p>
        <input  type="text" onChange={props.change} placeholder="Change the Person Name here..." width="200" />
    </div>
    );
};

export default Radium(person);