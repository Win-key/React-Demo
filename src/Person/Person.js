import React from 'react';

const person = (props) => {
    let style = {
        width : '400px',
        border : '1px solid black',
        borderRadius : '5px',
        backgroundColor : '#e9e9e9',
        padding : '20px',
        margin : '2px',
        borderShadow : '2px'
    }
    return (
    <div style={style}>
        <p onClick={props.delete}>Name : {props.name}! and Age : {props.age} years old.</p>
        <input  type="text" onChange={props.change} placeholder="Change the Person Name here..." width="200" />
    </div>
    );
};

export default person;