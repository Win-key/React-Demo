import React from 'react';

const BoilerPlate = props=>{
    return (
        <div>
            <h1>Hi.. I'm WinKey...</h1>
            <button onClick={props.toggle}>Toggle Persons</button>
        </div>
    )
}

export default BoilerPlate;