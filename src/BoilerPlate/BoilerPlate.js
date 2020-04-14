import React, {useEffect, useRef, useContext} from 'react';
import AuthContext from '../context/AuthContext'

const BoilerPlate = props=>{
    const btnRef = useRef(null);
    useEffect(()=>{
        btnRef.current.click();
    },[]);
    const authContext = useContext(AuthContext);

    return (
        <div>
            <h1>Hi.. I'm WinKey...</h1>
            <button onClick={props.toggle} ref={btnRef}>Toggle Persons</button>
            <button onClick={authContext.login} >Log In</button>
        </div>
    )
}

export default BoilerPlate;